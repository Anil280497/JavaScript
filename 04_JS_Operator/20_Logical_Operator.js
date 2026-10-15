// && -> AND Gate   --> both condition should be positive 
// || -> OR Gate    --> any one condition should be positive
// !  -> not        --> it change the result from true to false and false to true

let a = true;
let b = false;
let c = true;

console.log(a && b);   // false
console.log(a && c);   //true
console.log(a || b);   //true
console.log(b || c);   // true
console.log(!a)
console.log(!b)