let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// Challenge:
// Create four functions: add(), subtract(), divide(), multiply
// Call the correct function when the use clicks on one of the buttons
// Perform the given calculation in the paragraph with id="sum-el"

/* 
E.g. if the user clicks on the "Plus" button, you should render
"Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
*/

let sumEl = document.getElementById("sum-el");
let calculate;

// Solution:
function add() {
    calculate = num1 + num2;
    sumEl.textContent = "Sum: " + calculate;
}

function subtract() {
    calculate = num1 - num2;
    sumEl.textContent = "Sum: " + calculate;
}

function divide() {
    calculate = num1 / num2;
    sumEl.textContent = "Sum: " + calculate;
}

function multiply() {
    calculate = num1 * num2;
    sumEl.textContent = "Sum: " + calculate;
}