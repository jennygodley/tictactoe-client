'use strict'

let store = require('./../store')

$('.game-board').hide()
$('.signed-in-options').hide()

// $('#sign-up').reset()
// $('#sign-in').on()
// $('#password').on('submit', authEvents.onPassword)
// $('#sign-out').on('submit', authEvents.onSignOut)

const signUpSuccess = function () {
  console.log('signUpSuccess ran')
  $('#signup_message').text('signed up successfully!')
  $('#signup_message').removeClass()
  $('#signup_message').addClass('success')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('#signup_message').text('sign-up failed!')
  $('#signup_message').removeClass()
  $('#signup_message').addClass('failure')
  console.error('signUpFailure ran')
}

const signInSuccess = function (data) {
  // handle storying user data/token, if it exists
  store.user = data.user
  console.log(store.user)
  $('#signin_message').text('signed in successfully!').delay(1000).fadeOut()
  $('#signin_message').removeClass()
  $('#signin_message').addClass('success')
  $('#toggle').toggle()
  console.log('signInSuccess ran! User is', store.user)
  $('.game-board').show()
  $('.signed-in-options').show()
  $('.sign-in-sign-up').hide(500)
  $('#sign-in').trigger('reset')
}

const signInFailure = function () {
  $('#signin_message').text('sign in failed!').delay(1000).fadeOut()
  $('#signin_message').removeClass()
  $('#signin_message').addClass('failure')
  console.error('signInFailure ran')
}

const passwordSuccess = function () {
  $('#password_message').text('password changed!').delay(1000).fadeOut()
  $('#password_message').removeClass()
  $('#password_message').addClass('success')
  console.log('passwordSuccess ran')
  $('#password').trigger('reset')
}

const passwordFailure = function () {
  $('#password_message').text('password not changed!').delay(1000).fadeOut()
  $('#password_message').removeClass()
  $('#password_message').addClass('failure')
  console.error('passwordFailure ran')
}

const signOutSuccess = function () {
  store.user = null
  $('#signout_message').text('signed out!').delay(1000).fadeOut()
  $('#signout_message').removeClass()
  $('#signout_message').addClass('success')
  $('#toggle').toggle()
  console.log('signOutSuccess ran')
  $('.game-board').hide(500)
  $('.signed-in-options').hide(500)
  $('.sign-in-sign-up').show()
}

const signOutFailure = function () {
  $('#signout_message').text('sign out failed!').delay(1000).fadeOut()
  $('#signout_message').removeClass()
  $('#signout_message').addClass('failure')
  console.error('signOutFailure ran')
}

const getGameSuccess = function (exampleData) {
  $('#get-game-messages').text('example got!')
  $('#get-game-messages').removeClass()
  $('#get-game-messages').addClass('success')
  console.log(exampleData)
  store.examples = exampleData.examples
  console.log(store)
  let examplesHtml = ''
  exampleData.examples.forEach(example => {
    examplesHtml += `
    <p class="name">${example.text}</p>
    <p class="id">id: ${example.id}</p>
    <hr>
  `
  })
  $('#examples_here').html(examplesHtml)
  console.log('getGameSuccess ran')
}

const getGameFailure = function () {
  $('#get-game-messages').text('you got a game!')
  $('#get-game-messages').removeClass()
  $('#get-game-messages').addClass('failure')
  console.error('getGameFailure ran')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordSuccess,
  passwordFailure,
  signOutSuccess,
  signOutFailure
}
