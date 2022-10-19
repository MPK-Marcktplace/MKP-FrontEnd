import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cards from "../../components/Cards/index";
import "./departments.css";
import api from "../../services/api";

const Departments = () =>{

    const [products, setProducts] = useState([]);
    
    useEffect(() =>{
        api.get("/products")
            .then((response) => {
                setProducts(response.data.products);                
            });
    },[]);

    return(
        <main>
            <div className="container-departments">
                {products.map((product) =>(
                    Cards (product.name, product.description, product.image)
                ))}
            </div>
        </main>
    )
};

export default Departments;