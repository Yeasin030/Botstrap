<<<<<<< HEAD

        function hi(name) {
           return "hai " + name;
        }
        
=======
<<<<<<< HEAD
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

=======
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

>>>>>>> f767a8a1c7ef7ec52d55ad02347079c91d58ae40
console.log(`Execution time: ${timeTaken} milliseconds`);
>>>>>>> e7e98957b9feda7ab3ce1d821fb4e5745f43ce7a
