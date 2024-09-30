// this keyword --> it refer current context
const users = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome`);
        console.log(this)       // it print current context
    }
}
// users.welcomeMessage()
// users.username = "sam"
// users.welcomeMessage()

// console.log(this)           // global has no context in node environment

// function chai() {
//     let username = "hitesh"
//     console.log(this.username);     // undifined
//     console.log(this);
// }
// chai()


// Arrow function
// const chai = () => {
//     let username = "hitesh"     
//     console.log(this.username);      // undefined still
//     console.log(this);       
// }

// implicit return (in one line and it will automatically return)
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo())


// returning object
const someobject = () => ({username:"hitesh"})
console.log(someobject())