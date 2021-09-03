const apiKey = `b1e60e4ff3072bcdaba2fff4533206a9`;
const searchTemperature = () => {
    const city = document.getElementById('city_name').value;

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}


const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}


const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('clouds', temperature.weather[0].main)

    // set weather icon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather_icon');
     imgIcon.setAttribute('src', url);
}