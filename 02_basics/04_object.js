// singleton object using cunstructor

const tinderUser = new Object()     // singleton object which is empty now

tinderUser.id = "213abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUsers = {
    email: "some@gmail.com",
    fullname: {
        firstname: "hitesh",
        lastname: "choudhary",
        title : {
            firsttitle: "tiwary",
            secondtitle: "mishra"
        }
    }
}

// console.log(regularUsers.fullname.title.firsttitle);

// combining objects
const obj1 = {1:"a", 2:'b'}
const obj2 = {3:"a", 4:'c'}

// const obj3 = {obj1, obj2}       // it will insert obj2 as object
// const obj3 = Object.assign({}, obj1, obj2)   // assign sources obj1, obj2 in new target object {}
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// when data comes from database 
const users = [
    {
      id: "122",
      email: "some@mail.com"  
    },
    {
        id: "122",
        email: "some@mail.com"  
      },
      {
        id: "122",
        email: "some@mail.com"  
      },
      {
        id: "122",
        email: "some@mail.com"  
      },
      {
        id: "122",
        email: "some@mail.com"  
      },
]
// console.log(users[1].email)             // email of first object


// when i need keys
// console.log(Object.keys(tinderUser));       // it will return array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));        // list of list i.e [[key,value], [key, value]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// object destructuring
course = {
  courseName: "js in hindi",
  courseInstructor: "hitesh choudhary",
  coursePrice: 9
}

const {coursePrice: price, courseName:name} =  course      // destructuring now you can use coursePrice as price
console.log(price);
