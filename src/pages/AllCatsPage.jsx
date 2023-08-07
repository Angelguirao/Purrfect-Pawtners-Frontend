import { useEffect, useState } from "react";

const AllCatsPage = () => {
    //store data
    const [cats, setCats] = useState([]);

    const fetchCats = async () => {
        try {
            const response = await fetch("http://localhost:3000/cats");
            if (response.status === 200) {
                const parsedCats = await response.json();
                setCats(parsedCats);
            }
        } catch (error) {
            console.error(error);
        }
    };

    //make sure we access data and running once at mounting time
    useEffect(() => {
        fetchCats();
    }, []);

    return (
        <div>
            {" "}
            <h1> All Cats </h1>
            {cats.map((cat) => (
                <div key={cat._id}>
                    <img
                        src={cat.imageUrl}
                        alt={cat.name}
                        style={{ height: "200px" }}
                    />
                    <h3> {cat.name}</h3>
                    <p>{cat.description}</p>
                </div>
            ))}
        </div>
    );
};

export default AllCatsPage;
