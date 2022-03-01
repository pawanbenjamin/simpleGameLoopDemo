const board = document.querySelector('.board')

const grid = document.createElement('table')
grid.classList.add('grid')

board.appendChild(grid)

for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 20; j++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    grid.appendChild(cell)
  }
}
