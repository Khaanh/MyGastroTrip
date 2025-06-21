import { useParams, useSearchParams } from "react-router-dom";
import styles from "./CafeDetails.module.css";

export default function CafeDetails() {
	const { id } = useParams();
	const [searchParam, setSearchParam] = useSearchParams();
	const title = searchParam.get("title");
	const desc = searchParam.get("desc");

	return (
		<main>
			<h1 className={styles.title}>
				{title} : {id}
			</h1>
			<div className={styles.intro}>
				<div>
					<p>{desc}</p>
				</div>
				<div>
					<p>Rating</p>
					<ul>
						<li>Design</li>
						<li>Services</li>
						<li>Food</li>
						<li>Would You go back?</li>
					</ul>
				</div>
			</div>
			<div>
				<h2>Contacts:</h2>
				<ul>
					<li>Phone</li>
					<li>Address</li>
					<li>Working hours</li>
				</ul>
			</div>
		</main>
	);
}
