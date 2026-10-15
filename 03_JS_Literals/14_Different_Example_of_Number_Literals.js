// Number Literals

let count = 30;
let negativeCount = -30;
let zero = 0;

console.log(count);
console.log(negativeCount);
console.log(zero);


 // hexadecimal literal, it represents the number 255 in decimal.how it works: 0x indicates that the number is in hexadecimal
 //  format, and FF is the hexadecimal representation of 255 in decimal.

let h = 0xFF;               
console.log(h);                       
console.log(typeof h);       // typeof h is number, because in JavaScript, all numbers are represented as floating-point numbers, regardless of whether they are integers or decimals.


let color_hex = 0xFF0000;
 console.log(color_hex);  //typeof is number

let octal = 0o77; //base
console.log(octal); 
console.log(typeof octal); //typeof is number/

let tiny = 1.5e-4;
console.log(tiny);
console.log(typeof tiny); //typeof is number

let million = 1e6;
console.log(million);
console.log(typeof million); //typeof is number


// --------------------------------------------------------
// 3. NUMERIC SEPARATORS (ES2021+)
// --------------------------------------------------------


let million1 = 1_000_000;
let binarySep = 0b1010_0001;
let hexSep = 0xFF_FF;






