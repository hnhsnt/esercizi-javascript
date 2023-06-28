// Code is extracted from the previous file ifElseStatementForGame.js

let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;

// Challenge:
// 1. Create a variable called isAlive and assign it to true
// 2. flip its value to false in the appropriate code block


// Solution:

let isAlive = true;

if (sum < 21) {
    console.log("Do you want to draw a new card? 😊");
} else if (sum === 21) { // === is equivalent to saying strictly equal. This also controls the data type.
    console.log("Woohoo! You've got Blackjack! 🥳");
    hasBlackJack = true;
} else if (sum > 21) {
    console.log("You're out of the game! 😭");
    isAlive = false;
}

// CASH OUT
console.log(hasBlackJack);