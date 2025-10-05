console.log("Comparison Operators in JavaScript");

// console.log(2>1);  //true
// console.log(2<1);  //false
// console.log(2>=2); //true
// console.log(2<=2); //true
// console.log(2==2); //true
// console.log(2!=2); //false
// console.log(2==="2"); //false
// console.log(2=="2");  //true
// console.log(2!="2");  //false
// console.log(2!=="2"); //true

// console.log(0==false);  //true
// console.log(0===false); //false
// console.log(""==false);  //true
// console.log(""===false); //false
// console.log(null==undefined);  //true
// console.log(null===undefined); //false

// console.log("A" > "B");  //false
// console.log("A" < "B");  //true
// console.log("AB" > "A"); //true
// console.log("AB" < "A"); //false
// console.log("AB" > "Ac");    //false
// console.log("AB" < "Ac");    //true
// console.log("a" > "A");  //true
// console.log("a" < "A");  //false
// console.log("a" > "b");  //false
// console.log("a" < "b");  //true  
// console.log("ab" > "ac");    //false
// console.log("ab" < "ac");    //true
// console.log("Ab" > "aB");    //false
// console.log("Ab" < "aB");    //true

// ASCII values
// A-Z => 65-90
// a-z => 97-122
// 0-9 => 48-57

// console.log("A"<66); //true => false
// console.log("a"<98); //true => false
// console.log("9"<58); //true because 9 is converted to 57
// console.log("0">47); //true => false 0 is not converted to 48, 0 is converted to 0

let a="A";
let b= Number(a);   //NaN => Not a Number
// console.log(b);

let c="9";
let d= Number(c);   //57
// console.log(d);

// console.log("2" > "12"); //true
// console.log("2" < "12"); //false

// type coercion
// console.log("2" > 1);  //true
// console.log("2" < 1);  //false
// console.log("02" > 1); //true
// console.log("02" < 1); //false

console.log(null > 0);  //false  😁funny😁
console.log(null < 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true
console.log(null != 0); //true
console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(undefined > 0);  //false
console.log(undefined < 0);  //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false
console.log(undefined <= 0); //false
console.log(undefined != 0); //true
console.log(undefined == null); //true
console.log(undefined === null); //false

// NaN is not equal to anything including NaN
console.log(NaN == NaN);   //false
console.log(NaN === NaN);  //false
console.log(NaN != NaN);   //true
console.log(NaN !== NaN);  //true
console.log(typeof NaN);  //number

console.log(NaN > 0);  //false
console.log(NaN < 0);  //false
console.log(NaN >= 0); //false
console.log(NaN <= 0); //false
console.log(NaN == 0); //false
console.log(NaN === 0);//false
console.log(NaN != 0); //true
console.log(NaN !== 0);//true

// === vs ==

let num1 = 2;   //number    
let num2 = "2"; //string

console.log(num1 == num2);  //true (value)
console.log(num1 === num2); //false (value + type)

// != vs !==

console.log(num1 != num2);  //false (value)
console.log(num1 !== num2); //true (value + type)

// Always use === and !== for comparison
// Never use == and != for comparison

// === and !== do not do type coercion
// == and != do type coercion

// If the types are different, convert them to numbers and then compare