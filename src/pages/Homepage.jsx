import { useState } from "react";
import CafeList from "../components/CafeList";
import CityList from "../components/CityList";
import PageNav from "../components/PageNav";
import StarRating from "../components/StarRating";
import ModalVisited from "../components/ModalVisited";

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
			<StarRating
				maxRating={5}
				message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
			/>

			<ModalVisited />
			<CafeList selectedCity={selectedCity} />
		</div>
	);
}

// TODO: Black&White Reveal wish list
// TODO: Category: Visited, would like to visit,
// TODO: List of cafe in different country
// TODO: List of landmarks
// TODO: Shared budget with friends
// TODO: ListOfCards component: Every 3-5 sec change pic.
// TODO: Img optimization
// TODO: Add Countries also
// TODO: Text expander for cards
// TODO: Star rating
// TODO: Animate logo
// TODO: Dark theme
