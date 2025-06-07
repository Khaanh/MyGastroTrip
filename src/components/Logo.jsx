import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
	return (
		<Link to="/" className={styles.Logo}>
			<img src="/img/logo.svg" alt="logo coffee beans" />
		</Link>
	);
}
