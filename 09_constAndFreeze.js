const person = {
    name: "Amit",
    city: "Pune",
    experience:10,
}
console.log(person);

person.city ="Mumbai";
console.log(person);

const address = {
    flatNumber: 1005,
    wing: "B2 Block",
    street: "Wakad",
}
console.log(address);

Object.freeze(address);
address.street="Kharadi";//Wont reflect the changes as object is freezed
console.log(address);

//in operator

const result="street" in address;
console.log(result);
console.log("pin" in address);

//Get the key from an object

const keys= Object.keys(address);
console.log(keys);

//Get the values from an object

const values=Object.values(address);
console.log(values);
