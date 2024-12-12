import { BsFillGeoAltFill } from "react-icons/bs";
import "./style.css";
import { IconContext } from "react-icons";

export default function ListOfCards({ listOfCoffees }) {
	return (
		<ul className="card-holder">
			{listOfCoffees.map((coffee) => (
				<li
					className={
						coffee.revealedStatus ? "card-items revealed-card" : "card-items"
					}
					key={coffee.id}
				>
					<div className="card-pic">
						<img src={coffee.img} alt={coffee.img} />
					</div>
					<div className="card-descr">
						<h1 className="card-title">{coffee.name}</h1>
						<p>
							<em>{coffee.desc}</em>
						</p>
						<p>My rating {coffee.rating}</p>
						<p>Hours: 8:00 - 16:00</p>
						<p>
							<a href="">web-site.com</a>
						</p>
						<div>
							<a className="card-link" href={coffee.geo}>
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
