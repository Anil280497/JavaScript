// What is literal in JavaScript?   : THE Value which we assign to a variable is called literal.

//Typesf literals in JavaScript--
// 1. String literal
// 2. Number literal
// 3. Boolean literal
// 4. Object literal
// 5. Array literal
// 6. Function literal
// 7. Null literal
//  8. Undefined literal
//9. Symbol literal  
// 10. BigInt literal
// Template Literal


// String literal
let name = "John Doe";
console.log(name);

// Number literal       
let age = 25;
console.log(age);

let pi = 3.14;    // its not a boolean literal, its a number literal
console.log(pi);

// Boolean literal
let isStudent = true;
console.log(isStudent);

let isEmployed = false;
console.log(isEmployed);

// Object literal
let person = {
    name: "John",
    age: 25
};
console.log( person);


// Array literal
let numbers = [1, 2, 3, 4, 5];
console.log( numbers);


// Function literal


// Null literal
let emptyValue = null;
console.log(emptyValue);    


// Undefined literal
let undefinedValue;
console.log(undefinedValue);   


// Symbol literal
let symbol = Symbol("mySymbol");
console.log(symbol);

// BigInt literal
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);   


//Template literals
let candidate = 'Anil Rathod';
let role = "Test engg";
console.log(`In first round Candidate ${candidate} is selected for Role ${role}`)




