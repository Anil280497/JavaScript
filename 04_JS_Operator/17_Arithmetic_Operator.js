let a = 10;
let b = 3;

// Arithmetic Operators
let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);

// ----------------------

// Modulus -> % -> It will give you remainder
let a1 = 10;
let b1 = 3;
console.log(a1 % b1); // 1, because 10/3 = 3 remainder 1
console.log(13 % 7);  // 6
console.log(101 % 2); // 1, because 101 is odd number, so remainder is 1 
console.log(100 % 2); // 0, because 100 is even number, so remainder is 0


// Exponential **, power 2^3 -> 8
console.log(2 ** 3);   //  2*2*2 = 8
console.log(a ** b);   // 10^3 -> 1000

let e = 20 % 3;
console.log(e); // 2

let f = 2 ** 3;
console.log(f); // 8    

let g = 10 + 5 * 2;
console.log(g); // 20, because multiplication has higher precedence than addition