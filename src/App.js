import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import Navbar from "./pages/navBar";
import ContactDetails from "./pages/contactDetails";
import { Helmet } from "react-helmet";
import MainPage from "./pages/mainPage";
function App() {
	const toggleMenu = () => {
		document.querySelector(".left-navbar").classList.toggle("active");
	};
	return (
		<div className="App">
			<Helmet>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />{" "}
			</Helmet>
			<Navbar />
			<div onClick={(e) => toggleMenu()} className="menu-item">
				&#9776;
			</div>
			<Routes>
				<Route path="/" element={<MainPage />}></Route>
				<Route path="contact">
					<Route index={true} element={<Contact />}></Route>
					<Route path=":id" element={<ContactDetails />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
