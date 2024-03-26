const set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(10);
set.add(50);
console.log(set);
console.log(`==========Total size of the set===========`);
console.log(`Total elements in set:${set.size}`);

console.log(`==========Delete an element from Set===========`);
set.delete(30);
console.log(set);

console.log(`==========Check whether element is available or not===========`);
console.log(`${set.has(50)}`);
console.log(`${set.has(100)}`);
const is200Available = set.has(200);
console.log(`${set.has(200)}`);

console.log(`==========Traversing Set===========`);
for (const element of set) {
 console.log(element);   
}