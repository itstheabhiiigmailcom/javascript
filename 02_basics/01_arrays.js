// JavaScript arrays are resizable and can contain a mix of different data types.

const myArr = [1,2,4,5,6,7,8,9]

// another way to define
// const myArr2 = new Array(1,2,3,4,54,54)
// console.log(myArr2);


// myArr.push(6)
// myArr.pop()
// myArr.unshift(0)        // add to start
// myArr.shift()           // remove first
// console.log(myArr.includes(9));     // boolean
// console.log(myArr.indexOf(9));      
// console.log(myArr);

const newArr = myArr.join('-')         // it will make it to string
console.log(newArr);

const n1 = myArr.slice(2,4)     // exclude last range
const n2 = myArr.splice(2,1)    //from ind 2 remove one element --> it will change original array cut it out
console.log(myArr);
console.log(n2);
