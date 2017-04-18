// Create array of variables to guess (words to guess).
var hangmanGame = {
	myPhrases: ["Super man", "Bat man", "Flash flash", "Wonder Woman", "Super girl"],
	wordToGuess: "",
	maskedPhrase: [],
	wrongGuesses: [],
	guessesLeft: 0,
	wins: 0,
	losses: 0,
	$wordToGuess: $("#word-to-guess"),
	$wrongGuesses: $("#wrong-guesses"),
	$guessesLeft: $("#guesses-left"),

	// Initialize the game - startGame
	startGame: function(){
		console.log("Start Game function ");
		console.log(this);
		// - pick one word randomly
		this.wordToGuess = this.myPhrases[ Math.floor(Math.random()* this.myPhrases.length ) ];
	
		console.log("word to guess: " + this.wordToGuess);
		// - print empty phrase to screen ( _ _ _ etc)
		
		for(var i = 0; i<this.wordToGuess.length; i++){
		// -- convert each letter to a blank.
			if(this.wordToGuess.charAt(i)== " ") {
				//check for spaces
				this.maskedPhrase.push("\xa0");
			}
			else {
				//add blank for each letter
				this.maskedPhrase.push("_");
			}
		}

		console.log("maskedPhrase : " + this.maskedPhrase.toString());
		// -- reset wrong guess to empty
		this.wrongGuesses=[];
		// -- reset guesses left
		this.guessesLeft = 13;


		this.redraw();
	},

	//helper function to update html page.
	redraw: function() {
		console.log("redraw() function");
		this.$wordToGuess.html(this.maskedPhrase.join(" "));
		this.$wrongGuesses.html(this.wrongGuesses.join(" "));
		this.$guessesLeft.html(this.guessesLeft);

	}
	

	// Start the game : playGame
	playGame: function(){
	// - capture key press from user
	// - compare against valid letters (to discard ALT, CTRL, COMMAND, ESC, etc keys)
	// - then check against wrong guess to make sure it wasn't guessed already
	// - then check against Word to make sure it wasn't already guessed
	// - then check against Word to see if it contains the letter.
	// -- if correct, update the Word on the screen
	// -- if wrong, update Wrong guesses, and reduce guesses left
	// -Check to see if game is over:
	// -- if Word is completely guessed, then user wins. Increment Wins counter
	// -- if guesses left = 0, the user losses. Increment Losses counter, alert user, and show word.
	}
	//Reset game: gameOver
	// - then reset game (Initialize game, then start game functions)


};



$(document).ready(function(){

console.log("Document Ready function");
console.log("Hangman Object: " + hangmanGame.myPhrases.toString());
console.log("Start game");
hangmanGame.startGame();
document.onkeyup = hangmanGame.playGame();


});