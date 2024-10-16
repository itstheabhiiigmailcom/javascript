// let myName = "Abhishek   "
// let mychannel = "chai      "

//Question ? = console.log(myName.truelength)    // here i want "truelength" such fun to get the actual length without using trim 


let myHeros = ["thor", "spiderman"]     

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    },
}

// adding a prototype to the global object
Object.prototype.abhishek = function() {            
    console.log(`Abhishek is present in all Objects`)
}

heroPower.abhishek()
myHeros.abhishek()                  // array bhi object se hoke gujarta hai


// setting prototype to global array 
Array.prototype.heyAbhishek = function() {
    console.log(`Abhishek says Hello`)
}

myHeros.heyAbhishek()
// heroPower.heyAbhishek()     // should not accessible

// Note:
/* agar koi prototype object ko dete hai to vo sb se accessible hoga because everything in js is ultimately a object but agar specifically kisi array ya string ko prototype denge to saare se accessible nhi hooga */


// Inheritence (outdated)
const user = {
    name: "abhishek",
    email: "something.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAsg: 'JS assig',
    fullTime: true,
    __proto__: TeachingSupport    // now it can access all properties of Teaching Support
}

// simmilarly
Teacher.__proto__ = user            // Teacher "user" ki properties ko le skta hai ab


// Inheritence (modern)
Object.setPrototypeOf(TeachingSupport, Teacher)     // TeaachingSupport can access all properties of Teacher object


// Answer of Top question that to add method to all strings to trim extra spaces
String.prototype.truelength = function() {
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}

let str1 = "chai   "
str1.truelength()
"  hitesh  ".truelength()


const obj = {
    name: "My Object",
    regularFunction: function() {
      console.log(this.name); // "My Object"
    },
    arrowFunction: () => {
      console.log(this); // undefined (if in global scope) or the enclosing scope's 'this'
    }
  };
  
  obj.regularFunction(); // "My Object"
  obj.arrowFunction();