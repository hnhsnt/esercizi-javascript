let firstCard = 10;
let secondCard = 7;
let cards = [firstCard, secondCard]; // array = ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = " ";
let messageEl = document.getElementById("message-el");
/* let sumEl = document.getElementById("sum-el"); */
let sumEl = document.querySelector("#sum-el"); 
let cardsEl = document.querySelector("#cards-el");

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card? 😊";
    } else if (sum === 21) { // === is equivalent to saying strictly equal. This also controls the data type.
        hasBlackJack = true;
        message = "Woohoo! You've got Blackjack! 🥳";
    } else if (sum > 21) {
        isAlive = false;
        message = "You're out of the game! 😭";
    }
    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = 4;
    sum += card;
    renderGame();
}


