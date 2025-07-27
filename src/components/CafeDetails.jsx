import { useParams, useSearchParams } from "react-router-dom";
import styles from "./CafeDetails.module.css";
import AsideRating from "./AsideRating";
import Contacts from "./Contacts";
import { useState } from "react";

export default function CafeDetails() {
	const { id } = useParams();
	const [searchParam, setSearchParam] = useSearchParams();
	const title = searchParam.get("title");
	const desc = searchParam.get("desc");
	const phone = searchParam.get("phone");
	const geo = searchParam.get("geo");
	const address = searchParam.get("address");
	const location = searchParam.get("location");

	const [time, setTime] = useState(new Date());
	const weekDays = [
		"Sunday",
		"Saturday",
		"Friday",
		"Thursday",
		"Wednesday",
		"Tuesday",
		"Monday",
	];

	return (
		<main>
			<h1 className={styles.title}>{title}</h1>
			<Contacts geo={geo} phone={phone} />
			{time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
			<br />
			{weekDays[time.getDay()]}
			<br />
			{time.getDate()}
			<br />
			{time.getMonth() + 1}
			<br />
			{time.getFullYear()}
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
					<AsideRating />
				</div>
			</div>
		</main>
	);
}
