import { useState } from "react";
import "./style.css";

export default function ListOfCities({
	listOfCoffees,
	onSelectedCity,
	onResetCity,
}) {
	const [selectedCity, setSelectedCity] = useState(listOfCoffees);

	const handleCitySelect = (id, location) => {
		setSelectedCity(id !== selectedCity ? id : "");
		//
		onSelectedCity(location);
	};

	return (
		<ul className="list">
			<li className="list-item">
				<button className="list-btn" onClick={onResetCity}>
					All
				</button>
			</li>
			{listOfCoffees.map((location) => (
				<li className="list-item">
					<button
						onClick={() => handleCitySelect(location.id, location.location)}
						className={`list-btn ${
							location.id === selectedCity ? "is-active" : ""
						}`}
					>
						{location.location}
					</button>
				</li>
			))}
		</ul>
	);
}
