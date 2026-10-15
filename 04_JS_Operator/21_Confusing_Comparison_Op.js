// == -> losse comparsion   ( it check only value, not data type )
console.log (10 == 10 );     // true
console.log (10 == 20 );     // false
console.log ('5' == '5');    // true
console.log ('5' == 5);      // true, because it will convert string to number and then compare` 
console.log (null == 'user') // false
console.log ('' == 0)        // true , "" coerced to Number → 0
console.log ('0' == 0)       // true, "0" coerced to Number → 0
console.log ('' == '0')      // false , both datatype is same hence ("" coerced to Number → 0) this correction will not happen here


// === -> Strict comparsion (it checks value and data types)
 
console.log(10 === 10);          // true
console.log(20 === 10);          // false
console.log("Rahul" === "Rahul") // true
console.log("20" === 20)         // false
console.log ('' === 0)           // false
console.log ('0' === 0)          // false
console.log ('' === '0')         // false


// !=   (compair value only , not data type)

console.log('Ball' != 'Bat')  //  true
console.log('Ball' != 'Ball') //  false
console.log('50' != 40)       // true       // here is data type is different but value is same 
console.log('50' != 50)       //false

// !==  (compair value and data type )
console.log(5 !== 5)    //false
console.log(5 !== 10)   //true