function Person (name, city, age){
    this.name = name;
    this.city = city;
    this.age = age;
    }
    Person.prototype.country = "Bharat";
    const jenny = new Person ("Jenny","Pune", 30);
    console.log(`${jenny.name}, ${jenny.city}, ${jenny.age}, ${jenny.country}`);
    const bill = new Person ("Bill","Mumbai", 35);
    console.log(`${bill.name}, ${bill.city}, ${bill.age}, ${bill.country}`);
    const stew = new Person ("Stew", "Delhi", 25);
    console.log(`${stew.name}, ${stew.city}, ${stew.age}, ${stew.country}`);
    const elon = new Person ("Elon", "Chennai", 40);
    console.log(`${elon.name}, ${elon.city}, ${elon.age}, ${elon.country}`);
    // instanceof
    const result = jenny instanceof Person;
    console.log(result);
