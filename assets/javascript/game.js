var guesses = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
console.log(guesses)

var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var guessedLetters = [];

console.log(wins)
console.log(losses)
console.log(guessesRemaining)
console.log(guessedLetters)

 // Create variables that hold references to the places in the HTML where we want to display things.
 var directionsText = document.getElementById("directions-text");
 var winsText = document.getElementById("wins-text");
 var lossesText = document.getElementById("losses-text");
 var guessedLettersText = document.getElementById("guessedLetters-text");
 var guessesRemainingText = document.getElementById("guessesRemaining-text");

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = guesses[Math.floor(Math.random() * guesses.length)];
console.log(computerGuess)


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
var userGuess = event.key;  

// Determines which key was pressed.

console.log(userGuess)
if (userGuess === computerGuess) {
    wins++;
    guessesRemaining = 10;

} else if (userGuess !== computerGuess) {
    guessesRemaining--;
}

if (guessesRemaining === 0) {
    losses++
}


// Hide the directions
directionsText.textContent = "";

// Display the user and computer guesses, and wins/losses/ties.
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesRemainingText.textcontent = "Guesses remaining: " + guessesRemaining;
guessedLettersText.textContent = "Your guesses so far: " + userGuess;
  }

