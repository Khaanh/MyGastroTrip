import { useState } from "react";
import "./style.css";

const listOfCities = [
	{ id: 0, city: "München" },
	{ id: 1, city: "Augsburg" },
	{ id: 2, city: "Lindau" },
	{ id: 3, city: "Würgzburg" },
	{ id: 4, city: "Stuttgart" },
	{ id: 5, city: "Frankfurt" },
];

export default function ListOfCities() {
	const [selectedCity, setSelectedCity] = useState("");

	const handleCitySelect = (id) => {
		setSelectedCity(id !== selectedCity ? id : "");
	};

	return (
		<ul className="list">
			{listOfCities.map((city) => (
				<li className="list-item">
					<button
						onClick={() => handleCitySelect(city.id)}
						className={
							city.id === selectedCity ? "list-btn is-active" : "list-btn"
						}
					>
						{city.city}
					</button>
				</li>
			))}
		</ul>
	);
}
