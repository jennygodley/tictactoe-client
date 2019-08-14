'use strict'

const store = require('../store')
const game = require('./game')

const boardClear = function () {
  $('.box').text('')
  $('#messages').replaceWith('<div id="messages">player X\'s turn!</div>')
  $('#reset').text('')
  game.player = 'X'
  console.log(game.player)
}

module.exports = {
  boardClear
}
