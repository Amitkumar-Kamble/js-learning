console.log("==========Step1==========");
function stringHandsOn(){
var message ="   Hey you are doing good, keep it up   ";
console.log(`Given String is: ${message}`);

console.log("==========Step2==========");
var len = message.length;
console.log(`Length of the given string is: ${len}`);

console.log("==========Step3==========");
var stringAfterTrim = message.trim();
var len2 = stringAfterTrim.length;
console.log(`String after trim is: ${stringAfterTrim} & its length is ${stringAfterTrim.length}`);

console.log("==========Step4==========");
console.log(`Total no of spaces removed are: ${len-len2}`);

console.log("==========Step5==========");
console.log(`First & Last characters of string after trim are: ${stringAfterTrim.charAt(0)} & ${stringAfterTrim.charAt(len2-1)}`);

console.log("==========Step6==========");
var totalWordsAfterTrim = stringAfterTrim.split(" ");
console.log(`Total no of words in string after trim are: ${totalWordsAfterTrim.length}`);

console.log("==========Step7==========");
var indexOfGood = stringAfterTrim.indexOf("good");
console.log(`Index of "good" is: ${indexOfGood}`);

console.log("==========Step8==========");
var subString22 = stringAfterTrim.substring(22);
console.log(`Substring starting from 22 using Substring Method is: ${subString22}`);
var subString = stringAfterTrim.slice(22);
console.log(`Substring starting from 22 using Slice Method is: ${subString}`);

console.log("==========Step9==========");
var endsWithUp = stringAfterTrim.endsWith("up");
console.log(`Is string ends with word "up" : ${endsWithUp}`);

console.log("==========Step10==========");
var startsWithUp = stringAfterTrim.startsWith("Hey");
console.log(`Is string stars with word "Hey" : ${startsWithUp}`);

}
stringHandsOn()