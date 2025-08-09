import { useState } from "react";
import styles from "./Contacts.module.css";
import { Clock, MapPin, PhoneCall } from "lucide-react";
import ModalDialog from "./ModalDialog";

const weekDays = [
	"Sunday",
	"Saturday",
	"Friday",
	"Thursday",
	"Wednesday",
	"Tuesday",
	"Monday",
];
export default function Contacts({ geo, phone }) {
	const [time, setTime] = useState(new Date());
	const [modalHoursIsOpen, setModalHoursIsOpen] = useState(false);

	const handleModalHoursClose = () => {
		setModalHoursIsOpen((curState) => !curState);
	};

	return (
		<>
			<ul className={styles.ContactList}>
				<li className={styles.ContactItem}>
					<a href={`tel:${phone}`} className={styles.ContactLink}>
						<PhoneCall size={38} />
					</a>
				</li>
				<li className={styles.ContactItem}>
					<a href={`${geo}`} target="_blank" className={styles.ContactLink}>
						<MapPin size={38} />
					</a>
				</li>
				<li className={styles.ContactItem}>
					<a
						href="/"
						className={styles.ContactLink}
						onClick={(e) => {
							e.preventDefault();
							setModalHoursIsOpen(true);
						}}
					>
						<Clock size={38} />
					</a>
				</li>
			</ul>
			<ModalDialog isOpen={modalHoursIsOpen} onClose={handleModalHoursClose}>
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
			</ModalDialog>
		</>
	);
}
