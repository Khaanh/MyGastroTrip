import styles from "./CityItem.module.css";

export default function CityItem({ city, onSelectCity }) {
	return (
		<>
			<li className={styles.listItem} key={city}>
				<button className={styles.btn} onClick={() => onSelectCity(city)}>
					{city}
				</button>
			</li>
		</>
	);
}
