import { useState } from "react";
import PageNav from "./PageNav";
import CityList from "./CityList";
import CafeList from "./CafeList";
import styles from "./AppLayout.module.css";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
	const [selectedCity, setSelectedCity] = useState();

	const handleSelect = (location) => {
		setSelectedCity(location);
	};

	return (
		<div>
			<PageNav />
			<Outlet />

			{/* <CityList handleSelect={handleSelect} /> */}
			{/* <h1>{selectedCity}</h1> */}

			{/* <CafeList selectedCity={selectedCity} /> */}
		</div>
	);
}
