let score = 30;

if (score < 0 || score > 100) {
    console.log("Invalid marks")
}
else {
    if (score >= 90) {
        console.log(`Score : ${score}, Grade : A , Perfomance : Excellence `);
    }
    else if (score >= 80 && score <= 89) {
        console.log(`Score : ${score}, Grade : B , Perfomance : Very Good `);
    }
    else if (score >= 70 && score <= 79) {
        console.log(`Score : ${score}, Grade : C , Perfomance : Good `);
    }
    else if (score >= 60 && score <= 69) {
        console.log(`Score : ${score}, Grade : D , Perfomance : Average `);
    }
    else if (score <= 59) {
        console.log(`Score : ${score}, Grade : E , Perfomance : Need progress `);
    }
    else {
        console.log(`Score : ${score}, Grade : F , Perfomance : FAIL `);
    }

}