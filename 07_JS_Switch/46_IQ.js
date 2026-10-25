let testScore  = 59;

switch(true){
    case (testScore <= 100 && testScore >= 90):
    console.log(`you score : ${testScore} ,Excellence`);
    break;

     case (testScore >=80):
    console.log(`you score : ${testScore},Very Good`);
    break;

     case (testScore >=70):
    console.log(`you score : ${testScore},Good`);
    break;

     case (testScore >=60):
    console.log(`you score : ${testScore},Average`);
    break;

     case (testScore >=35):
    console.log(`you score : ${testScore},Moderate`);
    break;

    default:
        console.log("FAIL")
}