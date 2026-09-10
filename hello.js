const startTime = performance.now();

// ... code you want to measure ...
const numbers = [10, 20, 30];
let maxNumber = numbers[0];
let minNumber = numbers[0];

for (const number of numbers) {
    if (number > maxNumber) {
        maxNumber = number;
    }

    if (number < minNumber) {
        minNumber = number;
    }
}

console.log("The maximum number is: " + maxNumber);
console.log("The minimum number is: " + minNumber);

const endTime = performance.now();
const timeTaken = endTime - startTime;

console.log(`Execution time: ${timeTaken} milliseconds`);