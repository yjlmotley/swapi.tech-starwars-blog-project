import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Card from "../component/Card.js";

export const Home = () => {
	const { store } = useContext(Context);



	return (
		<div className="main-div">
			<div className="d-flex flex-column w-100 mt-3 align-item-center">
				{/* characters card div */}
				<h1>Characters</h1> 
				<div id="cardDiv" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.characters.map((item, index) => {
						return (
							<Card item={item} index={index} key={index} category="characters" /> 
						)
					})}
				</div>
			</div>
			<div className="d-flex flex-column w-100 mt-3 align-item-center">
				{/* planets card div */}
				<h1>Planets</h1>
				<div id="cardDiv" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.planets.map((item, index) => {
						return (
							<Card item={item} index={index} key={index} category="planets" /> 
						)
					})}
				</div>
			</div>
			<div className="d-flex flex-column w-100 mt-3 align-item-center">
				{/* starships card div */}
				<h1>Starships</h1>
				<div id="cardDiv" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.vehicles.map((item, index) => {
						return (
							<Card item={item} index={index} key={index} category="vehicles" /> 
						)
					})}
				</div>
			</div>
		</div>
	)

};