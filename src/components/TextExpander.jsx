import { useState } from "react";
import styles from "./TextExpander.module.css";

export default function TextExpander({
	content,
	symbols = 80,
	expandButtonText = "Read more",
	collapseButtonText = "Show less",
	btnDisabled = true,
	// className={" "}
}) {
	const [visible, setVisible] = useState(false);
	const [text, setText] = useState(content);
	const convertedText = visible
		? text.split(" ").slice(0, symbols).join(" ") + "..."
		: text;

	return (
		<p>
			<span>{convertedText}</span>

			{btnDisabled ? (
				<button
					className={styles.btnExpander}
					onClick={() => setVisible(!visible)}
				>
					{visible ? expandButtonText : collapseButtonText}
				</button>
			) : (
				<button
					disabled
					className={styles.btnExpander}
					onClick={() => setVisible(!visible)}
				>
					{visible ? expandButtonText : collapseButtonText}
				</button>
			)}
		</p>
	);
}

// TODO: Animate show/hide text
