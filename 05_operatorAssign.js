console.log("================Step1===============");
function squareOfWordLength(arg1){
    var len = arg1.length;
    var squareOfLen = len *len;
    return squareOfLen;
}
var returnValue = squareOfWordLength("JavaScript");
console.log(`Square of length of "JavaSript" string is: ${returnValue}`);

var returnValue = squareOfWordLength("Google Chrome");
console.log(`Square of length of "Google Chrome" string is: ${returnValue}`);

var returnValue = squareOfWordLength("Developer Smart");
console.log(`Square of length of "Develoer Smart" string is: ${returnValue}`);

console.log("================Step2===============");

function show(){
    var sentence ="I am Angular Developer";
    var stringLength = sentence.length;
    var totalWords = sentence.split(" ");
    console.log(`String length is: ${stringLength}`);
    console.log(`Total words are: ${totalWords.length}`);
    console.log(`String length divided by total words is: ${stringLength/totalWords.length}`);

    console.log("================Step2===============");

    console.log(`String length is: ${stringLength}`);
    console.log(`Total words are: ${totalWords.length}`);
    console.log(`String length multiplied by total words is: ${stringLength*totalWords.length}`);


}
show();