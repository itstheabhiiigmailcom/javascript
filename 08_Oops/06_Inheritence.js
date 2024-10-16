// inheritence in classes (in function we had used prototype for inheritence)
class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`UserName is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, pass){
        super(username)
        this.email = email
        this.pass = pass
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai.com", "534")
chai.addCourse()
chai.logMe()
const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai === masalaChai)    // false
console.log(chai instanceof Teacher)    // true
console.log(chai instanceof User)       // true