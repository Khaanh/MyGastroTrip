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
			{selectedCity}

			<StarRating maxRating={5} />
			<CafeList selectedCity={selectedCity} />
		</div>
	);
}
