import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import swLogo from "../../img/sw-logo-grey.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark mb-4 px-5 ">
			<Link to="/">
				{/* <span className="navbar-brand mb-0 h1">Star Wars HOME</span> */}
				<img style={{height: "50px"}} src={swLogo} />
			</Link>
			<div className="ml-auto dropdown">
				<button className="btn btn-secondary dropdown-toggle" id="favBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites [{store.favorites.length}]
				</button>
				<ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end mt-1">
					{store.favorites.length > 0 ? (
						store.favorites.map((favs, index) => (
							<li className= "dropdown-item d-flex justify-content-between" key={index} >
								<Link to={"/details/" + favs.category + "/" + favs.index} className="favlink text-white" >

									<span>{favs.name}</span>
								</Link>
								<span onClick={() => handleDeleteFavorite(index)}>
									<i className="fa-regular fa-trash-can ms-2" />
								</span>
							</li>
						))
					) : (
						<li className="dropdown-item text-center">(empty)</li>
					)}
				</ul>
			</div>
		</nav>
	);
};
