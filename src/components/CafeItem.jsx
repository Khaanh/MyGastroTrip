import { Link } from "react-router-dom";
import styles from "./CafeItem.module.css";
import StarRating from "./StarRating";
import TextExpander from "./TextExpander";

export default function CafeItem({ cafe }) {
	const { id, img, title, desc, visited } = cafe;

	return (
		<Link
			to={`${id}?title=${title}&desc=${desc}`}
			className={`${
				visited ? styles.Item : `${styles.Item + " " + styles.NotVisited}`
			}`}
		>
			<li>
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
		</Link>
	);
}
