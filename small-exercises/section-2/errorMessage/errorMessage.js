// Challenge:
/* When the user clicks the purchase button, render out
"Something went wrong, please try again" in the paragraph
that has the id = error */


function error() {
    let myError = document.getElementById("error");
    myError.textContent = "Something went wrong, please try again";
}