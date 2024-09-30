function add(num1, num2) {
    return num1+num2
}

// console.log(add(2,4));
// console.log(add(2,"4"));        // 24

// function loginUserMessage(username) {
//     if(!username){
//         console.log("Please enter a username")
//         return 
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());


function loginUserMessage(username="someone") {
    if(!username){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());


// handling unknown number of arguments
function caculateCartPrice(...num) {                // ...num it always gives an array
    total = 0
    num.forEach(element => {
        total += element
    });
    return total
}
// console.log(caculateCartPrice(2,34,5,5))


// handling object in functions
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

const somedata = {username:"hitesh", price:100}
handleObject(somedata)