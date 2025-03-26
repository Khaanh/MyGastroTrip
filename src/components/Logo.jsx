import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
	return (
		<div className={styles.logo}>
			<Link>
				<img src="/img/logo.svg" alt="logo coffee beans" />
			</Link>
		</div>
	);
}
