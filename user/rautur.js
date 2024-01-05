alert("rauter");
document.getElementById("imail").innerHTML=imail;
var imail = localStorage.getItem("email");

async function fetchData() {
  try {
    const apiKey = '56a817e9e3ac14';
    const response = await fetch(`https://ipinfo.io/json?token=${apiKey}`);
    const data = await response.json();

    updateElements(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function updateElements(data) {
    document.getElementById('ip1').textContent = data.ip;

  document.getElementById('ip').textContent = data.ip;
  document.getElementById('city').textContent = data.city;
  document.getElementById('region').textContent = data.region;
  document.getElementById('country').textContent = data.country;
  document.getElementById('loc').textContent = data.loc;
  document.getElementById('postal').textContent = data.postal;
  document.getElementById('timezoneSpan').textContent = data.timezone;
}

// Call the function to fetch data and update elements
fetchData();

