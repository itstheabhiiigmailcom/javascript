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

console.log(this)           // global has no context in node environment