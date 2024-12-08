import "./App.css";
import ListOfCards from "./components/ListOfCards/ListOfCards";
import ListOfCities from "./components/ListOfCities/ListOfCities";
import SingleCard from "./components/SingleCard/SingleCard";

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>My Gastro Trip</h1>
				<ListOfCities />
			</div>
			<main>
				<div className="container">
					{/* <ListOfCards /> */}
					<SingleCard />
				</div>
			</main>
		</div>
	);
}

export default App;

// TODO: Black&White Reveal wish list
// TODO: Category: Visited, would like to visit,
// TODO: List of cafe in different country
// TODO: List of landmarks
// TODO: Shared budget with friends

// TODO: ListOfCards component: Every 3-5 sec change pic.
