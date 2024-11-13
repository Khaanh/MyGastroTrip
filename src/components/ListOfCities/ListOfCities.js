import { useState } from "react";
import "./style.css";
import classNames from "classnames";

const cities = [
	"München",
	"Augsburg",
	"Lindau",
	"Würgzburg",
	"Stuttgart",
	"Frankfurt",
];

export default function ListOfCities() {
	const [activeStatus, setActiveStatus] = useState(false);
	const handleClick = (e) => {
		setActiveStatus(!activeStatus);
		console.log(e.target);
	};

	// const activeBtn = classNames({
	// 	"list-item": true,
	// 	"is-active": activeStatus,
	// });

	return (
		<ul className="list">
			{cities.map((city) => (
				<li className="list-item">
					<button
						className={`list-btn ${activeStatus ? "is-active" : ""}`}
						onClick={handleClick}
					>
						{city}
					</button>
					{/* <button
						className={activeBtn}
						onClick={(e) => {
							setActiveStatus(!activeStatus);
						}}
					>
						{city}
					</button> */}
				</li>
			))}
		</ul>
	);
}
