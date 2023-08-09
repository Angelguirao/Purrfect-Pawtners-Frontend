import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/config.index";

const AllCatsPage = () => {
    //store data
    const [cats, setCats] = useState([]);

    const fetchCats = async () => {
        try {
            const response = await fetch(`${API_URL}/cats/cats`);
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
                        src={cat.image}
                        alt={cat.name}
                        style={{ height: "200px" }}
                    />
                    <Link to={`/cats/${cat._id}`}>
                        {" "}
                        <h3> {cat.name}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AllCatsPage;
