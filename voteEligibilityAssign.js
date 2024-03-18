
var voteEligible = function gradeCalculation(age){
    if (age>130 || age<=0 || age==null) {
        console.log(`Invalid Input: ${age}`);
    } else if(age<18){
        console.log(`Not eligible for vote, age is: ${age}`);
    }
else if(age>18){
    console.log(`Eligible for vote, age is: ${age}`);
}
    }
    voteEligible(45);
    voteEligible(17);
    voteEligible(8);
    voteEligible(20);
    voteEligible(-10);
    voteEligible(200);
    voteEligible(0);
    voteEligible(undefined);
    voteEligible(null);