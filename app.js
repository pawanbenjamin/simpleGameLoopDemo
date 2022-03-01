// * Here's our game object:

let gameState = {
  currentScore: 0,
  goal: 10,
  gameStatus: 'playing',
  // Example of Object Method
  getRemaining: function () {
    return this.goal - this.currentScore
  },
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
// Helpful Documentation:
// MDN Create Element https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// MDN QuerySelector https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// MDN Element.classList https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// MDN Element.innerText https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
// FOR ALL Methods on HTMLElement https://developer.mozilla.org/en-US/docs/Web/API/Element

// * Make References to the one <div class='board'></div> in the <body></body> tag
const board = document.querySelector('.board')

// * Create a score button, and add a css class to it
const button = document.createElement('button')
button.classList.add('increment')
board.appendChild(button)
button.innerText = 'Increment Score'

// * Create a score board
const scoreBoard = document.createElement('div')
scoreBoard.classList.add('score')
board.appendChild(scoreBoard)
scoreBoard.innerText = gameState.currentScore

// * Display the Game Status
const gameStatus = document.createElement('div')
gameStatus.classList.add('status')
board.appendChild(gameStatus)
gameStatus.innerText = gameState.gameStatus

// * Create a reset button
const resetButton = document.createElement('button')
resetButton.classList.add('increment')
board.appendChild(resetButton)
resetButton.innerText = 'Reset'

// * Make them work together / interact with the board
// MDN Event Listeners https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

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

// * Listen to clicks to our increment button
button.addEventListener('click', function () {
  incrementScore()
  checkGame()
  renderGame()
})

// * Listen to clicks on our reset button
resetButton.addEventListener('click', function () {
  resetGame()
  renderGame()
})
