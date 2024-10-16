class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){          // use static if i want not to give access of this function to all instance of this class
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())      // createId is not for you

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@pphone.com")
iphone.logMe()
// console.log(iphone.createId())          // even static is not for child class