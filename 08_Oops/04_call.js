function SetUsername(username) {
    this.username = username
    console.log("called")
}
function createUser(username, email, pass){
    // SetUsername.call(username)              // it calls or run technically but does not save all local variables of that fun
    SetUsername.call(this, username)        // set all your(SetUsername) local variables to my(createUser) this context 
    this.email = email
    this.pass = pass
}

const chai = new createUser("chai", "chai@gmail.com", "1234")
console.log(chai)
