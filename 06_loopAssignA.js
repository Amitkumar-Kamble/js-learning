console.log(`==========Step1==========`);
const word = "I am very good IT Developer";
const vowels = "aeiou";
let vowelsCount = 0;
for (let index = 0; index < word.length; index++) {
    let char = word.charAt(index);
    let lowerCase = char.toLowerCase();
    if (vowels.includes(lowerCase)) {
        vowelsCount++;
    }
}
console.log(`Total number of Vowels in string "${word}" are: ${vowelsCount}`);

console.log("==========Step2==========");

let sum = 0;
for (let index = 0; index <= 5; index++) {
    sum = sum + index * index * index;
}
console.log(`Sum of cubes of numbers from 1 to 5 is: ${sum}`);

console.log("==========Step3A-Odd positioned chars in given string==========");

function oddPositionedChars(word){
    for (let index = 0; index < word.length; index++) {
        const element = word.charAt(index);
        if (index%2!=0 && element !=" " ) {
            console.log(element);
        }
        }
}
oddPositionedChars("Hard work always pays back");

console.log("==========Step3B-Odd positioned chars in given string==========");

function oddPositionedChars(word){
    for (let index = 0; index < word.length; index++) {
        const element = word.charAt(index);
        if (index%2!=0 && element !=" " ) {
            console.log(element);
        }
        }
}
oddPositionedChars("Soon I will be UI IT Champ");