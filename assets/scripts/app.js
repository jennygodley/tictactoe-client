'use strict'

const events = require('./game/events')
// const ui = require('./game/ui')

$(() => {
  $('.box').on('click', events.onClickBoard)
  $('#reset').on('click', events.onBoardClear)
})
