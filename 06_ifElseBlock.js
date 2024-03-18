/*var person = "Raman";
var age = 10;
// Voting age should be greater than 18
if (age>=18) {
    console.log(`Yes, please vote: ${age}, Name: ${person}`);
} else 
{
    console.log(`You are not eligible for vote, your age is: ${age}`);
} */

console.log(`==========================`);
function vote(person, age){
    if (age>=18) {
        console.log(`Yes, please vote: ${age}, Name: ${person}`);
    } else 
    {
        console.log(`You are not eligible for vote, your age is: ${age} Name: ${person}`);
}
}
vote("Jenny", 34);
vote("Bill", 14);
vote("Elon", 18);
