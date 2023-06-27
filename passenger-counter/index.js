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

// Creating a save button
// 1. Create a function, save(), which logs out the count when it's called.

/* function save() {
    // 2. Create a variable that contains both the count and the and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph.
    let countAndDash = count + " - ";
    let saveEl = document.getElementById("save-el");
    saveEl.innerText += countAndDash;
    console.log(count);
} */

// As we can note, spaces aren't working where we want them to work.
// To figure out what's wrong, we can think what would be a suspect, which tool
// are we using that is possible to be a suspect. In this case it might be the innerText
// We can find another tool that can work this way.

// We can search for innerText alternative MDN (Mozilla Developer Networks)
// In the solution that we found, we can use .textContent instead of .innerText


function save() {
    // 2. Create a variable that contains both the count and the and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph.
    let countAndDash = count + " - ";
    let saveEl = document.getElementById("save-el");
    saveEl.textContent += countAndDash;
    console.log(count);
    count = 0;
    countEl.innerText = count;
}
