let a = 10;
console.log(++a + a + a)
console.log(a)  
// Output
//33
//11


let b = 10;
console.log(++b + b + b++)
console.log(b) 
//33
//12


let x = 1;
let result = x++ + ++x;  //result = 1 (from x++) + 3 (from ++x) 
console.log(result)
console.log(x)
//4
//3


