var greet ="Good Morning";
var totalChars = greet.length;
console.log("Total no. of characters are:", totalChars);

var charAt0 = greet.charAt(0);
console.log("Character at 0 position is:", charAt0);

var charAt6 = greet.charAt(6);
console.log("Character at 0 position is:", charAt6);

var charAt11 = greet.charAt(11);
console.log("Character at 0 position is:", charAt11);

var sentence = "Today is Thursday, I went to office early morning";
var totalChars = sentence.length;
var lastChar =sentence.charAt(totalChars-1);
console.log("Last Character is:", lastChar);

//indexOf

console.log("=============Indexof() Method===========")
var greet="Good Morning";
var indexofM = greet.indexOf("M");
console.log("Index of character M is:",indexofM);

//concat
console.log("=============concat()===========")
var firstName = "Amitkumar";
var lastName = " Kamble";
var result = firstName.concat(lastName);
console.log("My Full Name is:",result);

//Replace
console.log("=============Replace()===========")
var greet=("Good Morning");
var afterReplace=greet.replace("Morning","Afternoon");
console.log(`After replace string is ${afterReplace}`);

//In Upper Case
console.log("=============toUpperCase()===========")
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in Upper Case is: ${greetInUpperCase}`);

//In Lower Case
console.log("=============toUpperCase()===========")
var greet = "Good Morning";
var greetInLowerCase = greet.toLowerCase();
console.log(`${greet} in Upper Case is: ${greetInLowerCase}`);

//Trim

console.log("===================Trim()===================")
var greet = "   Good Morning   ";
var lengthBeforeTrim= greet.length;
console.log(`${greet} Strin length before trim is ${lengthBeforeTrim}`);

var greetAfterTrim=greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(`${greet} String length after trim is ${lengthAfterTrim}`);

console.log(`Total spaces removed are ${lengthBeforeTrim - lengthAfterTrim}`);

//Includes

console.log("===================Includes()===================")
var greet ="Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes characters "nin" ? : ${result}`);

var result = greet.includes("MoR");
console.log(`Is string ${greet} includes characters "MoR" ? : ${result}`);

//Search

console.log("===================Search()===================")
var greet ="Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' avaialble at ${result}`);

var result = greet.search("r");
console.log(`'r' avaialble at ${result}`);

//Slice

console.log("===================Slice()===================")
var greet ="Good Morning";
var result = greet.slice(3,10);
console.log(`Slice is ${result}`);

//Split

console.log("===================Split()===================")
var greet ="Good Morning";
var resultValue = greet.split(" ");
console.log(resultValue);
console.log(`Total words are ${resultValue.length}`);

function totalWord(arg1){
var result = arg1.split(" ");
console.log(result);
console.log(`Total words are ${result.length}`);
}
totalWord("I am Happy Buddy");
totalWord("I am learning JS the language of Internet")

//With return value

function totalWord(sentence){
var words = sentence.split(" ");
    var totalWords = words.length;
    return totalWords;
   }
   var totalWords = totalWord("I am Happy Buddy");
console.log(`"I am Happy Buddy" total number of words are: ${totalWords}`);

var totalWords = totalWord ("I am learning JS the language of Internet");
console.log(`"I am learning JS the language of Internet" total number of words are: ${totalWords}`);



