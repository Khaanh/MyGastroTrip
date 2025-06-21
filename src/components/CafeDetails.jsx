import { useParams } from "react-router-dom";
import styles from "./CafeDetails.module.css";

export default function CafeDetails() {
	const { id } = useParams();
	return <h1>CafeDetails {id}</h1>;
}
