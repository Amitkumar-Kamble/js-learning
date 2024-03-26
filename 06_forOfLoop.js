const arrayNumbers = [2,4,1,7,9,8];
for (const element of arrayNumbers) {
    console.log(element);
}

let sum=0;
for (const element of arrayNumbers) {
    sum=sum+element;
    }
console.log(`${sum}`);

let multiplication=1;
for (const element of arrayNumbers) {
    multiplication=multiplication*element;
    }
    console.log(`${multiplication}`);

    console.log(`==========strings in array as a elements==========`);
var friendList = ["Jenny","Bill","Andy","Elon"];
for (const element of friendList) {
    console.log(element);
}
console.log(friendList);

const elements = friendList.join(",");
console.log(elements);

const elements2 = friendList.join("=");
console.log(elements2);