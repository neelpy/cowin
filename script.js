var dateField = document.getElementById('date');
var age18 = document.getElementById('18');
var results = document.getElementById('results');

function getDate() {
    const d = dateField.value;
    return (d.length === 1 ? '0' : '') +  d + '-05-2021'
}
function getAge() {
    return age18.checked ? 18 : 45;
}

function get(callback) {
    var req = new XMLHttpRequest();
    const district_id = '770';
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
    get((err, res) => {
        if (err) return alert(`Error: ${err}`)
        console.log(res);
        const date = getDate();
        const age = getAge();
        console.log(age);
        const available = res.centers.filter(center => {
            return center.sessions.some(s => (s.available_capacity > 0 && s.min_age_limit === age))
        })
        console.log(available);
        const template = center => `
            <div class="center" style="border: 1px solid black">
                <b>${center.name}, Pincode: ${center.pincode}</b><br>
                ${center.sessions.filter(s => s.available_capacity > 0).map(s => s.date + ': ' + s.available_capacity).join('<br>')}<br>
            </div>
        `;
        if (available.length === 0)
            results.innerHTML = 'No 18+ centers available :('
        results.innerHTML = available.map(c => template(c)).join(' ')
    })
}