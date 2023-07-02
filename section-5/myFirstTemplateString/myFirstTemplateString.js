// Challenge:

const recipient = "James";

// refactor the email string to use template strings
/* 

const email = "Hey " + recipient + "! How is it going? Cheers Per";

console.log(email);

*/


// Solution:
// const email = `Hey ${recipient}! How is it going? Cheers Per`
// console.log(email);


// Challenge 2:
// Create a new variable, sender, and set its value to your name
// Use your sender variable instead of "Per";
// Break the email string into multiple lines

// Solution:
const sender = "Hannah Gabrielle Santos";

const email = `
Hey

${recipient}! How is it going? 

Cheers 
${sender}

`;


console.log(email);