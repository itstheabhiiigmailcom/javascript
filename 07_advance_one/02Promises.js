// promise creation
const promise1 = new Promise(function(resolve, reject) {
    // do an async task like DB calls, network call, cryptography
    setTimeout(() => {
        console.log('Async task 1 is completed')
        resolve()
    }, 1000);

})

// promise consumption
promise1.then(function() {
    console.log("Promise 1 consumed")
})


// 2nd promise without holding into variable
new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Async task 2')
        resolve()
    }, 1000);
    
}).then(function(){
    console.log('Async 2 resolved')
})


// 3rd promise
const promise3 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({username: "chai", email:"chaiexample.com"})
    }, 1000);
})
// consuming
promise3.then(function(data){
    console.log(data)           // whatever will be passed in resolve will be recieved in data
})


// promise4
const Promise4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username:"hitesh", email:'hitesh@gmail.com'})
        }else{
            reject('Error: something went wrong')
        }
        
    }, 1000);
})

// let say we have to access only username not email from resolved data then use chaining
Promise4
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log("The promise is either resolve or rejected")
})


// promise5
const promise5 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:"javascript", password:"54535"})
        }else{
            reject('Error: Js went wrong')
        }
    }, 1000);
})

// async is not handling catch part means if error occurs then it is not handling it
// async function consumePromise5() {
//     const response = await promise5
//     console.log(response)
// }

// to handle error with async use try and catch
async function consumePromise5() {
    try{
        const response = await promise5
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consumePromise5()


// waiting response from api
// async function getAllUsers () {
//     try {
//         const response = await fetch('https://fake-json-api.mock.beeceptor.com/users')
//         const data = await response.json()            // converting into json also take sometime so wait for it also
//         console.log(data)
//     }catch (error){
//         console.log("E : ",error)
//     }
// }
// getAllUsers()

// same thing done as (by chaining)
fetch('https://fake-json-api.mock.beeceptor.com/users')
.then((response) => {
    return response.json()
})
.then((data)=> {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})