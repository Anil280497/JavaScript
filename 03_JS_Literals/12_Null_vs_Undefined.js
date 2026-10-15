// Null vs undefined in JS

/* 
null means "no value" or "Empty" which is assigned by the programmer.intentional absence of any object value
undefined means "value is not assigned" or "not defined" which is assigned by the JS itself.
*/

// -----------------------------------------------------------------------------------------


let userAge = null;
console.log(userAge);

let userName1= null;
console.log(userName1); // null
console.log(typeof userName1); // object

// -----------------------------------------------------------------------------------------

// Ex1
let userName;
console.log(userName); // undefined, because it has not been assigned a value yet.
console.log(typeof userName); // undefined


// Ex2
function getUserInfo() {
   // This function does not return anything, so it will return undefined by default.
}
console.log(getUserInfo()); // undefined, because the function does not return anything.


// Ex3
let x;
x = 5;
console.log(x);

// -----------------------------------------------------------------------------------------


