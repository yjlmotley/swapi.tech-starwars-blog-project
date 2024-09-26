const getState = ({ getStore, getActions, setStore }) => {
	const API_URL = "https://www.swapi.tech/api/";

	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			getCharacters: async () => {
				try {
					let resp = await fetch(API_URL + "people");
					if (!resp.ok) {
						throw new Error(`Data request unsuccessful. Status: ${resp.status}, Status Text: ${resp.statusText}`)
					}
					let data = await resp.json();

					const characterDetails = await Promise.all(
						data.results.map(async (character) => {
							let detailsResp = await fetch (character.url);
							if (!detailsResp.ok) {
								throw new Error(`Failed to fetch character details. Status: ${detailsResp.status}, Status Text: ${detailsResp.statusText}`);
							}
							let detailsData = await detailsResp.json();
							return detailsData.result.properties;
						})
					)
					setStore({ characters: characterDetails });
				} catch (error) {
					console.log("Error fetching characters:", error);
				}
			},
			getPlanets: async () => {
				try {
					let resp = await fetch(API_URL + "planets")
					if (!resp.ok) {
						throw new Error(`Data request unsuccessful. Status: ${resp.status}, Status Text: ${resp.statusText}`)
					}
					let data = await resp.json();

					const planetDetails = await Promise.all(
						data.results.map(async (planet) => {
							let detailsResp = await fetch (planet.url);
							if (!detailsResp.ok) {
								throw new Error (`Unable to fetch planet details: Status: ${detailsResp.status}, Status Text: ${detailsResp.statusText}`)
							}
							let detailsData = await detailsResp.json();
							return detailsData.result.properties;
						})
					)
					setStore ({ planets: planetDetails })
				} catch (error) {
					console.log("Error fetching planets:", error);
				}
			},
			getVehicles: async () => {
				try {
					let resp = await fetch(API_URL + "vehicles");
					if (!resp.ok) {
						throw new Error(`Data request unsuccessful. Status: ${resp.status}, Status Text: ${resp.statusText}`)
					}
					let data = await resp.json();

					const vehicleDetails = await Promise.all(
						data.results.map(async (vehicle) => {
							let detailsResp = await fetch(vehicle.url);
							if (!detailsResp.ok) {
								throw new Error(`Unable to fetch vehicle details: Status- ${detailsResp.status}, Status Text- ${detailsResp.statusText}`)
							}
							let detailsData = await detailsResp.json();
							return detailsData.result.properties;
						})
					);
					setStore({ vehicles: vehicleDetails })
				} catch (error) {
					console.log(`Error fetching planets: ${error}`)
				}
			},
			addFavorites: (favItem) => {
				setStore({
					favorites:[ ...getStore().favorites, favItem ]
				})
			},
			deleteFavorites: (indexToDelete) => {
				const newFavorites = getStore().favorites.filter((favorite, index) => index !== indexToDelete);
				setStore({ favorites: newFavorites })
			}
		}
	};
};

export default getState;
