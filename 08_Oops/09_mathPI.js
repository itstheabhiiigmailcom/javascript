//  Can we change the value of Math.PI ?

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)        // not changed

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter)         // this is object


// creating our own PI
const pi = {
    name: "PI",
    value: 3.1,
    orderChai: function(){
        console.log("Chai nhi bni")
    }

}
// console.log(pi)
console.log(Object.getOwnPropertyDescriptor(pi, "value"))
Object.defineProperty(pi, 'value', {
    writable: false,
    enumerable: false           // now value is not iterable
})
console.log(Object.getOwnPropertyDescriptor(pi, "value"))

for (let [key, value] of Object.entries(pi)){
    // if (typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    // }
}