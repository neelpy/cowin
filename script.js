var dateField = document.getElementById('date');
var age18 = document.getElementById('18+');
var date = document.getElementById('date');
var results = document.getElementById('results');
var state = document.getElementById('state');
var district = document.getElementById('district');
var scheduleButton = document.getElementById('schedule');
var fetchStatus = document.getElementById('fetch-status');
var alerts = 0;

var interval = 10; // seconds
var intervalID;
var remainingTime = 10;
var fetchIntervalId;
var running = false;

const recheck = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const reverseDate = (date) => date.split("-").reverse().join("-");

const template = center => `
    <div class="p-1" style="border: 1px solid black">
        <b>${center.name}, Pincode: ${center.pincode}</b><br>
        ${center.sessions.filter(s => s.available_capacity > 0).map(s => s.date + ': ' + s.available_capacity + ' doses of ' + s.vaccine + ' available').join('<br>')}<br>
    </div>
`;

const dateTemplate = (sessions) => `
    ${sessions.filter(s => s.available_capacity > 0).map(s => "<div class=\"p-1\">" + s.center + '(' + s.pincode + ') : ' + s.available_capacity + ' doses of ' + s.vaccine + ' available').join("</div>")}
`;

var states = {
    "Andaman and Nicobar Islands": 1,
    "Andhra Pradesh": 2,
    "Arunachal Pradesh": 3,
    "Assam": 4,
    "Bihar": 5,
    "Chandigarh": 6,
    "Chhattisgarh": 7,
    "Dadra and Nagar Haveli": 8,
    "Daman and Diu": 37,
    "Delhi": 9,
    "Goa": 10,
    "Gujarat": 11,
    "Haryana": 12,
    "Himachal Pradesh": 13,
    "Jammu and Kashmir": 14,
    "Jharkhand": 15,
    "Karnataka": 16,
    "Kerala": 17,
    "Ladakh": 18,
    "Lakshadweep": 19,
    "Madhya Pradesh": 20,
    "Maharashtra": 21,
    "Manipur": 22,
    "Meghalaya": 23,
    "Mizoram": 24,
    "Nagaland": 25,
    "Odisha": 26,
    "Puducherry": 27,
    "Punjab": 28,
    "Rajasthan": 29,
    "Sikkim": 30,
    "Tamil Nadu": 31,
    "Telangana": 32,
    "Tripura": 33,
    "Uttar Pradesh": 34,
    "Uttarakhand": 35,
    "West Bengal": 36
}
var districts = {};

function getDate() {
    const d = dateField.value;
    return reverseDate(d)
}
function getAge() {
    return age18.checked ? 18 : 45;
}
function setStates() {
    for (const s in states) {
        var opt = document.createElement('option');
        opt.value = states[s]
        opt.text = s
        state.appendChild(opt)
    }
}
function setDistricts(d = null) {
    var req = new XMLHttpRequest();
    const url = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state.value}`
    req.open('GET', url, true);
    req.responseType = 'json';
    req.onload = function() {
        var status = req.status;
        if (status === 200) {
            districts = req.response.districts;
            const def = district.children[0]
            district.innerHTML = '';
            district.appendChild(def)
            for (const d of districts) {
                var opt = document.createElement('option');
                opt.value = d.district_id;
                opt.text = d.district_name;
                district.appendChild(opt)
            }
            if (d) district.value = d;
        }
    };
    req.send();
}
function getDistrictId() {
    return district.value;
}

function get(callback) {
    var req = new XMLHttpRequest();
    const district_id = district.value;
    const date = getDate();
    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district_id}&date=${date}`;
    req.open('GET', url, true);
    req.responseType = 'json';
    req.onload = function() {
        var status = req.status;
        if (status === 200)
            callback(null, req.response);
        else
            callback(status, req.response);
    };
    req.send();
}

function check() {
    if (running) { // Stop
        clearInterval(intervalID)
        clearInterval(fetchIntervalId)
        scheduleButton.value = 'Run Slot Checker'
        fetchStatus.innerText = 'Fetch the slots every 10 seconds'
    } else { // Start
        checker()
        intervalID = setInterval(checker, interval * 1000)
        fetchIntervalId = setInterval(() => {
            fetchStatus.innerText = 'Fetching the slots in ' + remainingTime--;
        }, 1000)
        fetchStatus.innerText = 'Fetching!'
        scheduleButton.value = 'Stop Fetching'
    }
    running = !running;
}

function arrangeByDate(availableCenters){
    // Split the sessions by date
    mapByDate = new Object();

    availableCenters.forEach(center => {
        center.sessions.forEach((session) => {
            // Add center name and pincode to session
            session.center = center.name;
            session.pincode = center.pincode;
            
            if(mapByDate.hasOwnProperty(session.date))
                mapByDate[session.date].push(session);
            else
                mapByDate[session.date] = [session];
        });
    });

    return mapByDate;
}

async function checker() {
    results.innerHTML = '<div class="alert alert-warning">Fetching!</div>';
    get(async (err, res) => {
        if (err) return alert(`Error: ${err}`)
        const age = getAge();
        let count = 0;
        const available = res.centers.filter(center => {
            count += center.sessions[0].min_age_limit === age;
            return center.sessions.some(s => (s.available_capacity > 0 && s.min_age_limit === age))
        })

        let dateArranged = arrangeByDate(available);
        await recheck(500);
        
        if (available.length === 0) {
            results.innerHTML = `
                <div class="alert alert-danger">
                    Found ${count} centers listed for ${age}+ age group in your district, and all of them are fully booked right now.<br>
                </div>
            `;
        } else {
            sendAlert();
            results.innerHTML = `<div class="alert alert-success">Found <b>${count} centers</b> listed for ${age}+ age group in your district, out of which <b>${available.length} centers</b> have available slots, head over to the <b><a href="https://selfregistration.cowin.gov.in/" target="_blank">official CoWIN website</a></b> to book the slot</div>`
            printByDate(dateArranged);
        }
        fetchStatus.innerText = 'Fetched!';
        remainingTime = interval - 1;
    })
}

function printByDate(dateArrangedSessions){
    sortedDates = Object.keys(dateArrangedSessions).sort((date1, date2) => {
        let isoDate1 = reverseDate(date1);
        let isoDate2 = reverseDate(date2);
        if(isoDate1 < isoDate2)
            return -1
        if(isoDate2 == isoDate1)
            return 0
        return 1
    });
    sortedDates.forEach((date) => {
        results.innerHTML += `<div class="p-1" style="border: 1px solid black"><b>${date}</b><br>`    
        results.innerHTML += dateTemplate(dateArrangedSessions[date]);
    });
}

const printByCenter = (available) => results += available.map(c => template(c)).join(' ');


function sendAlert() {
    // Send only the first alert
    if (alerts > 0) return;
    
    // Play alert sound
    var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
    audio.play();
    // TODO: Find a good way to notify the user
    alert('Found available slots!')

    alerts ++
}

state.onchange = () => {
    localStorage.setItem('state', state.value)
    setDistricts()
}

district.onchange = () => {
    localStorage.setItem('district', district.value)
}

window.onload = () => {
    const s = localStorage.getItem('state')
    const d = localStorage.getItem('district')
    setStates();
    if (s) {
        state.value = s;
        setDistricts(d);
    }
    date.valueAsDate = new Date();
}
