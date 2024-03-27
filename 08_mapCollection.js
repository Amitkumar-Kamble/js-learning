let arrayMarks = [90,56,45,72,80,84];
let mapStudentMarks = new Map();
mapStudentMarks.set("Bill", 85);
mapStudentMarks.set("Elon", 90);
mapStudentMarks.set("Steve", 56);
mapStudentMarks.set("Jenny", 45);
mapStudentMarks.set("Ratan", 72);
mapStudentMarks.set("Andy", 89);
mapStudentMarks.set("Larry", 84);
mapStudentMarks.set("Ratan", 99); // Ratans marks will get over write by new value
console.table(mapStudentMarks);

const jennyMarks = mapStudentMarks.get("Jenny");
console.log(`Jenny Marks: ${jennyMarks}`);

const isAvailable =mapStudentMarks.has("Larry");
console.log(`Is key "Larry" available: ${isAvailable}`);

const isAvailable2 =mapStudentMarks.has("Sundar");
console.log(`Is key "Sundar" available: ${isAvailable2}`);

const totalElements = mapStudentMarks.size;
console.log(`Total number of elements in a map are ${totalElements}`);

mapStudentMarks.delete("Bill");
console.table(mapStudentMarks);

console.log(mapStudentMarks.keys());
console.log(mapStudentMarks.values());

console.log(`==========Keys() and Values() Method==========`);
const keys = mapStudentMarks.keys();
for (const iterator of keys) {
    console.log(iterator);
}

const values = mapStudentMarks.values();
for (const iterator of values) {
    console.log(iterator);
}

console.log(`==========Keys() and Values() Method==========`);
const KeysMap = mapStudentMarks.keys();
for (const key of KeysMap) {
    const value = mapStudentMarks.get(key);
    console.log(`Student Name: ${key} & marks ${value}`);
}