const board = document.querySelector('.board')

const grid = document.createElement('table')
grid.classList.add('grid')

board.appendChild(grid)

for (let index = 0; index < 20; index++) {
  for (let kindex = 0; kindex < 20; kindex++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    grid.appendChild(cell)
  }
}
