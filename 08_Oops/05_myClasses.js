// after ES6

// class User {
//     constructor(username, email, pass){
//         this.username = username
//         this.email = email
//         this.pass = pass
//     }
//     // methods
//     encryptPassword() {
//         return `${this.pass}abc`
//     }
//     validUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")
// console.log(chai.encryptPassword())
// console.log(chai.validUsername())



// above thing, Behind the scene Actually
function User(username, email, pass){
    this.username = username
    this.email = email
    this.pass = pass
}
// injecting properties or methods in function
User.prototype.encryptPassword = function(){
    return `${this.pass}abc`
}
User.prototype.validUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "chai@gmail.com", "123")
console.log(tea.encryptPassword())
console.log(tea.validUsername())