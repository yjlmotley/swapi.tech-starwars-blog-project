import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Card from "../component/Card.js";


export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container">
			{/* characters card div */}
			<div className="d-flex flex-column w-100 mb-5 align-item-center">
				<h1>Characters</h1> 
				<div 
					id="cardDiv" 
					className="d-flex flex-nowrap align-items-stretch pb-1"
					style={{ overflowX: "auto" }}
				>
					{store.characters.map((item, index) => {
						return (
							<Card item={item} index={index} key={index} category="characters" /> 
						)
					})}
				</div>
			</div>
			{/* planets card div */}
			<div className="d-flex flex-column w-100 mb-5 align-item-center">
				<h1>Planets</h1>
				<div id="cardDiv" className="d-flex flex-nowrap align-items-stretch pb-1" style={{ overflowX: "auto" }}>
					{store.planets.map((item, index) => {
						return (
							<Card item={item} index={index} key={index} category="planets" /> 
						)
					})}
				</div>
			</div>
			{/* starships card div */}
			<div className="d-flex flex-column w-100 mb-5 align-item-center">
				<h1>Starships</h1>
				<div id="cardDiv" className="d-flex flex-nowrap align-items-stretch pb-1" style={{ overflowX: "auto" }}>
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