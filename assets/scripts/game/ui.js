'use strict'

const store = require('../store')
const game = require('./game')

const boardClear = function (data) {
  store.gameBoard = ['', '', '', '', '', '', '', '', '']
  store.value = 'X'
  store.game = data.game
  store.id = data.game.id
  store.over = false
  $('.box').text('')
  $('#messages').replaceWith('<div id="messages">player X\'s turn!</div>')
  $('#new-game').html('')
}

const makeMoveOnBoard = function () {
  $(event.target).html('<h2>' + store.value + '</h2>')
}

const computerMakeMoveOnBoard = function (number) {
  // const move = function () {
  //   return '$(\'#\' + number).html(\'<h2>\' + \'O\' + \'</h2>\')'
  // }
  setTimeout(function () {
    $('#' + number).html('<h2>' + 'O' + '</h2>')
  }, 500)
  // $('#' + number).html('<h2>' + 'O' + '</h2>').fadeIn(5000).queue()
}

const displayMessage = function () {
  if ((game.checkForWin() === 'win') || (game.checkForWinVsComputer() === 'win')) {
    $('#messages').replaceWith('<div id="messages">player ' + store.value + ' wins!</div>')
    $('#new-game').html('<button class="btn btn-outline-info"">new game</button>')
  } else if
  ((game.checkForWin() === 'tie') || (game.checkForWinVsComputer() === 'tie')) {
    $('#messages').replaceWith('<div id="messages">it\'s a tie!</div>')
    $('#new-game').html('<button class="btn btn-outline-info">reset</button>')
  }
}

const newGameFailure = function () {
  $('#messages').replaceWith('<div id="messages">please try again!</div>').delay(1000).fadeOut()
}

const getGameSuccess = function (data) {
  $('#get-game-messages').replaceWith('<div id="get-game-messages">you\'ve played ' + data.games.length + ' games!</div>').delay(2000).fadeOut()
}

const getGameFailure = function () {
  $('#get-game-messages').text('something\'s gone wrong!').delay(1000).fadeOut()
}

module.exports = {
  boardClear,
  displayMessage,
  makeMoveOnBoard,
  newGameFailure,
  getGameSuccess,
  getGameFailure,
  computerMakeMoveOnBoard
}
