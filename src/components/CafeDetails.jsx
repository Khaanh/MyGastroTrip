import { useParams, useSearchParams } from "react-router-dom";
import styles from "./CafeDetails.module.css";
import StarRating from "./StarRating";

export default function CafeDetails() {
	const { id } = useParams();
	const [searchParam, setSearchParam] = useSearchParams();
	const title = searchParam.get("title");
	const desc = searchParam.get("desc");
	const phone = searchParam.get("phone");
	const geo = searchParam.get("geo");
	const address = searchParam.get("address");
	const location = searchParam.get("location");

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
					<div>
						<StarRating />
					</div>
					<ul>
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
				</div>
			</div>
			<div>
				<h2>Contacts:</h2>
				<ul>
					<li>
						<a href={`tel:${phone}`}>{phone}</a>
					</li>
					<li>
						<a href={`${geo}`}>{address}</a>
					</li>
					<li>Working hours</li>
				</ul>
			</div>
		</main>
	);
}
