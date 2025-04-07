import styles from "./CitiesWidget.module.css";

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

export default function CitiesWidget({ handleSelect }) {
	return (
		<ul className={styles.list}>
			<li className={styles.listItem}>
				<button className={styles.btn}>All</button>
			</li>
			{listOfCities.map((city) => (
				<li className={styles.listItem} key={city}>
					<button className={styles.btn} onClick={() => handleSelect(city)}>
						{city}
					</button>
				</li>
			))}
		</ul>
	);
}
