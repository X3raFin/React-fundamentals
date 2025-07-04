import "../App.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { useEffect } from "react";

function NavPage() {
	const {getQuantity, cartStatus} = useCart();

	return (
		<nav>
			<Link to="/"><img src="public/house.svg" alt="homePage" /></Link>
			<div className="">
				<Link to="/cart"><img src="public/basket2.svg" alt="cartPage" /></Link>
				<div style={getQuantity() === 0 ? {display: "none"} : {display: "flex"}}>{getQuantity()}</div>
			</div>
		</nav>
	);
}

export default NavPage