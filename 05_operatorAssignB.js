console.log("==========Step1: Greater number among two numbers==========");
function greaterNumber(arg1, arg2){
    var n1 = arg1;
    var n2 = arg2;
    var result = arg1 > arg2 ? arg1:arg2;
    console.log(`Greater number among 10 & -10 is:  ${result}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("========== Step2: EVEN or ODD Number ==========");

function evenOrOdd(num1){
var num = num1;
var result = num1 % 2 == 0 ? "Even Number": "Odd Number";
console.log(`${num1} is a ${result}`);
}
evenOrOdd(29);
evenOrOdd(44);
evenOrOdd(0);
evenOrOdd(101);

console.log("========== Step3: EVEN or ODD Word Length ==========");

function wordLength(arg1,){
    var word = arg1;
    var result =word.length % 2 == 0 ? `"${word}" word length is: EVEN`: `"${word}" word length is: ODD`;
    console.log(`${result}`);
}
wordLength("Javascript");
wordLength("developer");
wordLength("Google");
