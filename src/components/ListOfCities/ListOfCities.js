import { useState } from "react";
import "./style.css";

const cities = [
	"München",
	"Augsburg",
	"Lindau",
	"Würgzburg",
	"Stuttgart",
	"Frankfurt",
];

export default function ListOfCities() {
	const [selectedCity, setSelectedCity] = useState("");

	const handleSelectCity = (e) => {
		setSelectedCity(
			e.target.innerText !== selectedCity ? e.target.innerText : ""
		);
		// if (selectedCity !== e.target.innerText)
		// 	setSelectedCity(e.target.innerText);
	};

	return (
		<ul className="list">
			{cities.map((city) => (
				<li className="list-item">
					<button
						onClick={(e) => handleSelectCity(e)}
						className={`list-btn ${selectedCity ? "is-active" : ""}`}
					>
						{city}
					</button>
				</li>
			))}
		</ul>
	);
}
