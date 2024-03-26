console.log(`==========Given Array is==========`);
 const fruits_seasonal8 = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
console.log(fruits_seasonal8);

console.log(`==========Step1 - First & Last element of an array==========`);
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
const firstElement = fruits_seasonal[0];
const lastElement =fruits_seasonal[fruits_seasonal.length-1];
console.log(`First element of the array is ${firstElement} & last element of the array is ${lastElement}`);

console.log(`==========Step2 - Adding element at first position of an array==========`);
const subArray1 = fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`==========Step3 - Removing "Mango" from an array==========`);
const fruits_seasonal2 = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
const subArray2 = fruits_seasonal2.splice(3,1);
console.log(fruits_seasonal2);

console.log(`==========Step4 - Add element Pineapple at last position==========`);
const fruits_seasonal3 = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
const subArray3 = fruits_seasonal3.push("Pineapple");
console.log(fruits_seasonal3);

console.log(`==========Step5 - Add "Dragon Fruit" before "Watermelon"==========`);
const fruits_seasonal4 = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
const subArray4= fruits_seasonal4.splice(4,0,"Dragon Fruit");
console.log(fruits_seasonal4);

console.log(`==========Step6 - Replace "Orange" with "Kiwi"==========`);
const fruits_seasonal5 = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
const subArray5= fruits_seasonal5.splice(1,1,"Kiwi");
console.log(fruits_seasonal5);

console.log(`==========Step7 - Log elements 1 to 4==========`);
const fruits_seasonal6 = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
const subArray6= fruits_seasonal6.slice(1);
console.log(subArray6);

console.log(`==========Step8 - Log last 3 elements using length property==========`);
const fruits_seasonal7 = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
const len = fruits_seasonal7.length;
const subArray7= fruits_seasonal7.slice(len-3);
console.log(subArray7);
