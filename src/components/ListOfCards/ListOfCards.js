import { BsFillGeoAltFill } from "react-icons/bs";
import "./style.css";
import { IconContext } from "react-icons";

const listOfCoffees = [
	{
		id: 0,
		name: "Man vs Machine 0",
		desc: "Man vs Machine is a Specialty Coffee Roaster founded in 2014. We are 100% independent from day one. No investors. Just us. We don’t do Robusta. We roast nothing but the highest grade Arabica Coffees (Specialty Grade 80pts.) Our main focus, always is and always will be quality before growth. We are happy to work with some of the finest intl. cafes and bars in the UK, EU and the UAE amongst others. Our coffee is also served in several Michelin starred restaurants and other quality driven places, like offices,	restaurants and cafes.",
		img: "./img/MvsM-01.jpg",
		rating: 5,
		geo: "https://www.google.com/maps/dir//Man+Versus+Machine+Coffee+Roasters,+M%C3%BCllerstra%C3%9Fe+23,+80469+M%C3%BCnchen/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x479ddf5e115d6107:0xebd22248be182933?sa=X&ved=1t:57443&ictx=111",
		address: "Müllerstraße 23",
	},
	{
		id: 1,
		name: "Kaffeemanufaktur",
		desc: "Hallo, ich bin Carina Schneider, den meisten werde ich bereits bekannt sein! Ich freue mich sehr die Kaffeemanufaktur als erfahrene Mitarbeiterin in die Zukunft führen zu dürfen. Zusammen mit meinem Team stellen wir uns den künftigen Herausforderungen und versuchen jeden Tag ein Stückchen besser zu werden! Worte wie Fairness, Genuss, Qualität und Verantwortung sind für mich nicht nur Marketing-Floskeln, sondern gelebte Unternehmenskultur. Als gelernte IHK Wein-Sommelière ist die Welt der Sensorik und des bewussten Geschmacks seit jeher meine Spielwiese. Mit diesen Fähigkeiten kann ich einen wichtigen Teil zum Genuss Ihres Lieblingskaffees beitragen, sowohl bei den beliebten Kaffee-Seminaren, als auch bei der Auswahl der richtigen Bohne für Zuhause. Begleiten Sie uns weiter auf der spannenden Reise durch die Kaffeewelt. Stellen Sie die richtigen Fragen und bleiben Sie stets neugierig, was bei uns in die Tasse kommt! Wir freuen uns darauf! Carina Schneider & das Team der Kaffeemanufaktur",
		img: "./img/MvsM-02.jpg",
		rating: 3,
		geo: "https://www.google.com/maps/dir//Man+Versus+Machine+Coffee+Roasters,+M%C3%BCllerstra%C3%9Fe+23,+80469+M%C3%BCnchen/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x479ddf5e115d6107:0xebd22248be182933?sa=X&ved=1t:57443&ictx=111",
		address: "Müllerstraße 1",
	},
	{
		id: 2,
		name: "Man vs Machine 2",
		desc: "Man vs Machine is a Specialty Coffee Roaster founded in 2014. We are 100% independent from day one. No investors. Just us. We don’t do Robusta. We roast nothing but the highest grade Arabica Coffees (Specialty Grade 80pts.) Our main focus, always is and always will be quality before growth. We are happy to work with some of the finest intl. cafes and bars in the UK, EU and the UAE amongst others. Our coffee is also served in several Michelin starred restaurants and other quality driven places, like offices,	restaurants and cafes.",
		img: "./img/MvsM-03.jpg",
		rating: 4,
		geo: "https://www.google.com/maps/dir//Man+Versus+Machine+Coffee+Roasters,+M%C3%BCllerstra%C3%9Fe+23,+80469+M%C3%BCnchen/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x479ddf5e115d6107:0xebd22248be182933?sa=X&ved=1t:57443&ictx=111",
		address: "Müllerstraße 2",
	},
];

export default function ListOfCards() {
	return (
		<ul className="card-holder">
			{listOfCoffees.map((coffee) => (
				<li className="card" key={coffee.id}>
					<div className="card-pic" style={{ height: "300px", width: "200px" }}>
						<img src={coffee.img} alt={coffee.img} />
					</div>
					<h1 className="card-title">{coffee.name}</h1>
					<p>
						<em>{coffee.desc}</em>
					</p>
					<p>{coffee.rating}</p>
					<div>
						<a className="card-link" href={coffee.geo}>
							<span className="card-link__text">{coffee.address}</span>
							<IconContext.Provider value={{ className: "icon-map" }}>
								<BsFillGeoAltFill />
							</IconContext.Provider>
						</a>
					</div>
				</li>
			))}
		</ul>
	);
}

{
	/* <li className="card">
				<div className="card-pic" style={{ height: "300px", width: "200px" }}>
					<img src={"./img/MvsM-01.jpg"} alt="picture" />
				</div>
				<h1 className="card-title">MAN vs MACHINE {name}</h1>
				<p>
					<em>
						Man vs Machine is a Specialty Coffee Roaster founded in 2014. We are
						100% independent from day one. No investors. Just us. We don’t do
						Robusta. We roast nothing but the highest grade Arabica Coffees
						(Specialty Grade 80pts.) Our main focus, always is and always will
						be quality before growth. We are happy to work with some of the
						finest intl. cafes and bars in the UK, EU and the UAE amongst
						others. Our coffee is also served in several Michelin starred
						restaurants and other quality driven places, like offices,
						restaurants and cafes.
					</em>
				</p>
				<p>My Rating</p>
				<div>
					<a
						className="card-link"
						href="https://www.google.com/maps/dir//Man+Versus+Machine+Coffee+Roasters,+M%C3%BCllerstra%C3%9Fe+23,+80469+M%C3%BCnchen/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x479ddf5e115d6107:0xebd22248be182933?sa=X&ved=1t:57443&ictx=111"
					>
						<span className="card-link__text">Müllerstraße 23</span>
						<IconContext.Provider value={{ className: "icon-map" }}>
							<BsFillGeoAltFill />
						</IconContext.Provider>
					</a>
				</div>
			</li> */
}
