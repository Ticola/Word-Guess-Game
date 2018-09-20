// Setting the exact letter values that the computer can chose from //
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Setting the intial setting to 0 to begin the game //
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessed = [];
var letterToGuess = null;

// Formula to make the the computer guess a random letter of the array mentioned above //
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// We directly connect to the HTML id and add the variable to display the number //
function updateGuessesLeft() {
    document.querySelector('#guessLeft').innerHTML = ("Amount of Guesses: ") + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

function updateGuessesSoFar() {
    document.querySelector('#guesses').innerHTML = ("Letters Guessed ") + guessed.join(", ");
};
// This function is necessary to reset after the alert and continuing the game without erasing all data //
var reset = function() {
    totalGuesses = 10;
    guessesLeft = 10;
    guessed = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

// This function is literal to call the action after the user presses a key. Also applying a non-case sensitive operator for functionality //
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(userGuess);

// These conditional statements perform different actions firstly by displaying the letter pressed by the user and linking with the other variables and increments with the appropriate number //
    if (check === false) {
        alert("Please try again!");
        return false;
    } else if (check === true) {
        guessesLeft--;
        guessed.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

// This conditonal registers if the user wins by == with the computer guess and increments the appropriate number //
        if (guessesLeft > 0) {
            if(userGuess == letterToGuess) {
                wins++;
                document.querySelector("#wins").innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                alert("Wow, you read my mind! You guessed " + userGuess);
                reset();
            }
        } else if (guessesLeft == 0) {
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Not Quite, try again!");
            reset();
        }
        return false;

    } 
};



