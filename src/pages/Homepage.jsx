import { useState } from "react";
import CafeList from "../components/CafeList";
import CityList from "../components/CityList";
import PageNav from "../components/PageNav";
import StarRating from "../components/StarRating";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

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
					<Link to="app/cafeList">Want to add a new spot ?</Link>
				</button>
			</main>
			{/* <h1>Home page</h1> */}

			{/* <CityList handleSelect={handleSelect} />
			<h1>{selectedCity}</h1>
			<CafeList selectedCity={selectedCity} /> */}
		</div>
	);
}
