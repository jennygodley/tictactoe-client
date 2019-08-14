'use strict'

const events = require('./game/events')

$(() => {
  $('.box').on('click', events.onClickBoard)
})
