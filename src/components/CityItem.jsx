import styles from "./CityItem.module.css";

export default function CityItem({ city, handleSelect }) {
	return (
		<>
			<li className={styles.listItem} key={city}>
				<button className={styles.btn} onClick={() => handleSelect(city)}>
					{city}
				</button>
			</li>
		</>
	);
}
