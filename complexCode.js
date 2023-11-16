/** 
 * Filename: complexCode.js
 * Description: Complex JavaScript code that demonstrates various programming concepts and features.
 * Author: AI Developer
 * Date: 2022-01-01
 */

// Constants
const PI = 3.141592653589793;
const MAX_ATTEMPTS = 10;

// Variables
let counter = 0;
let result = 0;

// Objects and Arrays
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['coding', 'gaming', 'reading'],
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  }
};

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);

// Functions
function calculateArea(radius) {
  return PI * radius ** 2;
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { name: 'Alice', age: 25 };
      resolve(userData);
    }, 2000);
  });
}

// Loops and Conditionals
for (let i = 0; i < MAX_ATTEMPTS; i++) {
  if (i % 2 === 0) {
    counter++;
  } else {
    counter--;
  }
}

if (counter >= 5) {
  result = calculateArea(5);
} else {
  result = fibonacci(7);
}

// Event handling
document.getElementById('myButton').addEventListener('click', () => {
  console.log('Button clicked!');
});

// Destructuring
const { firstName, lastName, address: { city } } = person;

// Template literals
console.log(`Welcome, ${firstName} ${lastName} from ${city}! Your age is ${person.age}.`);

// Promises and async/await
async function fetchData() {
  try {
    const userData = await fetchUserData();
    console.log(userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

fetchData();

// Higher-order functions
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(operation, a, b) {
  return operation(a, b);
}

const sum = calculate(add, 2, 3);
const product = calculate(multiply, 4, 5);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);

// Complex algorithms
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(`Factorial of 5: ${factorial(5)}`);

// More advanced concepts can be added based on requirements

// ... (Add more code)