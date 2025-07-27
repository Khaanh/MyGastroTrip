/**
 * ModalDialog component renders a modal dialog window.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Controls whether the modal is visible.
 * @param {function} props.onClose - Callback function invoked when the modal is requested to close.
 * @param {React.ReactNode} props.children - Content to be displayed inside the modal.
 *
 * @example
 * const [isOpen, setIsOpen] = useState(false);
 * <button onClick={() => setIsOpen(true)}>Open Modal</button>
 * <ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
 *   <p>Some text</p>
 * </ModalDialog>
 */
import { X } from "lucide-react";
import styles from "./ModalDialog.module.css";

// const [modalDefaultIsOpen, setModalDefaultIsOpen] = useState(false);
// const handleModalDefaultClose = () => {
// 	setModalDefaultIsOpen((curState) => !curState);
// };

// <button onClick={() => handleModalDefaultClose(modalDefaultIsOpen)}>
// 			Open Modal
// 		</button>

// <ModalDialog isOpen={modalDefaultIsOpen} onClose={handleModalDefaultClose}>
// 	<p>Some text</p>
// </ModalDialog>;

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
