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
	const [isActive, setIsActive] = useState(false);

	return (
		<ul className="list">
			{cities.map((city) => (
				<li className="list-item">
					<button className={`list-btn ${isActive ? "" : isActive}`}>
						{city}
					</button>
				</li>
			))}
		</ul>
	);
}
