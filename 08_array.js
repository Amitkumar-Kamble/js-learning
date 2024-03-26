var arrayNumbers = [2,4,1,7,8,9];
console.log(arrayNumbers);

console.log(`==========Total elements or length=========`);
console.log(`${arrayNumbers.length}`);

console.log(`==========Accessing Array Elements=========`);
const element0 = arrayNumbers[0];
console.log(`O'th Element is Array is ${element0}`);
console.log(`3'rd Element is Array is ${arrayNumbers[3]}`);

console.log(`==========Accessing Arrays last element=========`);
const len = arrayNumbers.length;
console.log(`last element of the array is ${arrayNumbers[len-1]}`);

console.log(`==========Includes=========`);
console.log(`${arrayNumbers.includes(7)}`);
console.log(`${arrayNumbers.includes(5)}`);

console.log(`==========Update=========`);
arrayNumbers[2] =200;
console.log(arrayNumbers);

console.log(`==========IndexOf=========`);
console.log(`${arrayNumbers.indexOf(7)}`);
console.log(`${arrayNumbers.indexOf(5)}`);

console.log(`==========Traversing an array==========`);
const arrayNums = [2,4,1,7,9,8];
for (let index = 0; index < arrayNums.length; index++) {
    const element = arrayNums[index];
    console.log(element);
}

console.log(`==========Traversing an array in a reverse order==========`);
const arrayNums2 = [2,4,1,7,9,8];
for (let index = arrayNums2.length-1; index >= 0; index--) {
    const element = arrayNums2[index];
    console.log(element);
    
}
