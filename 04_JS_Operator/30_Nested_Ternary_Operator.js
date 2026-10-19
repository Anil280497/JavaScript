
// Student_Age >= 18 --> Can go to Goa
// Student_Age >=24  --> Can Drink

let Student_Age = 17;
let eligibility = (Student_Age >= 18) ? (Student_Age >= 24 ? "Eligible for Goa tour With Drink" : "only eligible for goa tour") :
    "not eligible for Goa tour";
console.log(eligibility)


// Nested Ternary
// Multiple Conditions
// age = 26
// age > 18 -> Go Goa, age > 25 -> Drink

let age = 26;

let is_pramod_enjoy = (age > 18) ? (age > 25 ? "Goa & Drink" : "No Drink,ONly Goa") : "No Goa";
console.log(`Pramod can Enjoy ${is_pramod_enjoy}`);