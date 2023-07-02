let trueOrFalse = Boolean("hello");

console.log(trueOrFalse); // this will be true if there is any value inside the parenthesis, if there is an empty string (""), it gives false

// Challenge: 
// Guess whether these console.logs will log out true or false

console.log(Boolean(""));
console.log(Boolean ("0"));
console.log(Boolean(100));
console.log(Boolean(null));
console.log(Boolean([0]));
console.log(Boolean(-0));


// Solution:
// console.log(Boolean("")); // false
// console.log(Boolean ("0")); // true
// console.log(Boolean(100)); // true
// console.log(Boolean(null)); // false
// console.log(Boolean([0])); // true
// console.log(Boolean(-0)); // false