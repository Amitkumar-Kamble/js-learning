var arrayNumbers = [2,4,1,7,9,8];
console.log(`==========Original Array==========`);
console.log(arrayNumbers);

console.log(`==========Removing or Deleting last element==========`);
arrayNumbers.pop()
console.log(arrayNumbers);

console.log(`==========Add or insert element in the last==========`);
var arrayNumbers = [2,4,1,7,9,8];
arrayNumbers.push(100);
console.log(arrayNumbers);

console.log(`==========Add or insert element in the 0th position==========`);
var arrayNumbers = [2,4,1,7,9,8];
arrayNumbers.unshift(44);
console.log(arrayNumbers);

console.log(`==========Remove 0th index element==========`);
var arrayNumbers = [2,4,1,7,9,8];
arrayNumbers.shift();
console.log(arrayNumbers);

console.log(`==========Slice==========`);
var arrayNumbers = [2,4,1,7,9,8,11,22];
const subArrayNew = arrayNumbers.slice(3,5);
console.log(subArrayNew);


const subArrayNew2 = arrayNumbers.slice(5);
console.log(subArrayNew2);




console.log(`==========Remove or delete middle of array==========`);
var arrayNumbers = [2,4,1,7,9,8,11,22];
const deleteElements = arrayNumbers.splice(2,3);
console.log(deleteElements);
console.log(arrayNumbers);

console.log(`========== Add or insert element middle of array==========`);
var arrayNumbers = [2,4,1,7,9,8,11,22];
const deleteElements2 = arrayNumbers.splice(3,1,100);
console.log(deleteElements2);
console.log(arrayNumbers);

console.log(`========== Add or insert element middle of array==========`);
var arrayNumbers = [2,4,1,7,9,8,11,22];
const insertElement = arrayNumbers.splice(5,0,200);
console.log(insertElement);
console.log(arrayNumbers);

