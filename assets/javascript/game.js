var guesses = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

console.log(guesses)
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var guessedSoFar = [];

var computerChoice = guesses[Math.floor(Math.random() * guesses.length)];
console.log(computerChoice)

document.onkeyup = function(){
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
}