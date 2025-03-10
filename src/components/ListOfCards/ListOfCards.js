import { BsFillGeoAltFill } from "react-icons/bs";
import "./style.css";
import { IconContext } from "react-icons";

export default function ListOfCards({ listOfCoffees }) {
	return (
		<ul className="card-holder">
			{listOfCoffees.map((coffee) => (
				<li
					key={coffee.id}
					className={
						coffee.revealedStatus ? "card-items revealed-card" : "card-items"
					}
				>
					<div
						className="card-pic"
						style={{ backgroundImage: `url(${coffee.img})` }}
					>
						{/* <img src={coffee.img} alt={coffee.img} /> */}
						<h1 className="card-title">{coffee.name}</h1>
					</div>
					<div className="card-descr">
						{/* <p>
							<em>{coffee.desc}</em>
						</p> */}
						<p>My rating {coffee.rating}</p>
						<p>Hours: 8:00 - 16:00</p>
						<p>
							<a href="" target="_blank">
								web-site.com
							</a>
						</p>
						<div>
							<a className="card-link" href={coffee.geo} target="_blank">
								<span className="card-link__text">{coffee.address}</span>
								<IconContext.Provider value={{ className: "icon-map" }}>
									<BsFillGeoAltFill />
								</IconContext.Provider>
							</a>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
}
