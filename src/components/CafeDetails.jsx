import styles from "./CafeDetails.module.css";
import { useParams, useSearchParams } from "react-router-dom";

export default function CafeDetails() {
	const { id } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();

	return <div>CafeDetails {id}</div>;
}
