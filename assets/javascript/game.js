//make an array of letters



letters = ["k", "y", "d"];

//create variables

var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var userGuesses = [];
var chosenRandomLetter;

function randomLetter() {
   chosenRandomLetter = letters[Math.floor(Math.random() * letters.length)];
    return console.log(chosenRandomLetter);
};

document.onkeyup = function(event) {
    var pancake = String.fromCharCode(event.keyCode).toLowerCase();
    //userGuesses.event = letter;
    userGuesses = pancake;
    //return(letter);
    
    for (var i = 0; i < userGuesses.length; i++) {
    document.getElementById("userGuesses").innerHTML += userGuesses[i];
    }

    if(userGuesses === chosenRandomLetter) {
        wins++;
        remainingGuesses--;
        userGuesses.push(userGuesses);
        updateDisplay();
    }

    if (userGuesses != chosenRandomLetter) {
        losses++;
        remainingGuesses--;
        userGuesses.push(userGuesses);
        updateDisplay();
    }

    if(remainingGuesses = 0) {
        alert("You went through your 10 tries!");
    }

    function updateDisplay() {
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
        document.getElementById("userGuesses").innerHTML = userGuesses;
    }
    
    updateDisplay();

};

//begin the game
   // var userGuesses = ["a", "b", "c", "d", "e", "f", 
    //"g", "h", "i", "j", "k", "l", 
    //"m", "n", "o", "p", "q", "r", 
    //"s", "t", "u", "v", "w", "x", 
    //"y", "z",];

    //if (userGuesses.indexOf(userGuesses[i]) > -1) {
     //   if(userGuesses === chosenRandomLetter) {
     //       wins++;
        //remainingGuesses--;
        //    userGuesses = "";
       // }
    
    //if (userGuesses != chosenRandomLetter) {
      //  losses++;
        //remainingGuesses--;
       // userGuesses.push(userGuesses);
    //}

    //if (remainingGuesses === 0) {
    //    remainingGuesses = 10;
     //   userGuessess = "";
     //   }
   // }
//};

//function updateDisplay() { 

//    document.getElementById("wins").innerHTML = wins;
  //  document.getElementById("losses").innerHTML = losses;

    //for (var i = 0; i < userGuesses.length; i++) {
    //document.getElementById("userGuesses").innerHTML += userGuesses[i];
    //}
    //document.getElementById("remainingGuesses").innerHTML = remainingGuesses;

    //updateDisplay();
//};
