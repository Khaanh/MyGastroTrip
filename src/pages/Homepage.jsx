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
			<ModalDialog>
				<h2>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
					debitis amet nam, soluta delectus aperiam hic, quae nobis rem culpa
					qui quaerat. Porro magnam placeat dolores vitae officiis modi
					voluptatem.
				</h2>
			</ModalDialog>
			<CafeList selectedCity={selectedCity} />
		</div>
	);
}
