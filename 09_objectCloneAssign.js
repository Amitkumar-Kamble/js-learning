console.log("=====Step1=====");
const bankSbi = {
    name: "State Bank of India",
    branch: "Wakad, Pune",
    IFSC  : 1234,
    sector : "Public Sector",
}
console.log(bankSbi);

console.log("=====Step2=====");
const bankLocation = {
    street: "Main Road, Wakad",
    city: "Pune",
    pin: 411057,
}
console.log(bankLocation);

console.log("=====Step3=====");
//Cloning an Object using Object.assign() method
console.log("======Cloning an Object bankSbi using assign() method=====");
const cloneObject1=Object.assign({}, bankSbi);
console.log(cloneObject1);

console.log("======Cloning an Object bankLocation using assign() method=====");
const cloneObject2=Object.assign({}, bankLocation);
console.log(cloneObject2);

console.log("=====Step4=====");
const rateOfInterest = {
    homeLoanInterest: 8.50,
    personalLoanInterest: 10.50,
    dueInterest:5,
}
console.log(rateOfInterest);

console.log("=====Step5=====");
const sbiDetails=Object.assign({},bankSbi, bankLocation,rateOfInterest);
console.table(sbiDetails);

console.log("=====Step6=====");
for (const property in sbiDetails) {
    console.log(`${property}: ${sbiDetails[property]}`);
}
