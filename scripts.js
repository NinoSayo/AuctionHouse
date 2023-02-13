let loggedInUser = localStorage.getItem('LoggedInUser');

if (loggedInUser) {
  document.querySelector('.nav-link[href="#!login"]').innerHTML = "Logout";
  document.querySelector('.nav-link[href="#!signup"]').innerHTML = loggedInUser;
  document.querySelector('.nav-link[href="#!signup"]').style.pointerEvents = "none";
  document.querySelector('.nav-link[href="#!signup"]').style.color = "red";


  document.querySelector('.nav-link[href="#!login"]').addEventListener("click",function(){
    localStorage.removeItem('LoggedInUser');
    window.location.reload();
  })
};

setInterval(function() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var clock = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerHTML = clock;
}, 1000);

setInterval(function() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var date = day + "/" + month + "/" + year;
  document.getElementById("date").innerHTML = date;
}, 1000);
var ticker = document.querySelector('.ticker');
var list = document.querySelector('.ticker_list');
var clone = list.cloneNode(true);

if ("geolocation" in navigator) {
    window.onload = function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
    
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
          .then(response => response.json())
          .then(data => {
            var city = data.address.town || data.address.city || data.address.county || data.address.state || data.address.country;
            var location = document.querySelector("#location");
            location.innerHTML = city;
          })
          .catch(error => {
            console.error(error);
            var location = document.querySelector("#location");
            location.innerHTML = "Couldn't retrieve location";
          });
      },
      function(error) {
        console.error(error);
        var location = document.querySelector("#location");
        location.innerHTML = "Geolocation blocked";
      });
    };
  } else {
    var locationContainer = document.querySelector("#locationContainer");
    locationContainer.innerHTML = "Your browser doesn't support geolocation";
  }