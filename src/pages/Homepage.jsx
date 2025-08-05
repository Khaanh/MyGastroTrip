import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import ModalDialog from "../components/ModalDialog";
import { animated, useSpring } from "@react-spring/web";

export default function Homepage() {
	// const [selectedCity, setSelectedCity] = useState();

	const [modalDefaultIsOpen, setModalDefaultIsOpen] = useState(false);
	const AnimatedModalDialog = animated(ModalDialog);

	const styled = useSpring({
		from: {
			opacity: 0,
		},
		to: {
			opacity: 1,
		},
	});

	const handleModalDefaultClose = () => {
		setModalDefaultIsOpen((curState) => !curState);
	};

	useEffect(() => {
		modalDefaultIsOpen
			? document.body.classList.add("fixed")
			: document.body.classList.remove("fixed");
	}, [modalDefaultIsOpen]);

	// const handleSelect = (location) => {
	// 	setSelectedCity(location);
	// };

	return (
		<div>
			<PageNav />

			<main className={styles.main}>
				<button className={styles.btnCTA}>
					<Link to="app">Want to add a new spot ?</Link>
				</button>

				<button onClick={() => handleModalDefaultClose(modalDefaultIsOpen)}>
					Open Modal
				</button>
			</main>

			<AnimatedModalDialog style={styled} />

			{/* <ModalDialog
				isOpen={modalDefaultIsOpen}
				onClose={handleModalDefaultClose}
			>
				<h1>Lorem, ipsum dolor.</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
					debitis amet nam, soluta delectus aperiam hic, quae nobis rem culpa
					qui quaerat. Porro magnam placeat dolores vitae officiis modi
					voluptatem.
				</p>
			</ModalDialog> */}
		</div>
	);
}
