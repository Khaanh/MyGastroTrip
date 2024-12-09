import { useState } from "react";
import "./style.css";

export default function ListOfCities({ listOfLocations, onSelectedCity }) {
	const [selectedCity, setSelectedCity] = useState(listOfLocations);

	const handleCitySelect = (id) => {
		setSelectedCity(id !== selectedCity ? id : "");
	};

	return (
		<ul className="list">
			{listOfLocations.map((location) => (
				<li className="list-item">
					<button
						// onClick={() => handleCitySelect(location.id)}
						onClick={() => onSelectedCity()}
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
