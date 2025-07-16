import styles from "./ModalDialog.module.css";

export default function ModalDialog({ children }) {
	return (
		<div className={styles.modal}>
			<p>{children}</p>
		</div>
	);
}
