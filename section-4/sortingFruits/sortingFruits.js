let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Challenge:
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// and a conditional statement, and the textContent property.



// Solution:

function arrangeFruits() {
    for (let i = 0; i<fruit.length; i++) {
        if (fruit[i] == "🍎") {
            appleShelf.textContent += fruit[i];
        } else if (fruit[i] == "🍊") {
            orangeShelf.textContent += fruit[i];
        }
    }
}

arrangeFruits();