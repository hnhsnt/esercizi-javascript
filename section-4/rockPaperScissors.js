let hands = ["rock", "paper", "scissors"];

// Challenge:
// Create a function that returns a random item from the array.



// Solution:
function getAnswer() {
    let answer = hands[Math.floor(Math.random()*3)];
    console.log(answer); 
}

getAnswer();