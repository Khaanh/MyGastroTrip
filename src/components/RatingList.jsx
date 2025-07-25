import styles from "./RatingList.module.css";
import StarRating from "./StarRating";

export default function RatingList() {
	return (
		<ul className={styles.ratingList}>
			<li>
				<span>Design</span>
				<StarRating />
			</li>
			<li>
				<span>Services</span>
				<StarRating />
			</li>
			<li>
				<span>Food</span>
				<StarRating />
			</li>
			<li>
				<span>Would You go back?</span>
				<StarRating />
			</li>
		</ul>
	);
}
