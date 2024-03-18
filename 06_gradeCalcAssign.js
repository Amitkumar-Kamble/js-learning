function gradeCalculation(marks) {
    if (marks <= 0 || marks > 100 || isNaN(+marks)) {
        console.log(`Please provide valid Marks: ${marks}`);
    } else if (marks > 90) {
        console.log(`Fantastic Marks: ${marks}, your grade is A+`);
    } else if (marks >= 75 && marks <= 90) { 
        console.log(`Excellent Marks: ${marks}, your grade is A`);
    } else if (marks >= 50 && marks < 75) {
        console.log(`Good Marks: ${marks}, your Grade is B`);
    } else if (marks >= 35 && marks < 50) {
        console.log(`Marks are: ${marks}, your Grade is C - needs improvement.`);
    } else {
        console.log(`Marks are: ${marks}, Fail - better luck next time.`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);
