let letter = process.argv[2];
// console.log(letter);
let inputArray = [];
var inquirer = require("inquire");

inputArray.push(letter);
let hangmanWords = ["taco"];
let index;
let rightArray = [];
let wrongArray = [];

// for(var i = 0; i<hangmanLetter.length;i++){
// 	console.log(hangmanLetter.split(""));
// }

// if(letter.indexOf(hangmanLetter) > -1){
// console.log(letter);
// }
//function that finds letter in word
let findLetter = (word, letter) => {
	 index = word.indexOf(letter) > -1;
		pushLetter();
	return console.log(index);
}

findLetter(hangmanWords[0], inputArray[0]);

//function that pushes answer to wrong or right array
function pushLetter (){

if(index===true){
		rightArray.push(letter);
		console.log(rightArray);
	}
else{
	wrongArray.push(letter);
	console.log(wrongArray);
}
}