import { X } from "lucide-react";
import styles from "./ModalDialog.module.css";

export default function ModalDialog({ isOpen, children }) {
	const handleClose = () => {
		console.log("sadas");
	};
	return (
		<>
			{isOpen && (
				<div className={styles.modal}>
					<div className={styles.modalWrapper}>
						<div className={styles.modalContent}>
							<button
								className={styles.modalCloseBtn}
								onClick={() => handleClose()}
							>
								<X size={28} />
							</button>
							{children}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
