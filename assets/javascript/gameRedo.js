var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var userGuesses = [];
beginGame = false;
endGame = false;

var letters = ["k", "d", "y", "w"];

document.onkeyup = function(event) {
    
    var userGuesses = event.key; 

    var computerGuesses = letters[Math.floor(Math.random() * letters.length)];

    if ((userGuesses) === (computerGuesses)) {
        wins++;
        remainingGuesses--;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("userGuesses").innerHTML = userGuesses;
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    }

    if ((userGuesses) != (computerGuesses)) {
        losses++;
        remainingGuesses--;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("userGuesses").innerHTML = userGuesses;
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    }
        if(remainingGuesses < 0) {
            alert("You went through your 10 tries!");
    }
};