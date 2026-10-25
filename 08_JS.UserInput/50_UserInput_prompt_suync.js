// const prompt = require('prompt-sync')();
// let num = Number(prompt("Enter a Number"));
// console.log(num);

// if (num % 2 === 0) {
//     console.log(num + " is Even");
// } else {
//     console.log(num + " is Odd");
// }

const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number:"));
// num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}


// run this code through terminalnode