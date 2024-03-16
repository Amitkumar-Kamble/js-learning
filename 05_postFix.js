var a=5;
var b=a++;
console.log(a,b);

var n1 = 5;
var res = n1++ + ++n1 + n1++;
console.log(`a is ${a} Result is ${res}`);

var a =2;
var res= ++a + ++a + a++ - --a;
console.log(`a is ${a} Result is ${res}`);

var a = 4;
var res = a-- + ++a + ++a + a++; 
console.log(`a is ${a} Result is ${res}`);