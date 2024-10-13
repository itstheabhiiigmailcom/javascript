const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    // method inside object
    getUserDetails: function(){
        console.log("Got user details\nusername: ",this.username)
        // console.log(this)       // current context
    }
}

console.log(user['username'])
user.getUserDetails()

// constructor function
function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const user1 = new User("hitesh choudhary", 12, true)
// console.log(user1)

const user2 = new User("chai", 122,false)
// console.log(user2)

console.log(user1.constructor)      // constructor gives the reference of itself.