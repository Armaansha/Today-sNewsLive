let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchkey = document.getElementById("int").value;
  console.log(searchkey);
  searchweather(searchkey);
});

function searchweather(searchkey) {
  let weatherapi = `http://api.openweathermap.org/data/2.5/weather?q=${searchkey}&appid=fd134e85d16ada0de476d71a2a3c8b76`;

  window
    .fetch(weatherapi)
    .then((data) => {
      data
        .json()
        .then((data) => {
          console.log(data);
          let weatherdata = data.weather;
          let main = data.main;

          var tempo = data.main.temp - 273.15;

          let out = [];

          for (let it of weatherdata) {
            out += `
            
            <div id="witem">
                 <div id="wimg">
                 <img src="http://openweathermap.org/img/wn/${it.icon}.png"  alt="...">
                 </div>
                    <div>
                    
                         <p><span></span><span>${tempo}&deg;c</span></p>
                         <p>${data.name}</p>
                         <p><span>Humidity: </span><span>${data.main.humidity}</span></p>
                         <p>${it.description}</p>
                    </div>    
                </div>    
            `;
            document.getElementById("forecast").innerHTML = out;
          }
        })
        .catch((ee) => console.log(ee));
    })
    .catch((ee) => console.log(ee));
}
