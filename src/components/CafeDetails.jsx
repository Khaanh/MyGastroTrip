import { useParams, useSearchParams } from "react-router-dom";
import styles from "./CafeDetails.module.css";
// import StarRating from "./StarRating";
import AsideRating from "./AsideRating";
import Contacts from "./Contacts";

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
			<h1 className={styles.title}>{title}</h1>

			<Contacts geo={geo} phone={phone} />
			{/* TODO: Open modal window with working hours */}
			<div>
				Mon 08:00–19:00
				<br />
				Tue 08:00–19:00
				<br />
				Wed 08:00–19:00
				<br />
				Thu 08:00–19:00
				<br />
				Fri 08:00–19:00
				<br />
				Sat 09:00–19:00
				<br />
				Sun 09:00–19:00
			</div>

			<div className={styles.wrapper}>
				<div className={styles.intro}>
					<div className={styles.desc}>
						<p>{desc}</p>
					</div>
					{/* <div>
						среда 08:00–19:00 четверг 08:00–19:00 пятница 08:00–19:00 суббота
						09:00–19:00 воскресенье 09:00–19:00 понедельник 08:00–19:00 вторник
						08:00–19:00
					</div>
					<div>
						среда 10:00–18:30 четверг 10:00–18:30 пятница 10:00–18:30 суббота
						10:00–16:00 воскресенье Закрыто понедельник Закрыто вторник
						10:00–18:30
					</div>
					<div>
						среда 09:30–20:00 четверг 09:30–20:00 пятница 09:30–21:00 суббота
						09:30–21:00 воскресенье 10:00–18:00 понедельник 09:30–20:00 вторник
						09:30–20:00
					</div>
					<div>
						среда 10:00–20:00 четверг 10:00–20:00 пятница 10:00–20:00 суббота
						10:00–20:00 воскресенье 10:00–20:00 понедельник 12:00–20:00 вторник
						10:00–20:00
					</div> */}

					<AsideRating />
				</div>
			</div>
		</main>
	);
}
