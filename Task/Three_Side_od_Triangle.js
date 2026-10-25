const prompt = require("prompt-sync")();

const ab = Number(prompt("Enter length of ab :"));
const bc = Number(prompt("Enter length of bc :"));
const ca = Number(prompt("Enter length of ca :"));


if (ab === bc && bc === ca) {
    console.log("Equilateral")
} else if (ab === bc || bc === ca) {
    console.log("Isosceles")
}
else {
    console.log("Scalene");
}
