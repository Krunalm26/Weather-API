document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let weather = document.getElementById('weather').value // delhi


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=678d32c42c9793d18d90089053b0bf84&units=metric`)
        .then(response => response.json())
        .then(data => {

            document.getElementById('city-name').innerText = data.name;
            document.getElementById('temp-value').innerText = data.main.temp;
            document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            document.getElementById('weather-desc').innerText = data.weather[0].description;
            document.getElementById('humidity-value').innerText = data.main.humidity;
            document.getElementById('wind-speed').innerText = data.wind.speed;
            document.querySelector('.weather-card').style.display = 'flex';
        })
        .catch(() => {
            document.querySelector('.weather-card').style.display = 'none';
        });
});


