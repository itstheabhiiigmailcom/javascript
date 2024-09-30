// tamplate
let str = "String"
let lan = "javascript"
console.log(`This is good way to define and concatinate ${str} in ${lan}`)

// standard way to ddefine
const gameName = new String('hitesh-com-some-thing')
// console.log(gameName[0]);   // h
// console.log(gameName.__proto__);

// methods
console.log(gameName.length);
console.log(gameName.toUpperCase);  // original value will not change
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,4)   // substring
console.log(newString);
const anotherstring = gameName.slice(-3,3)      // in slice we can even use negative indexing
console.log((anotherstring));
const string1 = "  hitesh  "
console.log(string1.trim());            // trim starting and end spaces
const url = "http://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));           
console.log(url.includes('hitesh'))         // true
console.log(gameName.split('-'));
