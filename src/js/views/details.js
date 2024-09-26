
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import emptyPicImg from "../../img/star-wars-empty.jpg";
import tatooineImg from "../../img/tatooine.jpg";
import bespinImg from "../../img/bespin.jpg";


export const Details = ({ category }) => {
	const { store } = useContext(Context);
	const [imgErr, setImgErr] = useState(false);
	const params = useParams();
	const location = useLocation();

	useEffect(() => {
		setImgErr(false);
	}, [location]);


	const character = store.characters.find((item, index) => index == params.theid);
	const planet = store.planets.find((item, index) => index == params.theid);
	const starship = store.starships.find((item, index) => index == params.theid);

	const GUIDE_URL = "https://starwars-visualguide.com/assets/img/"
	const getImgUrl = () => {
		if (imgErr && planet.name === "Tatooine") {
			return tatooineImg;
		} else if (planet.name === "Bespin") {
			return bespinImg;
		} else if (category === "starships") {
			return store.starshipImages[parseInt(params.theid)] || emptyPicImg;
		} return GUIDE_URL + category + "/" + (parseInt(params.theid) + 1) + ".jpg";
	}


	const handleImgErr = () => {
		setImgErr(true);
	};


	return (
		<div className="d-flex justify-content-center">
			<div className="card bg-dark text-light my-5"
				style={{ minWidth: '75%', maxWidth: '75%', boxShadow: '0 8px 12px rgba(255, 255, 255, 0.2)' }}>
				<div className="row g-0">
					<div className="col-md-4 p-3 d-flex align-items-center justify-content-center">
						<img
							src={getImgUrl()}
							onError={handleImgErr}
							className="img-fluid rounded-start rounded"
							alt="image not available"
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body p-5">
							<h2 className="card-title text-center mb-5" style={{ fontSize: '3rem' }}>
								<u>
									{
										category == "characters" ? character.name :
											category == "planets" ? planet.name :
												starship.name
									}
								</u>
							</h2>
							<div className="d-flex flex-row" style={{ fontSize: '1rem' }}>
								<u className="w-50 text-end pe-2">
									{
										category == "characters" ? "Birth Year:" :
											category == "planets" ? "Terrain:" :
												"Manufacturer:"
									}
								</u>
								<p className="ps-2">
									{
										category == "characters" ? character.birth_year :
											category == "planets" ? planet.terrain :
												starship.manufacturer
									}
								</p>
							</div>
							<div className="d-flex flex-row" style={{ fontSize: '1rem' }}>
								<u className="w-50 text-end pe-2">
									{
										category == "characters" ? "Gender:" :
											category == "planets" ? "Climate:" :
												"Starship:"
									}
								</u>
								<p className="ps-2">
									{
										category == "characters" ? character.gender :
											category == "planets" ? planet.climate :
												starship.starship_class
									}
								</p>
							</div>
							<div className="d-flex flex-row" style={{ fontSize: '1rem' }}>
								<u className="w-50 text-end pe-2">
									{
										category == "characters" ? "Height:" :
											category == "planets" ? "Gravity:" :
												"Max Atmosphering Speed:"
									}
								</u>
								<p className="ps-2">
									{
										category == "characters" ? character.height :
											category == "planets" ? planet.gravity :
												starship.max_atmosphering_speed
									}
								</p>
							</div>
							<div className="d-flex flex-row" style={{ fontSize: '1rem' }}>
								<u className="w-50 text-end pe-2">
									{
										category == "characters" ? "Mass:" :
											category == "planets" ? "Diameter:" :
												"Crew:"
									}
								</u>
								<p className="ps-2">
									{
										category == "characters" ? character.mass :
											category == "planets" ? planet.diameter :
												starship.crew
									}
								</p>
							</div>
							<div className="d-flex flex-row" style={{ fontSize: '1rem' }}>
								<u className="w-50 text-end pe-2">
									{
										category == "characters" ? "Skin Color:" :
											category == "planets" ? "Surface Water:" :
												"Passengers:"
									}
								</u>
								<p className="ps-2">
									{
										category == "characters" ? character.skin_color :
											category == "planets" ? planet.surface_water :
												starship.passengers
									}
								</p>
							</div>
							<div className="d-flex flex-row" style={{ fontSize: '1rem' }}>
								<u className="w-50 text-end pe-2">
									{
										category == "characters" ? "Eye Color:" :
											category == "planets" ? "Population:" :
												"Consumables:"
									}
								</u>
								<p className="ps-2">
									{
										category == "characters" ? character.eye_color :
											category == "planets" ? planet.population :
												starship.consumables
									}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


Details.propTypes = {
    category: PropTypes.string.isRequired
};
