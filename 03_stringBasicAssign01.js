console.log(`==========Step1==========`);
function stringBasics(){
    var dreamCompany = "Oracle"
    console.log(`My dream company is: ${dreamCompany}`);
}
stringBasics();
console.log(`==========Step2==========`);

function stringTemplate(){
var myHobby1 = "Reading Books ";
var myHobby2 = "Playing Chess ";
var myHobby3 = "Travelling";
console.log(`My hobbies are: 1.${myHobby1}  2.${myHobby2}  3.${myHobby3}`);

console.log(`==========Concate Strings==========`);

var res = myHobby1.concat(myHobby2,myHobby3);
console.log(`Result of these three strings after concate is: ${res}`);

console.log(`==========Step3==========`);
var totalChars1 = myHobby1.length;
var totalChars2 = myHobby2.length;
var totalChars3 = myHobby3.length;
var result = totalChars1+totalChars2+totalChars3;
console.log(`Sum of total chars in ${myHobby1}, ${myHobby2} & ${myHobby3} is: ${result}`);
}
stringTemplate();