
//                  Parameters
function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

//              Arguments
greetUser("Hello there, ", "Per", "😊");


// Arguments are created OUTSIDE of the function, whereas parameters
// are created INSIDE of the function.