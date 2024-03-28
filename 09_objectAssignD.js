console.log(`==========Step 1 - Add 5 properties to Object==========`);
let professor = {
    name: "Amit",
    age: "25",
    city: "Pune",
    country: "India",
    isMarried: false,
    qualification:{
        engineering: "CSC",
        PHD: "Advanced Computing",
        passingYear: 2020,
        specialSubject: "Java",
        certificates: ["Hacker Rank Participation","Certification in IFE Course","Certification in Advanced Programming"],
    }
    
}
professor.totalExp = "14 Years";
console.log(professor);

console.log(`==========Step 2 - Nested Object==========`);
console.log(professor.qualification);

console.log(`==========Step 3 - Adding Array "certificates"==========`);
console.log(professor.qualification.certificates);

console.log(`==========Step 4 - Adding new property "Total Experience==========`);
console.log(`Total Experience is: ${professor.totalExp}`);

console.log(`==========Step 5 - Modify property "city"==========`);
console.log(`==========Professor city before modify==========`);
console.log(professor.city);

professor.city = "Mumbai"

console.log(`==========Professor city after modify==========`);
console.log(professor.city);

console.log(`==========Step 6 - Add new certificate at 2nd index in an array "certificates"==========`);
professor.qualification.certificates.splice(2, 0, "Oracle Certified");
console.log(professor.qualification.certificates);

console.log(`==========Step 7 - Log elements of array "certificates"==========`);
const len = professor.qualification.certificates.length
console.log(`Last element of the array is: ${professor.qualification.certificates[len-1]}`);

console.log(`==========Step8 - Log complete Object==========`);
console.log(professor);

console.log(`==========Step 9 - Traverse array "certificates" using For loop==========`);
const certificates = professor.qualification.certificates;
for (let i = 0; i < certificates.length; i++) {
    console.log(certificates[i]); 
}
