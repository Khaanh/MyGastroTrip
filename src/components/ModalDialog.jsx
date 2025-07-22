import { X } from "lucide-react";
import styles from "./ModalDialog.module.css";

export default function ModalDialog({ isOpen, onClose, children }) {
	return (
		<>
			{isOpen && (
				<div className={styles.modal}>
					<div className={styles.modalWrapper}>
						<div className={styles.modalContent}>
							<button
								className={styles.modalCloseBtn}
								onClick={() => onClose(isOpen)}
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
/**
 * 
const [modalDefaultIsOpen, setModalDefaultIsOpen] = useState(false);
const handleModalDefaultClose = () => {
	setModalDefaultIsOpen((curState) => !curState);
};

<ModalDialog isOpen={modalDefaultIsOpen} onClose={handleModalDefaultClose}>
	<p>Some text</p>
</ModalDialog>;
*/
