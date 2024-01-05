function submitForm(){
 var email = document.getElementById("email").value;
localStorage.setItem("email",email);
document.getElementById("Ebox").style.display="none"
localStorage.setItem("display","none");
localStorage.setItem("user8","block");

}
var eBox = localStorage.getItem("display");
document.getElementById("Ebox").style.display=eBox;

var smail = localStorage.getItem("email");
document.getElementById("smail").innerHTML=smail;

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

var user8 = localStorage.getItem("user8");
document.getElementById("user8").style.display=user8;
