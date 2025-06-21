import { useParams } from "react-router-dom";
import styles from "./CafeDetails.module.css";

export default function CafeDetails() {
	const { id } = useParams();
	return (
		<main>
			<h1>Name {id}</h1>
			<div>
				<p>Rating</p>
				<ul>
					<li>Design</li>
					<li>Services</li>
					<li>Food</li>
					<li>Would You go back here?</li>
				</ul>
			</div>
			<div>
				<h2>Contacts:</h2>
				<ul>
					<li>Phone</li>
					<li>Address</li>
					<li>Working hours</li>
				</ul>
			</div>
		</main>
	);
}
