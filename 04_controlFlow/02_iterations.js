// for

// for (let ind = 0; ind < 10; ind++){
//     const element = ind
    // console.log(element);
// }

// let myArray = ["flash", "batman", "superman"]
// for(let ind=0; ind<myArray.length; ind++) {
//     console.log(myArray[ind])
// }

// while
// let i = 0
// while (i<10){
//     console.log(`value of index is ${i}`);
//     i++
// }


// do while
// let score = 11
// do{
//     console.log(`score is ${score}`);
//     score++;
// }while(score <= 10);


// for of
// const arr = [1,2,3,4,5,6,7,8,9]
// for(const elem of arr) {
//     console.log(`value is ${elem}`);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State America")
map.set("FR", "France")
// console.log(map);

// for (const [key, value] of map){
//     console.log('key: '+key+" and value : "+value);
// }


// for of loop will not work on object
// for in loop can be used
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift"
}
// for (const key in myObject){
//     // console.log(key);
//     console.log(myObject[key]);
// }

// const programs = ["js", "rb", "py", "cpp"]
// for(const index in programs){
//     console.log(programs[index]);
// }

// for in loop cannot work on map because map is not iteratable


// for each
// const coding = ["rb", "java", "cpp", "py", "js"]
// coding.forEach(element => {
//     console.log(element);
// });


const myCoding = [
    {
        lang: "javascript",
        langFile: "js"
    },
    {
        lang: "java",
        langFile: "java"
    },
    {
        lang: "ruby",
        langFile: "rb"
    },
    {
        lang: "c++",
        langFile: "cpp"
    },
    {
        lang: "python",
        langFile: "py"
    },
]
myCoding.forEach((item) => {
    console.log(item.lang);
    
})