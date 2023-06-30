let player = {
    name: "Jackson",
    chips: 23
}
let cards = []; // array = ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";
let messageEl = document.getElementById("message-el");
/* let sumEl = document.getElementById("sum-el"); */
let sumEl = document.querySelector("#sum-el"); 
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    if (isAlive == true && hasBlackJack == false){
        cardsEl.textContent = "Cards: ";
        for (let i = 0; i < cards.length; i++) {
            cardsEl.textContent += cards[i] + " "
        }
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
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    cards.push(card); 
    sum += card;
    renderGame();
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13) + 1;
    if (randomCard == 1) {
        return 11;
    } if (randomCard > 10) {
        return 10;
    } else {
        return randomCard;
    }
}


