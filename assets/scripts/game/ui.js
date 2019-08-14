'use strict'

const whichTurn = function () {
  let player = 'X'
  if (player === 'X') {
    (player = 'O')
  }
  return player
}

module.exports = {
  whichTurn
}
