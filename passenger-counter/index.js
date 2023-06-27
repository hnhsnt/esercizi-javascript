// In order to do this exercise:
// Initialize the count as 0
// Listen for clicks on the increment button
// Increment the count variable when the button is clicked
// Change the count-el in the HTML to reflect the new count:
//   grab the count-el element, store it in a countEl variable

let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
    // console.log("The button was clicked"); // writing this just to see the action.
    count++;
    // set countEl's inerText to the count
    countEl.innerText = count;
}