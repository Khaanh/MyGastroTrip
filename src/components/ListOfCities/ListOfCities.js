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
	return (
		<ul className="list">
			{cities.map((city) => (
				<li className="list-item">
					<button className="list-btn">{city}</button>
				</li>
			))}
		</ul>
	);
}
