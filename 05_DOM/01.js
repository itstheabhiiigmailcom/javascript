const whichClass = document.getElementById("title").getAttribute('class')
console.log((whichClass));


// title = document.getElementById('title')
// <h1 id=​"title" class=​"heading">​DOM learning on chai​</h1>​
// title.style.backgroundColor = 'red'
// 'red'
// title.style.padding = '20px'
// '20px'
// title.style.borderRadius = '25px'



// title.textContent
// 'DOM learning on chai text testing'
// title.innerText
// 'DOM learning on chai'
// title.innerHTML
// 'DOM learning on chai <span style="display: none;">text testing</span>'


// document.querySelector('h2')
// document.querySelectorAll('h2')
// NodeList(3) [h2, h2, h2]


// document.querySelector('.heading')
// <h1 id=​"title" class=​"heading">​…​</h1>​
// document.querySelector('#title')
// <h1 id=​"title" class=​"heading">​…​</h1>​


// document.querySelector('input[type="password"]')             // selecting attribute 'type' of input
// <input type=​"password">​


// selecting ul first then li using query selector and changing its color
// const myul = document.querySelector('ul')
// undefined
// myul.querySelector('li')
// <li>​…​</li>​
// const turnGreen = myul.querySelector('li')
// undefined
// turnGreen.style.backgroundColor = 'green'
// 'green'


// Node List

// document.querySelectorAll('li')
// NodeList(4) [li, li, li, li]
// const tempLiList = document.querySelectorAll('li')
// undefined
// tempLiList
// NodeList(4) [li, li, li, li]                 // this is not an pure array
// tempLiList[0].style.color = 'blue'
// 'blue'

// traverse over nodelist using for each
// tempLiList
// NodeList(4) [li, li, li, li]
// tempLiList.forEach( (item) => {
//     item.style.backgroundColor = 'green'
// })


// HTML Collection which different from nodeList & array
// document.getElementsByClassName('list-item')
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
// const tempClassList = document.getElementsByClassName('list-item')

// const ConvertedArray = Array.from(tempClassList)                     // convert it into array
// undefined
// ConvertedArray.forEach((li) =>{
//     li.style.color = "orange"
// } )