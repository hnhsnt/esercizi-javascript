// Using functions to write less code
/* Let's pretend that we are building a race car game. */


// Setting up the race 🏎🏎🏎

// Every time we have to start a new race, we would have to write this code

/* console.log(5);
console.log(4);
console.log(3);
console.log(2);
console.log(1); */


// We would have to refactor it to avoid repetitions in the code.
// We are going to refactor this using a function:

function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
} // this code won't run as it hasn't been declared, we have to INVOKE it:

countdown();

// GO! 🏁
// Players are runnning the race 🏎
// Race is finished!


// Get ready for a new race 🏎🏎🏎

countdown();