function factorialOfNum(num) {

    if (num === null || num === undefined || isNaN(num)) {
        console.log('Invalid input');
        return null;
    }


    if (!Number.isInteger(num) || num < 0) {
        console.log('Please enter a positive number');
        return null;
    }


    if (num === 0 || num === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}


console.log(`The factorial of 5 is: ${factorialOfNum(5)}`);
console.log(`The factorial of 3 is: ${factorialOfNum(3)}`);
console.log(`The factorial of null is: ${factorialOfNum(null)}`);
console.log(`The factorial of undefined is: ${factorialOfNum(undefined)}`);
console.log(`The factorial of 8 is: ${factorialOfNum(8)}`);
console.log(`The factorial of 9 is: ${factorialOfNum(9)}`);
console.log(`The factorial of 0 is: ${factorialOfNum(0)}`); 
