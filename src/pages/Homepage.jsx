import { useState } from "react";
import CafeList from "../components/CafeList";
import CityList from "../components/CityList";
import PageNav from "../components/PageNav";
import StarRating from "../components/StarRating";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import ModalDialog from "../components/ModalDialog";

export default function Homepage() {
	const [selectedCity, setSelectedCity] = useState();
	const [infoModalIsOpen, setInfoModalIsOpen] = useState(false);

	const handleSelect = (location) => {
		setSelectedCity(location);
	};

	return (
		<div>
			<PageNav />

			<main className={styles.main}>
				<button className={styles.btnCTA}>
					<Link to="app">Want to add a new spot ?</Link>
				</button>
			</main>
			{/* <h1>Home page</h1> */}

			{/* <CityList handleSelect={handleSelect} />
			<h1>{selectedCity}</h1>
			<CafeList selectedCity={selectedCity} /> */}
			<CityList handleSelect={handleSelect} />
			{selectedCity}

			<StarRating maxRating={5} />
			<StarRating
				maxRating={5}
				message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
			/>

			<button isOpen={infoModalIsOpen}>Open Modal</button>

			<ModalDialog isOpen={infoModalIsOpen}>
				<h1>Lorem, ipsum dolor.</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
					debitis amet nam, soluta delectus aperiam hic, quae nobis rem culpa
					qui quaerat. Porro magnam placeat dolores vitae officiis modi
					voluptatem.
				</p>
			</ModalDialog>
			<CafeList selectedCity={selectedCity} />
		</div>
	);
}
