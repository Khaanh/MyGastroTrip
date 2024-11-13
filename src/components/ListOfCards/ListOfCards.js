import "./style.css";

export default function ListOfCards() {
	return (
		<div className="card">
			<img src="./../../../public/01.jpg" alt="pic" className="card-img" />
			<h1 className="card-title">MAN vs MACHINE</h1>
			<p>description</p>
			<p>My Rating</p>
			<p>Geolocation</p>
		</div>
	);
}
