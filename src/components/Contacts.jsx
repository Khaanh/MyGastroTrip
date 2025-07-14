import styles from "./Contacts.module.css";
import { Clock, MapPin, PhoneCall } from "lucide-react";

export default function Contacts({ geo, phone }) {
	return (
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
				<a href="/" className={styles.ContactLink}>
					<Clock size={38} />
				</a>
			</li>
		</ul>
	);
}
