const mySym = Symbol('keys1')

// object literals

const users = {
    name: "hitesh",
    roll: 1,
    age: 21,
    location: "bangalore",
    email: "som@gmail.com",
    isLoggedIn: false,
    LogginDays: ["mon", "tue"],
    "full name": "hitesh choudhary",
    [mySym]: "mykey1"                   // including symbol in object 
}

// console.log(users.email);
// console.log(users['email']);
// console.log(users["full name"]);
// console.log(users[mySym]);


// changing mail
users.email = "new@gmail.com"
// Object.freeze(users)        // now no one can change it

users.greeting = function(){
    console.log("Hello users")
}

users.greetingTwo = function(){
    console.log(`Hello users, ${this.age}`)     // we can access key like this
}


// console.log(users.greeting);         // it will give only refrence
// console.log(users.greeting());          // it will run function
console.log(users.greetingTwo());
