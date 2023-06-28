let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;

// Write the conditional according to these rules:
// 1. if less than or equal to 20 -> "Do you want to draw a new card? 😊"
// 2. else if exactly 21 -> "Woohoo! You've got Blackjack! 🥳"
// 3. else -> "You're out of the game! 😭"

if (sum < 21) {
    console.log("Do you want to draw a new card? 😊");
} else if (sum === 21) { // === is equivalent to saying strictly equal. This also controls the data type.
    console.log("Woohoo! You've got Blackjack! 🥳");
    hasBlackJack = true;
} else if (sum > 21) {
    console.log("You're out of the game! 😭");
}

// CASH OUT
console.log(hasBlackJack);