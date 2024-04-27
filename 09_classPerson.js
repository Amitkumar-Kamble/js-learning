class Person {
    constructor(name, city, age){
    this.name=name;
    this.city=city;
    this.age=age;
    }
    detail(){
        console.log(`Person Details => Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);
    }
}

const jenny = new Person ("Jenny","Pune",22);
jenny.detail();
const bill= new Person("Bill","Mumbai", 24);
bill.detail();
const elon=new Person("Elon", "Delhi", 38);
elon.detail();

console.log(`=====Traversing Array Object=====`);
const people = [jenny, bill, elon];


for (const person of people) {  
    person.detail();  
}

//File Name: 09_classStudent.js
//Class name -> Student
//Data Member: Roll Number, Name, Division
//Member Function: getDetail()
//Create 3 Objects from student