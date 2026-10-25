//Javascript is not created to take user input
//but still there are way to take input using nodejs function or method


// This code will not work here , because promt is not define 
// this code will work in browser

let num = promt("Enter a number");
 num = Number(num); //convert string to number 

if(num % 2 === 0){
    console.log(`${num} is a Even Number`)
}
else{
    console.log(`${num} is a Odd number`) 
}