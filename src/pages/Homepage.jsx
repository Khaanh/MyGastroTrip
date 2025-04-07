import { useState } from "react";
import CafeList from "../components/CafeList";
import CitiesWidget from "../components/CitiesWidget";
import PageNav from "../components/PageNav";

export default function Homepage() {
	const [selectedCity, setSelectedCity] = useState();
	const handleSelect = (location) => {
		setSelectedCity(location);
	};

	return (
		<div>
			<PageNav />
			<CitiesWidget handleSelect={handleSelect} />
			{selectedCity}
			<CafeList selectedCity={selectedCity} />
		</div>
	);
}
