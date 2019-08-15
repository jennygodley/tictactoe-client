'use strict'

const config = require('./../config')
const store = require('./../store')

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": store.index,
          "value": store.value
        },
        "over": store.over
      }
    }
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  updateGame,
  getGames
}
