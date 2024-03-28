let person = {
    name: "Alex",
    city: "Pune",
    experience: 10,
};

console.log(person);
console.table(person);
console.log(`Type of person is: ${typeof person}`);

console.log(`==========Accessing object properties==========`);

let personCity = person["city"]; // [] notation
console.log(`Person City is: ${personCity}`);
const personExp = person.experience; // Dot notation
console.log(`Person experience is: ${personExp}`);

console.log(`==========Adding properties to Object==========`);
person.isMarried = true;
console.log(person);

console.log(`==========Delete properties to Object==========`);
delete person.experience;
console.log(person);

console.log(`==========Creating an empty Object==========`);
let address = {};
person.pin = 11233;
console.log(person); // Note: address is still empty, so we log person to see the added pin

const bankSbi = {
    name: "SBI Bank Wakad",
    city: "Pune",
    totalStaff: 90,
    homeLoanROI: 9.5,
    bankDetail: function() {
        console.log(`Name: ${this.name}, City: ${this.city}, totalStaff: ${this.totalStaff}, Home loan ROI: ${this.homeLoanROI}`);
    }   
};


bankSbi.bankDetail();

console.log(`==========Nested Object==========`);
const jennyPerson = {
    name: "Jenny",
    age: 25,
    country: "USA",
    address2: {
        flatNo: 405,
        floor: 4,
        street: "Bergen Road",
        city: "LA",
        state: "ABC",
        getAddress: function() {
           
            console.log(`Flat Number: ${this.flatNo}, Floor Number: ${this.floor}, Street: ${this.street}, City: ${this.city}, State: ${this.state}`);
        return address;
        }
    }
};

// Calling getAddress to log Jenny's address
jennyPerson.address2.getAddress();

console.log(`Type of jennyPerson: ${typeof jennyPerson}`);
console.log(`Type of Address: ${typeof address}`);
console.log(`City: ${jennyPerson.address2.city}`);
jennyPerson.address2.state = "XYZ"; // This line correctly updates the state
console.log(`Updated State: ${jennyPerson.address2.state}`);

console.log(`==========Jenny Complete Address to Courier is`);
const jennyAddress = jennyPerson.address2.getAddress();
console.log(jennyAddress);
