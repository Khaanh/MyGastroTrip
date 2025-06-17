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
			<PageNav />
			<CityList handleSelect={handleSelect} />
			<h1>{selectedCity}</h1>

			{/* <StarRating maxRating={5} /> */}
			{/* <StarRating
				maxRating={5}
				message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
			/> */}
			<CafeList selectedCity={selectedCity} />
		</div>
	);
}
