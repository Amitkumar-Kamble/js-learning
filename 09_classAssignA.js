console.log(`=====Step1=====`);
class Vehicle {  
    constructor(company, model, year, color, type) {  
        this.company = company;  
        this.model = model;
        this.year = year;
        this.color = color;
        this.type = type;
    }
    
    display() {  
        console.log(`Vehicle Details => Company: ${this.company}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Type: ${this.type}`);
    }
}

const bike = new Vehicle ("Hero", "Spendor", 2020, "Black", "Bike" );
bike.display();
const car1 = new Vehicle ("Nissan", "Altima", 2015, "White", "Sedan");
car1.display();
const bus = new Vehicle ("Eicher Bus", "Skyline Pro", 2022, "Yellow", "School Bus");
bus.display();
const car2 = new Vehicle ("Mahindra", "Thar", 2021, "Black", "SUV");
car2.display();
const truck = new Vehicle("Ford", "F-150", 2019, "Blue", "Pickup Truck");
truck.display();

console.log(`=====Traversing Array Objects=====`);
const arrayOfVehicles = [bike, car1, bus, car2, truck];
for(const vehicle of arrayOfVehicles){
    vehicle.display();
}

console.log(`=====Step2=====`);
class College {
    constructor(name, location, establishedYear, studentsCount) {
        this.name = name;  // Name of the college
        this.location = location;  // Location of the college
        this.establishedYear = establishedYear;  // Year the college was established
        this.studentsCount = studentsCount;  // Student Count
    }

    display() {
        console.log(`College Details => Name: ${this.name}, Location: ${this.location}, Established: ${this.establishedYear}, No. of Students: ${this.studentsCount}`);
    }
}

// Create instances of the College class
const iitBombay = new College("IIT Bombay", "Mumbai", 1958, 10000);
iitBombay.display();

const iitDelhi = new College("IIT Delhi", "Delhi", 1961, 9000);
iitDelhi.display();

const iitKharagpur = new College("IIT Kharagpur", "Kharagpur", 1951, 12000);
iitKharagpur.display();

const iitMadras = new College("IIT Madras", "Chennai", 1959, 8000);
iitMadras.display();
