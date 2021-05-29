const secret = 'U2FsdGVkX1+HQAr4dz+duq8zfH7xAvGNjw7bG1OGY9OvIuvNf3P+2J2J0iM1tu3ENPXB6/rPZsvqB+f54ikhuw=='
axios.defaults.baseURL = 'https://cdn-api.co-vin.in/api/v2'
const headers = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('token')}`
})

async function generateOTP() {
  mobile = $mobile.val()
  localStorage.setItem('mobile', mobile)
  const res = await axios({
    method: 'post',
    url: 'auth/generateMobileOTP',
    data: { mobile, secret }
  })
  txnId = res.data['txnId']
  console.log({txnId})
  $mobileDiv.hide()
  $otpDiv.show()
  play('Please enter OTP!', true)
}

async function encode(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function confirmOTP() {
  const otp = await encode($otp.val())

  try {
    const res = await axios({
      method: 'post',
      url: 'auth/validateMobileOtp',
      data: {txnId, otp}
    })
    storeToken(res.data.token)
    await login()
  } catch (err) {
    console.log({err})
  }
}

async function login() {
  markAsLoggedIn()
  checkTokenRoutine()
  await getBeneficiaries()
  await setPreferences()
}

async function relogin() {
  markAsLoggedOut()
  await generateOTP()
}

function logout() {
  removeToken()
  markAsLoggedOut()
}

function storeToken(newToken) {
  token = newToken
  console.log({token})
  localStorage.setItem('token', token)
  timestamp = new Date()
  localStorage.setItem('timestamp', timestamp.toString())
}

function removeToken() {
  token = null
  localStorage.removeItem('token')
  timestamp = null
  localStorage.removeItem('timestamp')
  clearInterval(tokenIntervalId)
}

function checkTokenRoutine() {
  checkToken()
  tokenIntervalId = setInterval(checkToken, tokenInterval * 1000)
}

function checkToken() {
  if (!token) return
  const diff = (new Date() - timestamp) / (60 * 1000)
  console.log({diff})
  if (diff < 13) return
  if (diff < 15) return markSessionAboutToExpire()
  markSessionExpired()
  logout()
}

function markAsLoggedIn() {
  $mobileDiv.hide()
  $otpDiv.hide()
  $loginDiv.show()
  $logoutDiv.show()
  $benDiv.show()
  $expiring.hide()
  $relogin.hide()
  $fetchLabel.text('Fetch Available Slots and Book')
}

function markAsLoggedOut() {
  $mobileDiv.show()
  $otpDiv.hide()
  $loginDiv.hide()
  $logoutDiv.hide()
  $benDiv.hide()
  $fetchLabel.text('Fetch Available Slots')
}

function markSessionExpired() {
  play('Session expired, please login again!')
}

function markSessionAboutToExpire() {
  play('Session about to expire, please login again!', true)
  $expiring.show()
  $relogin.show()
}

async function getBeneficiaries() {
  if (!token) return
  const res = await axios({
    method: 'get',
    url: 'appointment/beneficiaries',
    headers: headers()
  })
  ben = res.data.beneficiaries;
  console.log({ben})
}

function showBeneficiaries() {
  if (!ben) return
  const eben = ben.filter(b => b.allow).map(b => b['name'])
  $ben.text(eben.length > 0 ? eben.join(', ') : 'Nobody eligible for this preference')
}

async function startFetchSlots() {
  play('Started fetching', true)
  markAsFetching()
  intervalId = setInterval(fetchSlots, interval * 1000)
  await fetchSlots()
}

function stopFetchSlots() {
  play('Stopped fetching', true)
  $fetchDiv.show()
  $fetchingDiv.hide()
  clearInterval(intervalId)
}

function markAsFetching() {
  $fetchDiv.hide()
  $fetchingDiv.show()
  $captchaDiv.hide()
}

async function fetchSlots() {
  console.log('fetching')
  results.innerHTML = '<div class="alert alert-warning">Fetching!</div>';
  const res = await axios({
    method: 'get',
    url: 'appointment/sessions' + (token ? '/' : '/public/') + 'calendarByDistrict',
    params: {
      district_id: localStorage.getItem('district_id'),
      date: getDate()
    },
    headers: headers()
  })
  const centers = res.data['centers']
  await check(centers)
  await getCaptcha()
}

async function check(centers) {
  const age = getAge();
  const fees = getFees();
  const vaccine = getVaccine();
  const pincodes = getPincodes();
  const dose = getDose()
  const cap = `available_capacity_dose${dose}`
  let count = 0;
  available = centers.filter(center => {
    count += center['sessions'][0]['min_age_limit'] === age;
    if (pincodes && !pincodes.includes(center['pincode']))
      return false
    if (fees && fees !== center['fee_type'].toLowerCase())
      return false
    return center['sessions'].some(s => {
      if (vaccine && vaccine !== s['vaccine'].replace(/ /g, '-').toLowerCase())
        return false
      return (s[cap] > 10 && s['min_age_limit'] === age)
    })
  })
  console.log({available, centers});
  const template = center => `
          <div class="p-1" style="border: 1px solid black">
              <b>${center.name}, Pincode: <a href="https://www.google.com/maps/place/${center['pincode']}" target="_blank">${center['pincode']}</a></b><br>
              ${center['sessions'].filter(s => 0 < s[cap]).map(s => s['date'] + ': ' + s[cap]).join('<br>')}<br>
          </div>
      `;
  await delay(1)
  if (count === 0) {
    results.innerHTML = `<div class="alert alert-danger">No centers listed for ${age}+ age group found in your district 😔</div>`
  } else if (available.length === 0) {
    results.innerHTML = `<div class="alert alert-danger">Found ${count} centers listed for ${age}+ age group in your district, and all of them are fully booked right now 😕</div>`;
  } else {
    results.innerHTML = `<div class="alert alert-success">Found <b>${count} centers</b> listed for ${age}+ age group in your district, out of which <b>${available.length} centers</b> have available slots.</div>`
    results.innerHTML += available.map(c => template(c)).join(' ')
  }
  session = available.length > 0 && available[0]['sessions'][0]
}

async function setPreferences() {
  if (!ben) return
  const dose = getDose()
  const age = getAge()
  const vaccine = getVaccine()
  for (let i=0; i<ben.length; i++) {
    const b = ben[i]
    const ageB = 2021 - parseInt(b['birth_year'])
    const doseC = (dose === 1 && b['dose1_date'] === '') || (dose === 2 && b['dose1_date'] !== '')
    const ageC =  age === 18 ? (ageB >= 18 && ageB < 45) : (ageB >= 45)
    const vaccineC = dose === 1 || (dose === 2 && (!vaccine || vaccine === b['vaccine'].replace(/ /g, '-').toLowerCase()))
    ben[i].allow = doseC && ageC && vaccineC
  }
  pref = {
    dose,
    ben: ben.filter(b => b.allow).map(b => b['beneficiary_reference_id'])
  }
  showBeneficiaries()
}

async function getCaptcha() {
  if (!token || !session) return

  play('Found a slot!')

  const res = await axios({
    method: 'post',
    url: 'auth/getRecaptcha',
    headers: headers()
  })
  $captcha.html(res.data.captcha)
  $captchaInput.val('')
  $captchaDiv.show()
  stopFetchSlots()
  $fetchDiv.hide()
}

async function book() {
  if (!token || !session) return

  const dose = pref.dose;
  const beneficiaries = pref.ben

  const session_id = session['session_id']
  const slot = session['slots'][0]

  const captcha = $captchaInput.val()

  $bookingDiv.show()
  try {
    const res = await axios({
      method: 'post',
      url: 'appointment/schedule',
      data: { dose, session_id, slot, beneficiaries, captcha },
      headers: headers()
    })
    // Post booking checks and frontend messages
    await login()
    appointment_id = res.data['appointment_confirmation_no']
    console.log({appointment_id})
    const c = available[0]
    let msg = `Successfully booked! 🎉<br>`
    msg += `Center: <b>${c['name']}, ${c['address']}, <a href="https://www.google.com/maps/place/${c['pincode']}" target="_blank">${c['pincode']}</a></b><br>`
    msg += `Beneficiaries: ${ben.filter(b => b.allow).map(b => b.name).join(', ')}<br>`
    msg += `Appointment slip: <button class="btn btn-success" id="download">Download</button>`
    $bookingDiv.html(`<div class="alert alert-success">${msg}</div>`)
    $('#download').click(() => download(appointment_id))
  } catch(e) {
    const error = e.response.data.error
    console.log({error})
    $bookingDiv.html(`<div id="booking-error" class="alert alert-danger">${error}</div>`)
    setTimeout(() => $('#booking-error').remove(), 30 * 1000)
    await startFetchSlots()
  }
}

async function download(appointment_id) {
  const res = await axios({
    method: 'get',
    url: 'appointment/appointmentslip/download',
    params: { appointment_id },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/pdf',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    responseType: 'arraybuffer'
  })
  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Appointment_slip.pdf');
  document.body.appendChild(link);
  link.click();
}
