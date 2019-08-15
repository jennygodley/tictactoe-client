'use strict'

const store = require('../store')
const game = require('./game')
const events = require('./events')
const api = require('./api')
const ui = require('./ui')

const boardClear = function (data) {
  game.gameBoard = ['', '', '', '', '', '', '', '', '']
  store.value = 'X'
  $('.box').text('')
  $('#messages').replaceWith('<div id="messages">player X\'s turn!</div>')
  $('#new-game').html('')
  console.log(events.player)
  ui.newGameSuccess(data)
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

const newGameSuccess = function (data) {
  store.id = data.game.id
  console.log(data)
}

const newGameFailure = function (data) {
  $('#messages').replaceWith('<div id="messages">please try again!</div>')
}

// const getGameSuccess = function (responseData) {
//   api.getGames()
//   console.log(responseData)
// }
//
// const getGameFailure = function () {
//   $('#get-game-messages').text('get game failed!')
//   $('#get-game-messages').removeClass()
//   $('#get-game-messages').addClass('failure')
// }

module.exports = {
  boardClear,
  displayMessage,
  makeMoveOnBoard,
  newGameSuccess,
  newGameFailure,
}
