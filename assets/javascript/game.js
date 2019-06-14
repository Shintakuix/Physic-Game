var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Global Variables
var wins = 0;
var losses = 0;
var guessesleft = 9;
var letterGuessed = [];
var computerPick = [];

//Computer random pick
function LoadGame() {
var compPick = alphabet[Math.floor(Math.random() * alphabet.length)];
computerPick.push(compPick);
console.log(compPick);
}

// Game starts here

    LoadGame();
    document.onkeyup = function(event) {
    var gamerPick = event.key;    
    console.log(gamerPick);
    

    if ((gamerPick === computerPick[0]) && (guessesleft > 0)) {
        wins++;
        computerPick = [];
        letterGuessed = [];
        guessesleft = 9;
        alert("Good Job!" + "\n" + "wins:" + " " + wins + "\n" + "losses:" + " " + losses);
        LoadGame();
    }
    else if ((gamerPick !== computerPick[0]) && (guessesleft > 0)) {
        guessesleft = guessesleft - 1;
        letterGuessed.push(gamerPick);
    }
    else {
        losses++;
        computerPick = [];
        letterGuessed = [];
        guessesleft = 9;
        alert("You ran out of guesses, Try Again!" + "\n" + "wins:" + " " + wins + "\n" + "losses:" + " " + losses);
        LoadGame();
        
    }
    // Game ends here

    // This is what is going to be reported on the docuement

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesleft").innerHTML = guessesleft;
    document.getElementById("letterguessed").innerHTML = letterGuessed;

    //end
}

