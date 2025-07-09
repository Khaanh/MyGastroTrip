import styles from "./AsideRating.module.css";
import RatingList from "./RatingList";
import RatingBtnToggle from "./RatingBtnToggle";
import { useState } from "react";

export default function AsideRating() {
	const [ratingToggle, setRatingToggle] = useState(false);

	const handleRatingToggle = () => {
		setRatingToggle((prev) => !prev);
		console.log(ratingToggle);
	};

	return (
		<aside
			className={
				ratingToggle
					? `${styles.ratingBlock}`
					: `${styles.ratingBlock} ${styles.isActive}`
			}
		>
			<RatingBtnToggle handleRatingToggle={handleRatingToggle} />
			<RatingList />

			<div>
				<h1>{ratingToggle}</h1>
				Average: <span>3.5 </span>
			</div>
		</aside>
	);
}
