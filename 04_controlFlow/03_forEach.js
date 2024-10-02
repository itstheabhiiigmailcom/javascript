// const coding = ["js", "ruby", "py", "java", "cpp"]

// const values = coding.forEach((item) => {
//     return item
// })
// console.log(values);            // it will not return any value

// filter
const myNums = [1,2,3,4,5,6,7,8,9]
// const multipleOf5 = myNums.filter((num) => num%5===0)
// console.log(multipleOf5);

// filter using forEach
// const newNums = []
// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    {title: 'Book one', genre: 'Fiction', publish: 1987, edition: 2003},
    {title: 'Book two', genre: 'non-fiction', publish: 1983, edition: 1993},
    {title: 'Book three', genre: 'history', publish: 1967, edition: 2033},
    {title: 'Book four', genre: 'science', publish: 1990, edition: 2023},
    {title: 'Book five', genre: 'Fiction', publish: 2003, edition: 2012},
]

const userBooks = books.filter( (bk) => bk.genre==='history')
const userBook = books.filter( (bk) => {
    bk.publish>2000 && bk.genre==='history'
})
// console.log(userBooks);
// console.log(userBook);


// map
// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// // const newNum = myNumbers.map((val) => val*2)

// // chaining (more than one filters)
// const newNum = myNumbers.map((num) => num*10)
//                         .map((val) => val/10)
//                         .filter((num) => num>=5)
// console.log(newNum);

