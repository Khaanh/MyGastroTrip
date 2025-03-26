import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

export default function PageNav() {
	return (
		<nav className={styles.nav}>
			<Logo />

			<ul className={styles.menuList}>
				<li className={styles.menuItems}>
					<NavLink to="/">Home</NavLink>
				</li>
				<li className={styles.menuItems}>
					<NavLink to="/product">Product</NavLink>
				</li>
				<li className={styles.menuItems}>
					<NavLink to="/login">Login</NavLink>
				</li>
			</ul>
		</nav>
	);
}
