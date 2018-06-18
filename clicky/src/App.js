import React from 'react';
import Character from "./components/Character.js";
import NavBar from "./components/navbar.js";
import characters from "./characters.json";
import "./styles/splash.css";

var charSelected =[];

class App extends React.Component  {


	//we set the state of app to the characters
	state = {
		characters,
		score: 0,
		totalScore: 0,
		info: "Click an Image to Begin" 
	}

	//function to store clicked item
	storeCharacter = name =>{
		//try some jquery
		if(charSelected.indexOf(name)>-1){
			//found
			alert("Already Selected");
			//set the total score to the current score
			//empty the array
			this.setState({score: 0, info: "You Guessed Incorrectly!"});
			charSelected = [];
		}
		else{
			charSelected.push(name);
			this.setState({score:charSelected.length, info: "You Guessed Correctly"});
			//checking old top score vs new score
			if(this.state.totalScore < charSelected.length)
				this.setState({totalScore: charSelected.length});
		}
		console.log(charSelected);
		console.log(this.state.characters);
		this.shuffleArray();
	}

	//function to rescramble array
	shuffleArray = ()=>{
		for(let i = this.state.characters.length-1; i > 0; i--){
			const j = Math.floor(Math.random()*(i + 1));
			[this.state.characters[i], this.state.characters[j]] = [this.state.characters[j], this.state.characters[i]] 
		}
		const newArr = this.state.characters;
		this.setState({newArr});
	}



  render() {
    return (
    	<div>
    		<NavBar info = {this.state.info} score = {this.state.score} totalScore = {this.state.totalScore}/>
				<header className = "header">
					<h2>Click on an image to earn points, but don't click on any more than once!</h2>
				</header>
				<main className = "container">
					<div className = "row">
						{this.state.characters.map(character=>(
							<Character
								storeCharacter ={this.storeCharacter}
								id = {character.id}
								name = {character.name}
								image = {character.image}
							/>
						))}
					</div>
					
				</main>
			</div>
    );
  }
}

export default App;
