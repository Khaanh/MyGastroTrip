import { useState } from "react";
import CafeList from "../components/CafeList";
import CityList from "../components/CityList";
import PageNav from "../components/PageNav";

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
			<CafeList selectedCity={selectedCity} />
		</div>
	);
}
