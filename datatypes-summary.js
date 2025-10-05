// Primitive data types
// 7 types : String, Number, Boolean, Null, Undefined, BigInt, Symbol

const score = 100;         // Number
const scoreValue = 100.3; // Number (floating point)

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false, each symbol is unique

const bigNumber = 1234567890123456789n;

console.log(typeof bigNumber); // bigint
console.log(typeof id); // symbol
console.log(typeof score); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof userEmail); // undefined
console.log(typeof outsideTemp); // object (this is a known bug in JavaScript, null is not an object)
console.log(typeof scoreValue); // number

// Reference (Non-primitive) data types
// Array, Object, Functions, Dates, etc.

const heros = ["shaktiman", "naagraj", "doga"]; // Array
let myObj = {
    name: "Abhishek",
    age: 21,
    isLoggedIn: false
} // Object

const myfunction = function()
{
    console.log("hello world");
}
myfunction(); // Function call

console.log(typeof myfunction);
console.log(typeof heros);
console.log(typeof myObj);

// All non-primitive data types are objects
// In JavaScript, everything is either a primitive data type or an object
// Even functions and arrays are objects


// Primitive data types are stored in stack memory
// Reference data types are stored in heap memory and reference to that memory is stored in stack memory

// Primitive data types are copied by their value
// Reference data types are copied by their reference

// Primitive data types are immutable (cannot be changed)
// Reference data types are mutable (can be changed)