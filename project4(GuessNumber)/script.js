let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
    submit.addEventListener('click', (event)=>{
        event.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    // it validates input is valid or not
    if(isNaN(guess)){
        alert('enter a valid number')
    }else if (guess < 1){
        alert('enter a number greater than 1')
    }
    else if (guess > 100){
        alert('enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    // it basically checks whether user wons or not
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
    //  it basically clean the input field and update the arrays and remainings
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `
    numGuess ++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    //
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    // to start a new game
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.style.cursor = "pointer"
    newGameBtn.addEventListener('click', (event)=> {
        // reset all

        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}