let weather = document.querySelector('#weather');
let temp = document.querySelector('#temp');

const fetchData = () => {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=lumbini&appid=f56f24967aaf51182d1d4df628297c6d')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let value = (data.main.temp - 273.15).toFixed(2);
      temp.textContent = `${value} C`;
      weather.textContent = data.weather[0].description;
    })
}

fetchData();