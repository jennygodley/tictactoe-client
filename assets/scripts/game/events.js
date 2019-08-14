'use strict'

const ui = require('./ui')

let player = 'X'
const onClickBoard = function () {
  const cellValue = $(event.target).text()
  if (cellValue === ('X' || 'O')) {
    console.error('already a move here')
  } else {
    $(event.target).text(player)
    if (player === 'O') {
      player = 'X'
    } else {
      player = 'O'
    }
  }
}

module.exports = {
  onClickBoard
}
