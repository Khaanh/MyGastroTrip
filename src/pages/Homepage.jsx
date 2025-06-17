import { useState } from "react";
import CafeList from "../components/CafeList";
import CityList from "../components/CityList";
import PageNav from "../components/PageNav";
import StarRating from "../components/StarRating";

export default function Homepage() {
	const [selectedCity, setSelectedCity] = useState();

	const handleSelect = (location) => {
		setSelectedCity(location);
	};

	return (
		<div>
			<h1>Home page</h1>
			{/* <PageNav />
			<CityList handleSelect={handleSelect} />
			<h1>{selectedCity}</h1>
			<CafeList selectedCity={selectedCity} /> */}
		</div>
	);
}
