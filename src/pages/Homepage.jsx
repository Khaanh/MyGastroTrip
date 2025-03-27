import CafeList from "../components/CafeList";
import PageNav from "../components/PageNav";

const listOfCities = [
	"München",
	"Augsburg",
	"Würgzburg",
	"Frankfurt",
	"Stuttgart",
	"London",
	"Ulm",
	"Neu-Ulm",
];

export default function Homepage() {
	return (
		<div>
			<PageNav />

			<ul>
				{listOfCities.map((item) => (
					<li>
						<button role="button">{item}</button>
					</li>
				))}
			</ul>

			<CafeList />
		</div>
	);
}
