// <, >, <=, >=, ==, !=, ===

// implicit declaration of if
if(true) console.log("this is true"), console.log("again it is true")

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedFromEmail = true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to browse");
}

if (loggedInFromGoogle || loggedFromEmail){
    console.log("user logged in");
}


// switch
const month = 3
switch (month) {
    case 1: console.log("january");
            break;
    case 2: console.log("feb");
            break;
    case 3: console.log("mar");
            break;
    case 4: console.log("apr");
            break;
    case 5: console.log("may");
            break;
    case 6: console.log("jun");
            break;
    case 7: console.log("jul");
            break;
    case 8: console.log("aug");
            break;
    case 9: console.log("sep");
            break;
    case 10: console.log("oct");
            break;
    case 11: console.log("nov");
            break;
    case 12: console.log("dec");
            break;
    default:
        console.log("invalid");
        break;        
    
}

const userEmail = "hitesh2.com"
if (userEmail){
    console.log("got user email");   
}else{
    console.log("Don't have user email");
    
}


// what all are considered as falsy value and truthy value
// falsy-value : false, 0, -0, BigInt, 0n, "", null, undefined, NaN
// truthy-value : "0", "false", " ", [], {}, function(){}

// how to confirm empty array or object
const arr = []
if (arr.length === 0){
    console.log("Empty");
}

const myObject = {}
if (Object.keys(myObject).length === 0){
    console.log("object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let vaal1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

console.log(val1);


// Ternary operator
// condition ? true : false
const IceTea = 100
IceTea >= 80 ? console.log("less than 80") : console.log("more than 80");
