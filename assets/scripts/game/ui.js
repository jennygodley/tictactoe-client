'use strict'

const store = require('../store')
const game = require('./game')
const events = require('./events')

const boardClear = function () {
  $('.box').text('')
  $('#messages').replaceWith('<div id="messages">player X\'s turn!</div>')
  $('#reset').html('')
  game.resetBoard()
  console.log(events.player)
}

const makeMoveOnBoard = function () {
  $(event.target).text(store.value)
}

const displayMessage = function () {
  if (game.checkForWin() === 'win') {
    $('#messages').replaceWith('<div id="messages">player ' + store.value + ' wins!</div>')
    $('#reset').html('<button>reset</button>')
  } else if
  (game.checkForWin() === 'tie') {
    $('#messages').replaceWith('<div id="messages">it\'s a tie!</div>')
    $('#reset').html('<button>reset</button>')
  }
}

module.exports = {
  boardClear,
  displayMessage,
  makeMoveOnBoard
}
