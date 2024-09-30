// Stack (primitive) and Heap (reference)

// for primitive datatypes
let myYoutubename = "hiteshchoudhary"

let anotherName = myYoutubename         // here copy is assigned
anotherName = "chaiaurcode"

console.log(myYoutubename)      // this will remain same
console.log(anotherName)        // this will change only

// for non-primitive types which stored into heap
let userOne = {
    email : "itstheabhii@gmail.com",
    upi : "80432@ybl"
}

let userTwo = userOne       // reference of one is given to two now both are pointing to same object

userTwo.email = "hitesh@gmail"      // changes to original

console.log(userOne);
console.log(userTwo);


