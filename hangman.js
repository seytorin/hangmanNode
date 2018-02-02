
// console.log(letter);
let inputArray = [];
var inquirer = require("inquirer");

// inputArray.push(letter);
let hangmanWords = ["ariel", "elsa", "olaf", "mulan", "mickey", "simba"];
let index;
let rightArray = [];
let wrongArray = [];
let winCount = 0;
let losses = 0;
let dashArray = [];




// console.log(dashArray, dashNum);



// console.log(dashNum, dashArray);
// for(var i = 0; i<hangmanLetter.length;i++){
// 	console.log(hangmanLetter.split(""));
// }

// if(letter.indexOf(hangmanLetter) > -1){
// console.log(letter);
// }
//function that finds letter in word
let start = () => {
	let randWord = null;
	 randWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
	let lettersInWord = randWord.split("");
	let dashNum = 0;
	dashNum = lettersInWord.length;
		dashArray =[];
		rightArray = [];
		wrongArray = [];
	let guessNum = 10;

	for(let i = 0; i < dashNum; i++){
		dashArray.push("-");
	}


	let findLetter = (word, letter) => {
		//check if the letter in the word
		index = word.indexOf(letter) > -1;
			// pushLetter();
			//find it's location in the word
		if(index){

			for(let i = 0; i < dashNum; i++){
				//Push each occurence of letter in dashArray
				if(lettersInWord[i] === letter){

					dashArray[i] = letter;
				}
			}
			
			console.log(dashArray);
		}

		else {
			wrongArray.push(letter);
			guessNum--;
			console.log("Number of gueses left: " + guessNum);
			console.log("Wins: " + winCount);
			console.log("Losses: " + losses);
			console.log("Letters guessed: " + wrongArray + "\n");
			console.log(dashArray);


		}

	}

	// findLetter(hangmanWords[0], inputArray[0]);

	//function that pushes answer to wrong or right array
	let pushLetter = () => {

	if(index===true){
			rightArray.push(letter);
			// console.log(rightArray);
		}
	else{
		wrongArray.push(letter);
		// console.log(wrongArray);
	}
	}


	let prompt = () => {
		//prompts user to guess
		console.log("\n");
		inquirer.prompt([

	 		{
	   		type: "input",
	   		name: "userInput",
	    	message: "Guess a letter.",
	  		},


		]).then(function(input) {
			var answer = findLetter(randWord, input.userInput);
	  		

	  		if(lettersInWord.toString() !== dashArray.toString() && guessNum !== 0){

	  		prompt();
	  		return true;	 
	  		}
	  		round();

		});
	}

	let round = () =>{

		 if(lettersInWord.toString() === dashArray.toString()){
			console.log("You got it!");
			winCount++;
			dashArray = [];
			start();
		}
		else if(guessNum === 0){
			console.log("You lost!")
			losses++;
			start();
		}
		
		else{
			console.log("Number of gueses left: " + guessNum);
			console.log("Wins: " + winCount);
			console.log("Losses: " + losses);
			console.log("Letters guessed: " + wrongArray + "\n");
		}
		

	}

	prompt();

}

start();