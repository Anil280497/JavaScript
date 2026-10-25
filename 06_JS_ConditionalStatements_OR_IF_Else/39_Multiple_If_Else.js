// Write a multiple_if_else program for Grade A-F

let score = 99;

if (score > 90) {
    console.log(`Score : ${score}, Grade : A , Perfomance : Excellence `);
}
else if (score > 80 && score <= 90) {
    console.log(`Score : ${score}, Grade : B , Perfomance : Very Good `);
}
else if (score > 70 && score <= 80) {
    console.log(`Score : ${score}, Grade : C , Perfomance : Good `);
}
else if (score > 60 && score <= 70) {
    console.log(`Score : ${score}, Grade : D , Perfomance : Average `);
}
else if (score > 50 && score <= 60) {
    console.log(`Score : ${score}, Grade : E , Perfomance : Need progress `);
}
else {
    console.log(`Score : ${score}, Grade : F , Perfomance : FAIL `);
}
