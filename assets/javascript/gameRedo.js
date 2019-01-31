//lines 3 through 9 are initilizing these variables. They will only be initialized
// on the first time the page loads.
//What this means is you will have to think of a place to reset them in your onkeyup function
var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var userGuesses = [];
beginGame = false;
endGame = false;
var letters = ["k", "d", "y", "w"];

document.onkeyup = function(event) {

    var userGuesses = event.key;

    //This will pick a new letter for the user to guess, every time the press a key
    //This is not necessarily a bad thing, but I wasn't sure if this was your intention
    //since it just makes the game super hard lol
    var computerGuesses = letters[Math.floor(Math.random() * letters.length)];

    if ((userGuesses) === (computerGuesses)) {
        //Is your objective for this game to have the user see how many times they can
        //guess a random letter in 10 tries?
        //If not, then maybe this would a good place for the game to 'reset'
        //i.e. pick a new letter, and reset the guesses
        wins++;
        remainingGuesses--;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("userGuesses").innerHTML = userGuesses;
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    }

    if ((userGuesses) != (computerGuesses)) {
        //To me, at first glance, everything seems to be working correctly here.
        losses++;
        remainingGuesses--;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("userGuesses").innerHTML = userGuesses;
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    }
        if(remainingGuesses < 0) {
          //This would probably be a good place to reset all of the variables as well as
          //pick a new word
            alert("You went through your 10 tries!");
    }
};