import styles from "./Message.module.css";

export default function Message({ message }) {
	return (
		<p className={styles.message}>
			<span>{message}</span>
		</p>
	);
}
