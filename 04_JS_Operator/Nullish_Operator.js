// nullish coalescing operator (??) in JavaScript is used to provide default values only 
// when a variable is null or undefined
// Returns defaultValue only if value is null or undefined

let  amul = null;
let value = amul ?? "NANDANI MILK" ;  //value - amul ?? defaultValue- NANDINI MILK
console.log(value);



let api_response = null
let response = api_response ?? "{}";
console.log(response);