'use strict'

const store = require('../store')
const game = require('./game')
const events = require('./events')
const api = require('./api')

const boardClear = function (data) {
  game.gameBoard = ['', '', '', '', '', '', '', '', '']
  store.value = 'X'
  store.id = data.game.id

  $('.box').text('')
  $('#messages').replaceWith('<div id="messages">player X\'s turn!</div>')
  $('#new-game').html('')
}

const makeMoveOnBoard = function () {
  $(event.target).text(store.value)
}

const displayMessage = function () {
  if (game.checkForWin() === 'win') {
    $('#messages').replaceWith('<div id="messages">player ' + store.value + ' wins!</div>')
    $('#new-game').html('<button>new game</button>')
  } else if
  (game.checkForWin() === 'tie') {
    $('#messages').replaceWith('<div id="messages">it\'s a tie!</div>')
    $('#new-game').html('<button>reset</button>')
  }
}

const newGameFailure = function () {
  $('#messages').replaceWith('<div id="messages">please try again!</div>')
}

const getGameSuccess = function (data) {
  console.log(data)
  $('#get-game-messages').text('here is the data!')
}

const getGameFailure = function () {
  $('#get-game-messages').text('something\'s gone wrong!')
}

module.exports = {
  boardClear,
  displayMessage,
  makeMoveOnBoard,
  newGameFailure,
  getGameSuccess,
  getGameFailure
}
