
let a = 100;
console.log(a++ + ++a +a++ + ++a);
console.log(a);

//Result
// 100 + 102 + 102 + 104 = 408
//104

//----------------------------------


let b = 37;
console.log(--b + b--);
console.log(b);

//result
// 36 + 36 = 72
// 35

//----------------------------------

let c = 5; 
let d = c-- - --c; 
console.log(d, c);

// 2 ,3

//----------------------------------


let i = 1; 
let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);

// 3,3
