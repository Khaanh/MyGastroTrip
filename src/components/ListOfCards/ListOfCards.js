import "./style.css";

export default function ListOfCards() {
	return (
		<div className="card-holder">
			<div className="card">
				<div className="card-pic" style={{ height: "300px", width: "200px" }}>
					<img src={"./img/MvsM-01.jpg"} alt="picture" />
				</div>
				<h1 className="card-title">MAN vs MACHINE</h1>
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
				<p>Geolocation</p>
			</div>
		</div>
	);
}
