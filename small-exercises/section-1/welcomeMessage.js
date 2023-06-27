// Challenge:
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page.

// render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById("welcome-el");

let name = "Hannah";
let greeting = "Welcome to this page, "


welcomeEl.innerText = greeting + name;

// Add an emoji to the end 👋🏼
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += " 👋🏼";