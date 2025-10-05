let score = "33.5";  //string

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);  //conversion from string to number
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33.5" => 33.5
// "Abhishek" => NaN
// true => 1 , false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "Abhishek";
let booleanIsLoggedIn = Boolean(isLoggedIn);  //conversion from string to boolean
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

//1 => true , 0 => false
// "" => false
// "Abhishek" => true
// null => false
// undefined => false
// " " => true

let someNumber = 33;
let stringSomeNumber = String(someNumber);  //conversion from number to string
console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);