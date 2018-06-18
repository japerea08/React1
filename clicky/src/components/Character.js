import React from "react";
import "../styles/images.css";

const Character = props =>(
	
	<div className = "col-md-3">
		<img onClick={()=>props.storeCharacter(props.name)} alt = {props.name} src = {props.image}/>
	</div>
);

export default Character;