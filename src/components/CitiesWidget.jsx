import styles from "./CitiesWidget.module.css";

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

export default function CitiesWidget() {
	return (
		<ul className={styles.list}>
			{listOfCities.map((item) => (
				<li className={styles.listItem}>
					<button className={styles.btn} role="button">
						{item}
					</button>
				</li>
			))}
		</ul>
	);
}
