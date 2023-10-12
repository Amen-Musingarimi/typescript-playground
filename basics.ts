// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;

age = 12; // If you assign something other than a number it will throw an error

let username: string;

username = 'Taku'; // If you assign something other than a string it will throw an error

let isProgrammer: boolean;

isProgrammer = true; // If you assign something other than a boolean it will throw an error

// More complex types: arrays, objects
let hobbies: string[]; // Assigning an array of strings

hobbies = ['sports', 'cooking'];

// Here we define the structure and type of an object, we're not creating an object
let person: {
  name: string;
  age: number;
};

// Now we can create an object based on the defined types
person = {
  name: 'Taku',
  age: 28,
};

// Now we can create an array with defined object types
let people: {
  name: string;
  age: number;
}[];

people = [
  {
    name: 'Taku',
    age: 28,
  },
  {
    name: 'Amen',
    age: 29,
  },
];
