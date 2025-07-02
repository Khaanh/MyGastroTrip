import styles from "./AsideRating.module.css";
import RatingList from "./RatingList";
import RatingBtnToggle from "./RatingBtnToggle";

export default function AsideRating() {
	return (
		<aside className={`${styles.ratingBlock} `}>
			<div className={styles.ratingHolder}>
				<div>{/* <StarRating /> */}</div>

				<RatingBtnToggle />
				<RatingList />

				<div>
					Average: <span>3.5 </span>
				</div>
			</div>
		</aside>
	);
}
