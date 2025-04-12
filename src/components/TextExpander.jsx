import { useState } from "react";

export default function TextExpander() {
	const [textLength, setTextLength] = useState();

	return (
		<div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi
				totam excepturi laudantium? Rem ipsa maiores alias provident dolore ut
				voluptates, consectetur praesentium nesciunt illum quam modi officia
				magni voluptatibus porro labore non sapiente, eos assumenda accusantium.
				Omnis id laboriosam odit quae, perferendis dolore mollitia praesentium
				dolorum minima accusamus sit pariatur ut, assumenda ab minus dignissimos
				sequi velit illum molestias eaque, quisquam a hic accusantium! Minus
				tempore asperiores excepturi consequatur error neque repellat cum modi
				dolores illo velit molestiae veritatis earum eaque fugit explicabo
				blanditiis laudantium voluptatibus perspiciatis dicta hic non, eveniet
				nihil soluta! Neque dolores qui culpa voluptas fuga...
				<button>Read more</button>
			</p>
		</div>
	);
}
