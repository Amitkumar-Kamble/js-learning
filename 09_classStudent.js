class Student {
    constructor(name, rollNumber, division){
    this.name=name;
    this.rollNumber=rollNumber;
    this.division=division;
    }
    detail(){
        console.log(`Student Details => Name: ${this.name}, Roll Number: ${this.rollNumber}, Division: ${this.division}`);
    }
}

const jenny = new Student ("Jenny", 1, "A");
jenny.detail();
const bill= new Student("Bill", 24, "B");
bill.detail();
const elon=new Student("Elon", 38, "C");
elon.detail();
