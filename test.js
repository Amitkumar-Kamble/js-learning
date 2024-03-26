const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let sumEvenPositioned = 0;

// Using a for loop, starting from index 1 (for the second element, which is the first even-positioned element in 1-based indexing)
for (let index = 0; index < arrayNumbers.length; index += 2) {
    sumEvenPositioned += arrayNumbers[index]; // Add even-positioned elements (in 1-based indexing) to sum
}

console.log(`Sum of even-positioned elements is ${sumEvenPositioned}`);
