import styles from "./CitiesWidget.module.css";

const listOfCities = Array.from(
	new Set([
		"München",
		"Augsburg",
		"Würgzburg",
		"Frankfurt",
		"Stuttgart",
		"London",
		"Ulm",
		"Neu-Ulm",
	])
);

export default function CitiesWidget() {
	return (
		<ul className={styles.list}>
			{listOfCities.map((item) => (
				<li className={styles.listItem} key={item}>
					<button className={styles.btn}>{item}</button>
				</li>
			))}
		</ul>
	);
}
