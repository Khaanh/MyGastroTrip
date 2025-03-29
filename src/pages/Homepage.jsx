import CafeList from "../components/CafeList";
import CitiesWidget from "../components/CitiesWidget";
import PageNav from "../components/PageNav";

export default function Homepage() {
	return (
		<div>
			<PageNav />
			<CitiesWidget />
			<CafeList />
		</div>
	);
}
