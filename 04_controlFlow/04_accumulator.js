// reduce accumulator is used to add values of array

const myNums = [1,2,3,4,5]

// const myTotal = myNums.reduce( function (accumulator, currValue) {
//     console.log(`acc: ${accumulator} and current: ${currValue}`); 
//     return accumulator+currValue
// }, 0)

// or

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)

console.log(myTotal)


// adding price of shopping cart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "cpp course",
        price: 399
    },
]
const totalPrice = shoppingCart.reduce((accumulator, item) => (accumulator + item.price), 0)
console.log(totalPrice);
