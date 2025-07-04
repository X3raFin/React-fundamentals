import "../App.css"
import { Link } from "react-router-dom";

function NavPage() {
	return (
		<nav>
			<Link to="/"><img src="public/house.svg" alt="homePage" /></Link>
			<Link to="/cart"><img src="public/basket2.svg" alt="cartPage" /></Link>
		</nav>
	);
}

export default NavPage