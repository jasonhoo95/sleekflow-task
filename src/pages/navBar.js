import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
	const closeNav = () => {
		document.querySelector(".left-navbar").classList.toggle("active");
	};
	return (
		<div className="left-navbar">
			<div
				className="closebtn"
				onClick={(e) => {
					closeNav();
				}}>
				&times;
			</div>
			<Link to="/">Rick and Morty</Link>

			<Link to="/contact">Contact Link</Link>
		</div>
	);
}
