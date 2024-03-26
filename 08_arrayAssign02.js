console.log(`==========Step1==========`);
console.log(`==========Length of an array==========`);
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const len = arrayNumbers.length
console.log(`Length of the array is: ${len}`);

console.log(`==========Step2==========`);
console.log(`==========First and last element of an array==========`);
const firstElement = arrayNumbers[0];
const lastElement = arrayNumbers[arrayNumbers.length - 1];
console.log(`First element of the array is ${firstElement} & last element of the array is ${lastElement}`);

console.log(`==========Step3==========`);
console.log(`==========Third last element of an array==========`);
const thirdLastElement = arrayNumbers[len - 3];
console.log(`Third last element of the array is: ${thirdLastElement}`);

console.log(`==========Step4==========`);
console.log(`==========Even elements of an array==========`);
for (const element of arrayNumbers) {
    if (element % 2 == 0) {
        console.log(element);
    }
}

console.log(`==========Step5==========`);
console.log(`==========Odd elements of an array==========`);
for (const element of arrayNumbers) {
    if (element % 2 !== 0) {
        console.log(element);
    }
}

console.log(`==========Step6==========`);
console.log(`==========Even positioned elements and their sum==========`);
const arrayNumbers3 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (let index = 0; index < arrayNumbers3.length; index++) {
    if (index % 2 == 0) {
        const element = arrayNumbers3[index];
        console.log(element);
    }
}

let sumEvenPositioned = 0;
for (let index = 0; index < arrayNumbers.length; index += 2) {
    sumEvenPositioned += arrayNumbers[index]; 
}
console.log(`Sum of even-positioned elements is ${sumEvenPositioned}`);

console.log(`==========Step7==========`);
console.log(`==========Odd positioned elements and their sum==========`);

for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 !== 0) {
        const element = arrayNumbers[index];
        console.log(element);
    }
}
const arrayNumbers4 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let sumOddPositioned = 0;
for (let index = 1; index < arrayNumbers4.length; index += 2) {
    sumOddPositioned += arrayNumbers4[index]; 
}
console.log(`Sum of even-positioned elements is ${sumOddPositioned}`);

console.log(`==========Step8==========`);
console.log(`==========Sun of all elements of an array==========`);
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum = sum + element;
}

console.log(`sum of even elements of an  array is ${sum}`);

console.log(`==========Ste9==========`);
console.log(`==========Multiple of 5==========`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 5 == 0) {
        console.log(element);
    }
}

console.log(`==========Step10==========`);
console.log(`==========Is 115 Available ==========`);
const is115Available = arrayNumbers.includes(115);
console.log(is115Available); 

console.log(`==========Step11==========`);
console.log(`==========Is 23 Available ==========`);
const is23Available = arrayNumbers.includes(23);
console.log(is23Available); 

console.log(`==========Step12==========`);
console.log(`==========Insert 55,66 at index 3==========`);
const deleteElements2 = arrayNumbers.splice(3,0,55,66);
console.log(deleteElements2);
console.log(arrayNumbers);

console.log(`==========Step13==========`);
console.log(`==========Delete 3 elements from index 4==========`);
const arrayNumbers2 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const deleteElements = arrayNumbers2.splice(4,3);
console.log(deleteElements);
console.log(arrayNumbers2);