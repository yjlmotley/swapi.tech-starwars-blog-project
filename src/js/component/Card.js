
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import noImg from "../../img/sw-no-img.jpg";


const Card = ({ item, index, category }) => {

    const { store, actions } = useContext(Context);
    const GUIDE_URL = "https://starwars-visualguide.com/assets/img/";
    const [imgSrc, setImgSrc ] = useState(`${GUIDE_URL}${category}/${index + 1}.jpg`);
    
    const handleImgErr = () => {
        setImgSrc(noImg);
    }

    const imgStyle = {
        height: category === "vehicles" ? "180px" :
            category === "planets" ? "254px" :
                "auto",
    };

    const isFavorite = store.favorites.some(fav => fav.name === item.name && fav.category === category)
    const toggleFavorites = () => {
        const indexToDelete = store.favorites.findIndex(fav => fav.name === item.name && fav.category === category)
        isFavorite ? actions.deleteFavorites(indexToDelete) : actions.addFavorites({ name: item.name, index, category })
    }


    return (

        <div className="card" >
            <img src={imgSrc} onError={handleImgErr} style={imgStyle} className="card-img-top" alt="img not available" />
            <div className="card-body d-flex flex-column" id="cardBody" style={{ maxWidth: "18rem" }}>
                <h5 className="card-title fw-bold">{item.name}</h5>
                <p className="card-text">
                    {
                        category == "characters" ? "Gender: " + item.gender :
                            category == "planets" ? "Population: " + item.population :
                                "Crew: " + item.crew
                    }
                </p>
                <p className="card-text">
                    {
                        category == "characters" ? "Height: " + item.height :
                            category == "planets" ? "Climate: " + item.climate :
                                "Manufacturer: " + item.manufacturer
                    }
                </p>
                <p className="card-text mb-4">
                    {
                        category == "characters" ? "Birth Year: " + item.birth_year :
                            category == "planets" ? "Terrain: " + item.terrain :
                                "Passengers: " + item.passengers
                    }
                </p>
                <div className="d-flex justify-content-between mt-auto">
                    <Link to={"/details/" + category + "/" + index}>
                        <button className="btn btn-dark" type="button">Learn more!</button>
                    </Link>
                    <button className="btn btn-outline-warning btn-heart ms-2" onClick={toggleFavorites} type="button">
                        <i className={`fa-heart ${isFavorite ? "fa-solid" : "fa-regular"}`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Card;