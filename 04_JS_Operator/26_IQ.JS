
let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");

let fruit = "Mango";
let Juice = ""
let Bewrage = (Juice == fruit)? "want juice" : "want Coffe";
console.log("I" + Bewrage);