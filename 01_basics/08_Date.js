// Dates

let myDate = new Date()
console.log(typeof myDate);         // object

// console.log(myDate)     // not understandable
// console.log(myDate.toString());     // more understandable
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// format-1
// let myCreatedDate = new Date(2023, 0, 23)       // 0 means jan & 23 is date

// format-2
// myCreatedDate = new Date(2023, 0, 23, 5, 3, 20)      // yr, month, date, hr, min, sec

// format-3 (yy-mm-dd)
// myCreatedDate = new Date("2023-02-25")

// format-4 (mm-dd-yy) followed in india
myCreatedDate = new Date("01-01-1970")
// console.log(myCreatedDate.toLocaleString());

// Timestamp
// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());       // it give time of that date in timestamp form can be used to compare

// in second
// console.log(Math.floor(Date.now()/1000));       // this will be in second from jan 1970


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());        // month start from 0
console.log((newDate.getDay()));        // day start from 1 to 7
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day:"numeric",
    month:"long",
    year : "numeric",
    hour : "numeric",
    minute : "numeric",
    second : "numeric",
    timeZone: "Asia/Kolkata",
}))
