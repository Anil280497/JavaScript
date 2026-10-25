// This code will run for infinite time 
// let age = 1;
// while(true){
//  console.log("age is" + age);
//  age++;
// }
//----------------------------------------------------------------

let age = 16;
while (true) {

    if (age >= 18 && age <= 24) {
        console.log(`Student who's age is ${age} is eligible for Tour`);
        break;
    } else {
        console.log("not eligible");
    }
    age++;
}

// Output
// not eligible
// not eligible
// Student who's age is 18 is eligible for Tour

