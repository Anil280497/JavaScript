
console.log("Enter the lengths of the three sides of a triangle (space-separated/each on a new line):");
const data = require('fs').readFileSync(0, 'utf8');

const [a,b,c] = data.trim().split(/\s+/).map(Number);

if (a===b && b===c) {
    console.log("Equilateral triangle");
}else if (a===b || b===c || a===c) {
    console.log("Isosceles triangle");
}else {
    console.log("Scalene triangle");
}