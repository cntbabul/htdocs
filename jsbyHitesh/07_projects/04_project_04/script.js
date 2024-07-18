const randomNumber = parseInt((Math.random() * 100 + 1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('P')


let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateguess(guess)
  })
}


function validateguess(guess){
    if (isNaN(guess)) {
      alert('Pleasee enter a Valid number')
    }else if(guess < 1){
        alert('Please enter greater or equal:1')
    }else if(guess > 100){
      alert('Please enter less than 100')
  }else {
    prevGuess.push(guess)
    if (numGuess === 11) {
      displayGuess(guess)
      displayMessage(`Game Over, Random number was ${randomNumber}`)
      endGame()      
    }else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`)
    endGame()
  }else if (guess < randomNumber){
    displayMessage(`Number is too low`)
  }else if (guess > randomNumber){
    displayMessage(`Number is too High`)
  }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame> Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  
}

