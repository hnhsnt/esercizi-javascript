let randomNumber = Math.floor(Math.random()*6) + 1;

console.log(randomNumber);

/*

Write down all the possible values randomNumber can hold now!


0
1
2
3
4
5
*/

// Challenge:
// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    return Math.floor(Math.random()*6) + 1;
}

console.log(rollDice());