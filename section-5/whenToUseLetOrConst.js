// If possible, use const. If not, use let.
// It allows other programmers to understand better that the const variable is not to be changed



// Challenge:
// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
let basePrice = 520;
let discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days";

// Whoops! Turns out the shipping will be a bit more complex
shippingCost = 15;
shippingTime = "7-14 days";

// Calculating the full price
let fullPrice = basePrice - discount + shippingCost;

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime);


// Solution:
// basePrice should be a const
// discount can also be a const