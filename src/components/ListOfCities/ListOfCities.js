import { useState } from "react";
import "./style.css";

// const listOfCities = [
// 	{ id: 0, city: "München" },
// 	{ id: 1, city: "Augsburg" },
// 	{ id: 2, city: "Lindau" },
// 	{ id: 3, city: "Würgzburg" },
// 	{ id: 4, city: "Stuttgart" },
// 	{ id: 5, city: "Frankfurt" },
// ];

export default function ListOfCities({ listOfLocations }) {
	const [selectedCity, setSelectedCity] = useState("");

	const handleCitySelect = (id) => {
		setSelectedCity(id !== selectedCity ? id : "");
	};

	return (
		<ul className="list">
			{listOfLocations.map((location) => (
				<li className="list-item">
					<button
						onClick={() => handleCitySelect(location.id)}
						className={
							location.id === selectedCity ? "list-btn is-active" : "list-btn"
						}
					>
						{location.location}
					</button>
				</li>
			))}
		</ul>
	);
}
