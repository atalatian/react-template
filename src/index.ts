// index.ts

// Test ES6+ features
const name = 'John Doe';
const age = 30;

console.log(`Hello, my name is ${name} and I am ${age} years old.`);

// Test async/await
async function fetchUser() {
  try {
    const response = await fetch('https://api.github.com/users/octocat');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchUser();

// Test class syntax
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person('Jane Doe', 25);
person.sayHello();

// Test arrow functions
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

// Test object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2);


export {};