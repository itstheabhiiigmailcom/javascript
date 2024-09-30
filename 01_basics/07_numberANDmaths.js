// Numbers
const score = 400
// console.log(score);

const balance = new Number(100.23)
// console.log(balance);               // purely number
// console.log(balance.toString());
// console.log(balance.toFixed(1))

const otherNumber = 123.3454
// console.log(otherNumber.toPrecision(4));        // 4 digit precision

const hundreds = 1000000
// console.log(hundreds.toLocaleString())      // Us local number
// console.log(hundreds.toLocaleString('en-In'));    // indian local number

// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.59578));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(6.45));
// console.log(Math.min(2,34,45,5,6,3,4));
// console.log(Math.max(23,324,43));

console.log(Math.random());         // always varies from 0 to 1
console.log((Math.random()*10) + 1);      // gives from 1 to 10 not zero
// console.log(Math.floor(Math.random()*10) + 1);

// need values in range 
const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max-min+1)) + min);
