// let a = 10
// const b = 20
// var c = 30

// if(true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a);      // these have block scope 
// console.log(b);      // scope variable
// console.log(c);         // var has always global scope so don't use

let n1 = 100
if(true){
    let n1 = 200
    // console.log(`Inner value of n1 is ${n1}`);
}
// console.log(`Outer value of n1 is ${n1}`);

let n2 = 3
// let n2 = 30      // cannot redeclare
const n3 = 90
// n3 = 89              // cannot be updated


// functional scope or any block scope
function one() {
    const user = "someone"
    function two() {
        const website = "Youtube"
        console.log(user);
    }
    // console.log(website);       // not accessible outside
    two()               // calling inside
}
one()


// ++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++
// function expression

console.log(addOne(5))                   // no problem
function addOne(num) {
    return num + 1
}

// addTwo(5)               // error because of expression
const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5))       // ook