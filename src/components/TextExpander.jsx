import { useState } from "react";

export default function TextExpander({ content, textSize = 80 }) {
	const [text, setText] = useState(content);

	const convertedText = text.split(" ").slice(0, textSize).join(" ");

	const [btn, setBtn] = useState();

	return (
		<div>
			<p>{convertedText}...</p>
			<button>Read more</button>
		</div>
	);
}
