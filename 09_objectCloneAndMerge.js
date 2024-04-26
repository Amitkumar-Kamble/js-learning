const person = {
    name: "Amit",
    city: "Pune",
    experience:10,
}
console.log(person);

//Cloning an object using Spread Operator

const personClone={...person};
console.log(person);

personClone.name="Elone";
console.log(personClone);

//Cloning an Object using Object.assign() method
console.log("======Cloning an Object using assign() method=====");
const cloneObject=Object.assign({}, person);
console.log(cloneObject);

//Merging an Object

console.log("=====Merging an Object=====");
const personAK = {
    name: "Amit K",
    city: "Pune",
    experience:10,
}
const address = {
    flatNumber: 1005,
    wing: "B2 Block",
    street: "Wakad",
}

const mergeObject=Object.assign({},personAK, address);
console.log("=====mergeObject=====");
console.table(mergeObject);

console.log("=====personAK=====");
console.table(personAK);