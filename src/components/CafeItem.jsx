import styles from "./CafeItem.module.css";
import TextExpander from "./TextExpander";

export default function CafeItem({ cafe }) {
	const { id, img, title, desc } = cafe;

	return (
		<li className={styles.Item} key={id}>
			<div className={styles.Img}>
				<img src={img} alt={img} />
			</div>
			<div className={styles.Descr}>
				<div className={styles.Inner}>
					<h2 className={styles.Title}>{title}</h2>
					<div className={styles.MyRating}>My Rating : 5</div>
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
