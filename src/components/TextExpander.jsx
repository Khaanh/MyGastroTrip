import { useState } from "react";
import styles from "./TextExpander.module.css";

export default function TextExpander({
	content,
	symbols = 8,
	expandButtonText = "Read more",
	collapseButtonText = "Show less",
	btnDisabled = false,
	expanded = false,
	// className={" "}
}) {
	const [visible, setVisible] = useState(true);
	const [text, setText] = useState(content);
	const convertedText = visible
		? text.split(" ").slice(0, symbols).join(" ") + "..."
		: text;

	return (
		<p>
			{expanded ? text : text.split(" ").slice(0, symbols).join(" ") + "..."}

			<button
				className={
					btnDisabled ? `${styles.btnExpander}` : `${styles.btnExpander}`
				}
			>
				{expandButtonText}
			</button>

			{/* {btnDisabled ? (
				<button
					disabled
					className={styles.btnExpander}
					onClick={() => setVisible(!visible)}
				>
					{visible ? expandButtonText : collapseButtonText}
				</button>
			) : (
				<button
					className={styles.btnExpander}
					onClick={() => setVisible(!visible)}
				>
					{visible ? expandButtonText : collapseButtonText}
				</button>
			)} */}
		</p>
	);
}

// TODO: Animate show/hide text
