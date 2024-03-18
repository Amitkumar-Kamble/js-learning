/*var age = 23;
var candidateName = "Bill Gates";
if (age = 21){
    console.log (`Eligible for marriage: ${age}, ${candidateName}`);
}
console.log(`==========`);*/

/*var marriageCheck  = function (age, candidateName){
    if (age>=21){
        console.log (`Eligible for marriage, Age: ${age}, Name: ${candidateName}`);
       }
    console.log(`Marriage Eligibility Check Done`);
}
marriageCheck (23, "Bill");
marriageCheck(21, "Steve");
marriageCheck(29, "Mark");
console.log(`==========`); */

//Using & 

var marriageEligibility = function(age, candidateName, gender){
    if (age>=21 && gender == "male"){
        console.log (`Eligible: Age: ${age}, Name: ${candidateName}, Gender: ${gender}`);
       }
    console.log(`Marriage Eligibility Check Done`);
}
marriageEligibility (23, "Bill", "male");
marriageEligibility (21, "Jenny", "female");
marriageEligibility (29, "Mark", "male");