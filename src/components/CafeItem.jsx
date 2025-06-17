import styles from "./CafeItem.module.css";
import StarRating from "./StarRating";
import TextExpander from "./TextExpander";

export default function CafeItem({ cafe }) {
	const { img, title, desc, visited } = cafe;

	return (
		<li
			className={`${
				visited ? styles.Item : `${styles.Item + " " + styles.NotVisited}`
			}`}
		>
			<div className={styles.Img}>
				<img src={img} alt={img} />
			</div>
			<div className={styles.Descr}>
				<div className={styles.Inner}>
					<h2 className={styles.Title}>{title}</h2>
					<div className={styles.MyRating}>
						<StarRating maxRating={5} />
					</div>
				</div>
				<TextExpander
					content={desc}
					symbols={80}
					// btnDisabled={true}
					// expanded={true}
				/>
			</div>
		</li>
	);
}
