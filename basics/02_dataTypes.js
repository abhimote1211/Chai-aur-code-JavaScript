"use strict";

// alert(3+3)   //we are using nodejs, not browser

console.log( 3 
    +
     3 );  //code readability should be high
console.log("Abhishek"); 

//Data Types in JS

let name = "Abhishek Mote";  //string
let age = 21;  //number
let isApproved = true;  //boolean
let firstName = undefined;  //undefined
let selectedColor = null;  //null

//Premitive data types:
// number => 2 to power 53
// string => "Abhishek"
// boolean => true/false
// undefined => variable not assigned a value
// null => variable is empty
// symbol => unique identifier 
// bigint => larger than 2 to power 53

//Non-premitive data types:
// object => key-value pairs
// array => collection of items

console.log(typeof name);
console.log(typeof null);  //bug in JS, it should return 'object'
console.log(typeof undefined);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof selectedColor);