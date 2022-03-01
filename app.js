// * Here's our game object:

let gameState = {
  currentScore: 0,
  goal: 10,
  gameStatus: 'playing',
}

// * Write functions to manipulate gameState -> Maybe even a method?

function incrementScore() {
  gameState.currentScore++
}

function checkGame() {
  if (gameState.currentScore === gameState.goal) {
    gameState.gameStatus = 'Finished!'
  }
}

console.log({ gameState })

// * Put Stuff of the screen
// * MDN Create Element https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// * MDN QuerySelector https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// * MDN Element.classList https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// * MDN Element.innerText https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
// * FOR ALL Methods on HTMLElement https://developer.mozilla.org/en-US/docs/Web/API/Element
const board = document.querySelector('.board')

const button = document.createElement('button')
button.classList.add('increment')

const resetButton = document.createElement('button')
resetButton.classList.add('increment')
board.appendChild(resetButton)
resetButton.innerText = 'Reset'

board.appendChild(button)
button.innerText = 'Increment Score'

const scoreBoard = document.createElement('div')
scoreBoard.classList.add('score')
board.appendChild(scoreBoard)
scoreBoard.innerText = gameState.currentScore

const gameStatus = document.createElement('div')
gameStatus.classList.add('status')
board.appendChild(gameStatus)
gameStatus.innerText = gameState.gameStatus

function renderGame() {
  scoreBoard.innerText = gameState.currentScore
  gameStatus.innerText = gameState.gameStatus
}

function resetGame() {
  gameState = {
    currentScore: 0,
    goal: 10,
    gameStatus: 'playing',
  }
}

// * Make them work together
// * MDN Event Listeners https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
button.addEventListener('click', function () {
  incrementScore()
  checkGame()
  renderGame()
})

resetButton.addEventListener('click', function () {
  resetGame()
  renderGame()
})
