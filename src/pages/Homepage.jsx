import { useState } from "react";
import CafeList from "../components/CafeList";
import CityList from "../components/CityList";
import PageNav from "../components/PageNav";
import StarRating from "../components/StarRating";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import ModalDialog from "../components/ModalDialog";

export default function Homepage() {
	const [selectedCity, setSelectedCity] = useState();

	const [modalDefaultIsOpen, setModalDefaultIsOpen] = useState(false);
	const [modalAboutIsOpen, setModalAboutIsOpen] = useState(false);
	const [modalContactIsOpen, setModalContactIsOpen] = useState(false);

	const handleModalDefaultClose = () => {
		setModalDefaultIsOpen((curState) => !curState);
	};

	const handleModalAboutClose = () => {
		setModalAboutIsOpen((curState) => !curState);
	};

	const handleModalContactClose = () => {
		setModalContactIsOpen((curState) => !curState);
	};

	const handleSelect = (location) => {
		setSelectedCity(location);
	};

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

				<button onClick={() => handleModalAboutClose(modalAboutIsOpen)}>
					Open Modal About
				</button>

				<button onClick={() => handleModalContactClose(modalContactIsOpen)}>
					Open Modal Contact
				</button>
			</main>

			<ModalDialog
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
			</ModalDialog>

			<ModalDialog isOpen={modalAboutIsOpen} onClose={handleModalAboutClose}>
				<h1>About Modal</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
					debitis amet nam, soluta delectus aperiam hic, quae nobis rem culpa
					qui quaerat. Porro magnam placeat dolores vitae officiis modi
					voluptatem.
				</p>
			</ModalDialog>

			<ModalDialog
				isOpen={modalContactIsOpen}
				onClose={handleModalContactClose}
			>
				<h1>Contact Modal</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
					debitis amet nam, soluta delectus aperiam hic, quae nobis rem culpa
					qui quaerat. Porro magnam placeat dolores vitae officiis modi
					voluptatem.
				</p>
			</ModalDialog>
		</div>
	);
}
