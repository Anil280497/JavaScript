let temp = 30;
let weather =
    (temp > 40) ? "Very hot" :
        (temp > 30) ? "Hot" :
            (temp > 20) ? "warm" :
                (temp > 10) ? "Cool" : "Cold";
console.log(`Todays Temperature is ${temp} and it feels ${weather}`)
