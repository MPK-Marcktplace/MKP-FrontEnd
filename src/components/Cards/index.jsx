import { Link } from "react-router-dom";
import "./cards.css";

const Cards = (nameItem, overview, image) => {
    return(
        <div className="card-component">
            <div className="card-component-header">
                <img src={image} alt={overview}/>
            </div>
            <div className="card-component-footer">
                <Link>{nameItem}</Link>
            </div>
        </div>
    )
};

export default Cards;
