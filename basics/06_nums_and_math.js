const score = 100;
// console.log(score);


// const balance = new Number(100);
// console.log(balance); // [Number: 1000]
// console.log(typeof balance); // object

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 1234.123456;
// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// toFixed(), toPrecision(), toLocaleString()



//************* maths **************

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.abs(-4)); 
// console.log(Math.round(4.3));
// console.log(Math.ceil(8.2));
// console.log(Math.floor(8.9));
// console.log(Math.min(2,4,5,1,-9));
// console.log(Math.max(2,4,5,1,-9));
// console.log(Math.sqrt(25));
// console.log(Math.pow(2,3));
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

let randomNum=Math.random() * (max - min + 1 ) + min;
console.log(Math.floor(randomNum));

let num=Math.random()*(max-min+1)+min;
console.log(Math.floor(num));

// Math methods
// abs(), round(), ceil(), floor(), min(), max(), sqrt(), pow(), random()
// random number between any range
// random number between min and max
// Math.random() * (max - min + 1 ) + min
// Math.floor(Math.random() * (max - min + 1 ) + min)   // to get whole number (bottom)
// Math.ceil(Math.random() * (max - min + 1 ) + min)    // to round off to next number (top)
// Math.round(Math.random() * (max - min + 1 ) + min)   // to round off to nearest number




