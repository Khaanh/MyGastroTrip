// import ListOfCards from "./components/ListOfCards/ListOfCards";
// import ListOfCities from "./components/ListOfCities/ListOfCities";
// import SingleCard from "./components/SingleCard/SingleCard";
import {
	BrowserRouter,
	Route,
	Router,
	Routes,
	Navigate,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Login from "./pages/Login";
import CafeDetails from "./components/CafeDetails";
import AppLayout from "./components/AppLayout";
import CafeList from "./components/CafeList";

const listOfCoffeesArr = [
	{
		id: 0,
		location: "München",
		name: "Man vs Machine 0",
		desc: "Man vs Machine is a Specialty Coffee Roaster founded in 2014. We are 100% independent from day one. No investors. Just us. We don’t do Robusta. We roast nothing but the highest grade Arabica Coffees (Specialty Grade 80pts.) Our main focus, always is and always will be quality before growth. We are happy to work with some of the finest intl. cafes and bars in the UK, EU and the UAE amongst others. Our coffee is also served in several Michelin starred restaurants and other quality driven places, like offices,	restaurants and cafes.",
		img: "./img/MvsM-01.jpg",
		rating: 5,
		geo: "https://www.google.com/maps/dir//Man+Versus+Machine+Coffee+Roasters,+M%C3%BCllerstra%C3%9Fe+23,+80469+M%C3%BCnchen/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x479ddf5e115d6107:0xebd22248be182933?sa=X&ved=1t:57443&ictx=111",
		address: "Müllerstraße 23",
		revealedStatus: true,
	},
	{
		id: 1,
		location: "Augsburg",
		name: "Kaffeemanufaktur",
		desc: "Hallo, ich bin Carina Schneider, den meisten werde ich bereits bekannt sein! Ich freue mich sehr die Kaffeemanufaktur als erfahrene Mitarbeiterin in die Zukunft führen zu dürfen. Zusammen mit meinem Team stellen wir uns den künftigen Herausforderungen und versuchen jeden Tag ein Stückchen besser zu werden! Worte wie Fairness, Genuss, Qualität und Verantwortung sind für mich nicht nur Marketing-Floskeln, sondern gelebte Unternehmenskultur. Als gelernte IHK Wein-Sommelière ist die Welt der Sensorik und des bewussten Geschmacks seit jeher meine Spielwiese.",
		img: "./img/kaffeemanufaktur.jpg",
		rating: 3,
		geo: "https://www.google.com/maps/dir//Man+Versus+Machine+Coffee+Roasters,+M%C3%BCllerstra%C3%9Fe+23,+80469+M%C3%BCnchen/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x479ddf5e115d6107:0xebd22248be182933?sa=X&ved=1t:57443&ictx=111",
		address: "Müllerstraße 1",
		revealedStatus: true,
	},
	{
		id: 2,
		location: "Würgzburg",
		name: "Man vs Machine 2",
		desc: "Man vs Machine is a Specialty Coffee Roaster founded in 2014. We are 100% independent from day one. No investors. Just us. We don’t do Robusta. We roast nothing but the highest grade Arabica Coffees (Specialty Grade 80pts.) Our main focus, always is and always will be quality before growth. We are happy to work with some of the finest intl. cafes and bars in the UK, EU and the UAE amongst others. Our coffee is also served in several Michelin starred restaurants and other quality driven places, like offices,	restaurants and cafes.",
		img: "./img/MvsM-03.jpg",
		rating: 4,
		geo: "https://www.google.com/maps/dir//Man+Versus+Machine+Coffee+Roasters,+M%C3%BCllerstra%C3%9Fe+23,+80469+M%C3%BCnchen/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x479ddf5e115d6107:0xebd22248be182933?sa=X&ved=1t:57443&ictx=111",
		address: "Müllerstraße 2",
		revealedStatus: true,
	},
	{
		id: 3,
		location: "London",
		name: "Prufrock Coffee",
		desc: "Serving great coffee and delicious food on Leather Lane since 2011.",
		img: "./img/PrufrockCoffee.jpg",
		rating: 3,
		geo: "https://www.google.com/maps?sca_esv=f29961f6c43f873e&lsig=AB86z5VY5u2NEjYW-uQiy3g6rxw-&biw=2560&bih=1271&dpr=1.5&um=1&ie=UTF-8&fb=1&gl=de&sa=X&geocode=KWnNjCZMG3ZIMRGkSgls1qx3&daddr=23-25+Leather+Ln,+London+EC1N+7TE,+Vereinigtes+K%C3%B6nigreich",
		address: "23-25 Leather LaneEC1N 7TE, London",
		revealedStatus: false,
	},
	{
		id: 4,
		location: "Frankfurt",
		name: "Romiani",
		desc: "Man vs Machine is a Specialty Coffee Roaster founded in 2014. We are 100% independent from day one. No investors. Just us. We don’t do Robusta. We roast nothing but the highest grade Arabica Coffees (Specialty Grade 80pts.)",
		img: "./img/Romiani-03.jpg",
		rating: 4,
		geo: "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgkIAhAuGAoYgAQyCQgDEAAYChiABDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEHMjA2ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=de&sa=X&geocode=KSmm5c-hD71HMZOqRvv7EvDJ&daddr=Schillerstra%C3%9Fe+30-40,+60313+Frankfurt+am+Main",
		address: "Schillerstraße 30-40, 60313 Frankfurt am Main",
		revealedStatus: true,
	},
	{
		id: 5,
		location: "Frankfurt",
		name: "Romiani",
		desc: "Man vs Machine is a Specialty Coffee Roaster founded in 2014. We are 100% independent from day one. No investors. Just us. We don’t do Robusta. We roast nothing but the highest grade Arabica Coffees (Specialty Grade 80pts.)",
		img: "./img/Romiani-03.jpg",
		rating: 4,
		geo: "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgkIAhAuGAoYgAQyCQgDEAAYChiABDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEHMjA2ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=de&sa=X&geocode=KSmm5c-hD71HMZOqRvv7EvDJ&daddr=Schillerstra%C3%9Fe+30-40,+60313+Frankfurt+am+Main",
		address: "Schillerstraße 30-40, 60313 Frankfurt am Main",
		revealedStatus: true,
	},
];

const listOfCities = [
	"München",
	"Augsburg",
	"Würgzburg",
	"Frankfurt",
	"Stuttgart",
	"London",
];

// const random = Array.from({ length: 10 }, (_, i) => {
// 	return i + 1;
// });
// console.log(random);

const random = Array.from({ length: 15 }, (_, i) => {
	return i + 1;
});

function App() {
	return (
		<div className="container">
			<BrowserRouter>
				<Routes>
					<Route index element={<Homepage />} />
					<Route path="product" element={<Product />} />
					<Route path="login" element={<Login />} />
					<Route path="app" element={<AppLayout />}>
						<Route index element={<Navigate replace to="cafeList" />} />
						<Route path="cafeList" element={<CafeList />} />
						<Route path="cafeList/:id" element={<CafeDetails />} />
					</Route>
				</Routes>
			</BrowserRouter>
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
// TODO: Img optimization
// TODO: Add Countries also
// TODO: Text expander for cards
// TODO: Star rating
// TODO: Animate logo
// TODO: Dark theme
