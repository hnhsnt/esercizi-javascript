let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// Challenge:
// You need to help me fix up the largeCountries array so that
// China and Pakistan are added back into their respective places.
// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];


// Use push() & pop() and their counterparts unshift() and shift()
// Google how to use unshift() and shift()



// Solution:
largeCountries.shift();
largeCountries.unshift("China");
largeCountries.pop();
largeCountries.push("Pakistan");


console.log(largeCountries);