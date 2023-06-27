// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// to understand the code `document.getElementById()`, we need to break it into 2 parts

// camelCase
let countEl = document.getElementById("count-el")

console.log(countEl); // this will show us the whole element inside the HTML file that has the id equivalent to count-el with the tag: <p id="count-el">0</p>




let count = 0;

function incrementOnClick() {
    count++;
    countEl.innerText = count; // .innerText is the text contained inside the tag.
    console.log(count);
}