// Code is extracted from the previous file isAlive.js
let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

// 1. Declare a variable called message and assign its value to an empty string
// 2. Reassign the message variable to the string we're logging out

let message = " ";

if (sum < 21) {
    message = "Do you want to draw a new card? 😊";
} else if (sum === 21) { // === is equivalent to saying strictly equal. This also controls the data type.
    hasBlackJack = true;
    message = "Woohoo! You've got Blackjack! 🥳";
} else if (sum > 21) {
    isAlive = false;
    message = "You're out of the game! 😭";
}

// CASH OUT
console.log(message);