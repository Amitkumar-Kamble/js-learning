var word = "JavaScript";
for (let index = 0; index < word.length; index++){
    var element = word.charAt(index);
    console.log(element);
}

console.log(`=========WAP to count char a==========`);
var word ="JavaScript";
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index);
    if (char == "a") {
        count = count+1;
        }
}
console.log(`Count is ${count}`);
