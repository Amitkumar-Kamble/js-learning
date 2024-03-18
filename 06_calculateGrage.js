//Grade calculation 
//Pass or fail ==> Marks <=34 Fail else Pass
// if marks greater than or equal to 35 and less than 55 == Grade C
//if marks greater than or equal to 55 and less than 75 == Grade B
//if marks greater than or equal to 75 and less than 100 == Grade A

var marks = 90;

if (marks < 35) {
    console.log(`Fail, Marks: ${marks}`);
} else if (marks >= 35 && marks < 55) {
    console.log(`Congratulations! Pass, Marks: ${marks}`);
    console.log(`Grade: C`);
} else if (marks >= 55 && marks < 75) {
    console.log(`Congratulations! Pass, Marks: ${marks}`);
    console.log(`Grade: B`);
} else if (marks >= 75 && marks <= 100) {
    console.log(`Congratulations! Pass, Marks: ${marks}`);
    console.log(`Grade: A`);
} else {
    console.log(`Invalid Marks`);
}


function gradeCalculation(marks){
if (marks==null || marks<=0 || isNaN(+marks)) {
    console.log(`Invalid Input: ${marks}`);
} else {
    console.log(`Valid Input: ${marks}`);
}
}
gradeCalculation(null);
gradeCalculation(0);
gradeCalculation(-20);
gradeCalculation("Seventy");
gradeCalculation("70");
