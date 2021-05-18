// Elements
const $districtInput = $('input#district-input')
const $pincodeInput = $('input#pincode-input')
const $age = $('input[type=radio][name=age]')
const $dose = $('input[type=radio][name=dose]')
const $anyVaccine = $('#v-any,#v-any-label')
const $vaccine = $('input[type=radio][name=vaccine]')
const $fees = $('input[type=radio][name=fees]')
const $date = $('#date');
const results = document.getElementById('results');

const $mobileDiv = $('#mobile-div')
const $otpDiv = $('#otp-div')
const $loginDiv = $('#login-div')
const $logoutDiv = $('#logout-div')
const $benDiv = $('#ben-div')

const $mobile = $('#mobile')
const $getOtp = $('#get-otp')
const $otp = $('#otp')
const $confirmOtp = $('#confirm-otp')
const $expiring = $('#expiring')
const $relogin = $('#relogin')
const $logout = $('#logout')
const $ben = $('#ben')

const $fetchDiv = $('#fetch-div')
const $fetchLabel = $('#fetch-label')
const $fetchingDiv = $('#fetching-div')
const $fetchingLabel = $('#fetching-label')

const $startFetch = $('#start-fetch')
const $stopFetch = $('#stop-fetch')

const $captchaDiv = $('#captcha-div')
const $captchaInput = $('#captcha-input')
const $captcha = $('#captcha')
const $book = $('#book')
const $bookingDiv = $('#booking-div')

// Variables
let mobile, txnId, token, timestamp, ben, pref, session, available;
let appointment_id;
let intervalId, interval = 5; // seconds
let tokenIntervalId, tokenInterval = 60; // seconds


// Setup
$otpDiv.hide()
$loginDiv.hide()
$logoutDiv.hide()
$benDiv.hide()

$(document).ready(function () {
  $getOtp.click(generateOTP)
  $confirmOtp.click(confirmOTP)
  $relogin.click(relogin)
  $logout.click(logout)
  $startFetch.click(startFetchSlots)
  $stopFetch.click(stopFetchSlots)
  $book.click(book)
  $('input[type=radio]').change(setPreferences)
})
$fetchingDiv.hide()
$captchaDiv.hide()
$date.valueAsDate = new Date((new Date()).getTime() + 1000 * 3600 * 24);

$districtInput.click(function () {
  this.setSelectionRange(0, this.value.length)
})

$dose.change(function() {
  const d = getDose()
  if (d === 1) {
    $anyVaccine.show()
  } else {
    $anyVaccine.hide()
    if (!getVaccine())
      $('#v-covishield').prop('checked', true)
  }
})


function play(msg, low=null) {
  console.log(msg)
  if (low) return
  const audio = new Audio();
  audio.src = 'assets/alert.mp3'
  audio.play()
}

const delay = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000))

// Get value
function getDate() {
  const d = $date.val();
  return d.split('-').reverse().join('-')
}
function getAge() {
  return $age.filter(':checked').val() === 'a-18' ? 18 : 45
}
function getDose() {
  return $dose.filter(':checked').val() === 'd-1' ? 1 : 2
}
function getVaccine() {
  const v = $vaccine.filter(':checked').val().slice(2)
  return v === 'any' ? null : v
}
function getFees() {
  const f = $fees.filter(':checked').val().slice(2)
  return f === 'any' ? null : f
}
function getPincodes() {
  const p = $pincodeInput.val().replace(/ /g, '')
  if (p.length === 0) return null
  return p.split(',').map(pc => Number(pc))
}


// Load
if (localStorage.getItem('district_name'))
  $districtInput.attr('value', localStorage.getItem('district_name'))
if (localStorage.getItem('pincode'))
  $pincodeInput.attr('value', localStorage.getItem('pincode'))
if (localStorage.getItem('age'))
  $(`input#${localStorage.getItem('age')}`).prop('checked', true)
if (localStorage.getItem('dose'))
  $(`input#${localStorage.getItem('dose')}`).prop('checked', true)
if (localStorage.getItem('vaccine'))
  $(`input#${localStorage.getItem('vaccine')}`).prop('checked', true)
if (localStorage.getItem('fees'))
  $(`input#${localStorage.getItem('fees')}`).prop('checked', true)
if (localStorage.getItem('mobile'))
  $mobile.attr('value', localStorage.getItem('mobile'))

$(document).ready(async function () {
  token = localStorage.getItem('token')
  timestamp = new Date(localStorage.getItem('timestamp'))
  console.log('Restore login', {token, timestamp})
  if (token) await login()

  const now = new Date((new Date()).getTime() + 1000 * 3600 * 18);
  const day = ("0" + now.getDate()).slice(-2);
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const today = now.getFullYear()+"-"+(month)+"-"+(day) ;
  $date.val(today);
})


// Store
$districtInput.change(function() {
  const options = $('datalist')[0].options;
  const val = $(this).val();
  for (let i=0; i<options.length; i++){
    if (options[i].value === val) {
      localStorage.setItem('district_id', options[i].innerText)
      localStorage.setItem('district_name', val)
      break;
    }
  }
});
$pincodeInput.change(function() {
  localStorage.setItem('pincode', this.value)
});
$age.change(function() {
  localStorage.setItem('age', this.value)
})
$dose.change(function() {
  localStorage.setItem('dose', this.value)
})
$vaccine.change(function() {
  localStorage.setItem('vaccine', this.value)
})
$fees.change(function() {
  localStorage.setItem('fees', this.value)
})
