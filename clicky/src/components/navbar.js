import React from "react";
import "../styles/navbar.css";

const NavBar = props =>(
	
	<nav className="navbar">
		<ul>
			<li className = "brand">Walking Dead Click Game</li>
			<li>{props.info}</li>
			<li>Score:  {props.score}  | Total Score:  {props.totalScore}</li>
		</ul>
	</nav>
);

export default NavBar;