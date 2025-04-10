import styles from "./CafeList.module.css";
import main from "./Main.module.css";

const cafeList = [
	{
		id: 0,
		img: "/img/Kaffeemanufaktur.jpg",
		title: "Kaffeemanufaktur",
		desc: "Unsere Manufaktur Kaffee und Espresso sind unsere Leidenschaft – und das bereits seit 2003. Die Kaffeemanufaktur ist seit der Eröffnung inhaberInnengeführt. Nachhaltigkeit und Fairness stehen dabei an erster Stelle. Andrea und Wolfgang Werner eröffneten 2003 das Ladengeschäft, zunächst mit einem 5 kg-Röster. Von Beginn an war es wichtig, Qualität und Nachhaltigkeit in den Vordergrund zu stellen. Heute, zweiundzwanzig Jahre später, hat sich nicht nur die hohe Qualität unseres Kaffees in Würzburg herumgesprochen, auch die Kaffeeröstmaschine ist  zwischenzeitlich von einem 12 kg-Röster auf einen 15 kg-Röster angewachsen. 2022 wurde die Manufaktur dann von Carina Schneider übernommen. Mit Begeisterung führt Sie das Team und unsere KundInnen durch die aktuellen und zukünftigen (Genuss-)Themen der Kaffee-Welt. Unsere Kaffees und Espressi sind bei diversen Verkaufspartnern im Lebensmitteleinzelhandel erhältlich. Auch in einigen Würzburger Gastronomien finden unsere Kaffee- und Espressi-Sorten einen Platz auf der Menü-Karte.",
		rating: 5,
		geo: "https://www.google.com/maps/place/Kaffee+Manufaktur/@49.7951053,9.9344112,15z/data=!4m5!3m4!1s0x0:0xc0e6a6dc32e0c41a!8m2!3d49.7951053!4d9.9344112",
		location: "Würzburg",
		address: "Spiegelstraße 19, 97070 Würzburg",
		visited: true,
	},
	{
		id: 1,
		img: "/img/MvsM-01.jpg",
		title: "Man vs Machine",
		desc: "ABOUT MVSM Man vs Machine is a Specialty Coffee Roaster founded in 2014. We are 100% independent from day one. No investors. Just us. We don’t do Robusta. We roast nothing but the highest grade Arabica Coffees (Specialty Grade >80pts.) Our main focus, always is and always will be quality before growth. We are happy to work with some of the finest intl. cafes and bars in the UK, EU and the UAE amongst others. Our coffee is also served in several Michelin starred restaurants and other quality driven places, like offices, restaurants and cafes.",
		rating: 5,
		geo: "https://www.google.com/maps?hl=ru&gl=de&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x479ddf5e115d6107:0xebd22248be182933",
		location: "Munich",
		address: "Müllerstraße 23 · 089 54847777",
		visited: true,
	},
	{
		id: 2,
		img: "/img/romiani-02.jpg",
		title: "Romiani",
		desc: "Willkommen bei Romiani Pastry in Frankfurt am Main, wo jeder Bissen eine Geschichte von Liebe und Handwerkskunst erzählt. Unsere exquisiten Gebäckstücke sind darauf ausgelegt, Ihre Sinne zu erfreuen, gefertigt aus Zutaten höchster Qualität und hausgemachten Rezepten, die über Generationen weitergegeben wurden. Jede Kreation wird mit Leidenschaft und Hingabe gemacht, um ein außergewöhnliches Erlebnis zu gewährleisten, das Sie in eine Welt des Genusses und der Tradition entführt. Bei Romiani glauben wir an die Kunst des Backens, bei der jedes Gebäck ein Meisterwerk ist, das von Herzen kommt, um Freude auf Ihren Tisch zu bringen. Entdecken Sie den Geschmack von echter Fürsorge und kulinarischer Exzellenz mit Romiani Pastry und lassen Sie uns Ihre Momente wirklich besonders machen. ꞉)",
		rating: 5,
		geo: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47bd0fa1cfe5a629:0xc9f012fbfb46aa93?sa=X&ved=1t:8290&ictx=111",
		location: "Frankfurt am Main",
		address: "Schillerstraße 30-40, 60313 Frankfurt am Main",
		visited: true,
	},
	{
		id: 3,
		img: "/img/maisonkarl.jpg",
		title: "Maison Karl",
		desc: "Willkommen bei Romiani Pastry in Frankfurt am Main, wo jeder Bissen eine Geschichte von Liebe und Handwerkskunst erzählt. Unsere exquisiten Gebäckstücke sind darauf ausgelegt, Ihre Sinne zu erfreuen, gefertigt aus Zutaten höchster Qualität und hausgemachten Rezepten, die über Generationen weitergegeben wurden. Jede Kreation wird mit Leidenschaft und Hingabe gemacht, um ein außergewöhnliches Erlebnis zu gewährleisten, das Sie in eine Welt des Genusses und der Tradition entführt. Bei Romiani glauben wir an die Kunst des Backens, bei der jedes Gebäck ein Meisterwerk ist, das von Herzen kommt, um Freude auf Ihren Tisch zu bringen. Entdecken Sie den Geschmack von echter Fürsorge und kulinarischer Exzellenz mit Romiani Pastry und lassen Sie uns Ihre Momente wirklich besonders machen. ꞉)",
		rating: 5,
		geo: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47bd0fa1cfe5a629:0xc9f012fbfb46aa93?sa=X&ved=1t:8290&ictx=111",
		location: "Stuttgart",
		address: "Maison Karl GmbH Calwer Straße 50 70173 Stuttgart",
		visited: true,
	},
	{
		id: 4,
		img: "/img/pizzaHut.jpg",
		title: "Pizza Hut",
		desc: "Pizza Hut gibt es bereits seit über 60 Jahren. Mit rund 19.000 Restaurants in 130 Ländern sind wir der Pizzaspezialist. Pizza Hut gibt es seit 1983 in Deutschland. In über 80 Restaurants und Express Stores backen wir jeden Tag die beste Pizza für Sie. Mit der Qualität und Frische unserer Zutaten und unserem freundlichen und schnellen Service begeistern wir unsere Gäste immer wieder aufs Neue. Die legendäre Pan Pizza hat uns berühmt gemacht, aber Sie können in unseren Restaurants auch die italienische Pizza mit dünnem Teig, die Cheezy Crust mit köstlichem, im Rand gebackenem Käse sowie leckere Nudelgerichte und Salate genießen. ",
		rating: 5,
		geo: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47bd0fa1cfe5a629:0xc9f012fbfb46aa93?sa=X&ved=1t:8290&ictx=111",
		location: "Stuttgart",
		address: "Pizza Hut",
		visited: true,
	},
	{
		id: 5,
		img: "/img/PrufrockCoffee.jpg",
		title: "Prufrock Coffee",
		desc: "Who We Are Prufrock Coffee, located in the heart of London, was established by three coffee enthusiasts. Over time, it has evolved into a team of skilled and passionate coffee professionals, who possess vast expertise and an unyielding commitment to excellence Years after opening on Leather Lane, Prufrock Coffee continues to be a popular spot for locals and a sought-after destination for visitors from all over the globe. With an inquisitive spirit, we are constantly pushing boundaries, exploring new ingredients and techniques. However, we always remain true to our core belief: serving coffee and food that brings joy, accompanied by a service that brings a smile to your face.",
		rating: 5,
		geo: "https://www.google.com/maps/place/Prufrock+Coffee/@51.5199071,-0.1094542,15z/data=!4m5!3m4!1s0x0:0x77acd66c094aa411!8m2!3d51.5199071!4d-0.1094542",
		location: "London",
		address: "23-25 Leather Ln, London EC1N 7TE, Великобритания",
		visited: true,
	},
];

export default function CafeList({ selectedCity }) {
	return (
		<div>
			<ul className={styles.List}>
				{/* Title
					Rating
					Descr */}

				{selectedCity
					? cafeList
							.filter((cafe) => cafe.location === selectedCity)
							.map((cafe) => (
								<li className={styles.Item} key={cafe.id}>
									<a href="#" className={styles.Link}>
										<div className={styles.Img}>
											<img src={cafe.img} alt={cafe.img} />
										</div>
										<div className={styles.Descr}>
											<h2 className={styles.Title}>{cafe.title}</h2>
											<div>My Rating : 5</div>
											<p className={styles.Intro}>{cafe.desc}</p>
										</div>
									</a>
								</li>
							))
					: cafeList.map((cafe) => (
							<li className={styles.Item} key={cafe.id}>
								<a href="#" className={styles.Link}>
									<div className={styles.Img}>
										<img src={cafe.img} alt={cafe.img} />
									</div>
									<div className={styles.Descr}>
										<h2 className={styles.Title}>{cafe.title}</h2>
										<div>My Rating : 5</div>
										<p className={styles.Intro}>{cafe.desc}</p>
									</div>
								</a>
							</li>
					  ))}
			</ul>
		</div>
	);
}
