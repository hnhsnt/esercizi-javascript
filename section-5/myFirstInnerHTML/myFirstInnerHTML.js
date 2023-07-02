// Challenge:
// Use .innerHTML to render a Buy! button inside the div container


// Solution:
const container = document.querySelector("#container");
container.innerHTML = "<button>Buy!</button>"

// Challenge 2:
// When clicked, render a paragraph under the button (in the container);
// that says "Thank you for buying!"

container.addEventListener("click", function() {
    container.innerHTML += "<p> Thank you for buying! </p>"
})