import CityItem from "./CityItem";
import styles from "./CityList.module.css";

/**
 * ? Should the handleSelect use a boolean type ?
 */

const listOfCities = Array.from(
	new Set([
		// "München",
		"Munich",
		"Augsburg",
		"Würzburg",
		"Frankfurt am Main",
		"Stuttgart",
		"London",
		"Ulm",
		"Neu-Ulm",
	])
);

export default function CityList({ handleSelect }) {
	return (
		<ul className={styles.list}>
			{/* // Button component to select all cities that will reset the filter */}
			<li>
				<button className={styles.btn} onClick={() => handleSelect(false)}>
					All
				</button>
			</li>

			{listOfCities.map((city) => (
				<CityItem city={city} key={city} handleSelect={handleSelect} />
			))}
		</ul>
	);
}
