import styles from "./ModalDialog.module.css";

export default function ModalDialog({ children }) {
	return (
		<div className={styles.Overlay}>
			<button
				role="close"
				className={`${styles.Button + " " + styles.BtnClose}`}
			>
				<span>X</span>
			</button>
			<main className={styles.Main}>
				<div className={styles.Container}>
					<p className={styles.Title}>
						<span>Modal dialog title</span>
					</p>
					<div className={styles.Holder}>
						<button className={`${styles.Button + " " + styles.BtnConfirm}`}>
							Confirm
						</button>
						<button className={`${styles.Button + " " + styles.BtnReject}`}>
							Reject
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}
