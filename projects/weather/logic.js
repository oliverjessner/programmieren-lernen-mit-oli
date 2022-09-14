'use strict';
const apikey = '04eff3314bea450883d308d2c8407aff'; 
const address = 'https://api.weatherbit.io/v2.0/';
const lang = 'de';
const input = document.querySelector('input');
const foreCast = document.querySelector('.forecast-weather-container');
const weatherIcon = document.querySelector('img');
const tempP = document.querySelector('.current-weather-temp');
const titleP = document.querySelector('.current-weather-title');
const locationSpan = document.querySelector('.current-weather-location span');
const dateSpan = document.querySelector('.current-weather-date span');
const weatherForecast = document.querySelector('.forecast-weather-container');

function getWeather ({ city, country }, path) {
    const url = `${address}${path}?city=${city}&country=${country}&lang=${lang}&key=${apikey}`;

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }       
    }).then(resp => resp.json());
}

function getForeCast ({ city, country }) {
    const url = `${address}forecast?city=${city}&country=${country}&lang=${lang}&key=${apikey}`;

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }       
    }).then(resp => resp.json());
}

function sanitizeDate (datetime) {
    const dateObj = new Date(datetime);
    const month = dateObj.toLocaleDateString(lang, { month: 'long' });
    const day = dateObj.getDate();

    return `${day} ${month}`;
}

function sanitizeDay (datetime) {
    const dateObj = new Date(datetime);
    return dateObj.toLocaleDateString(lang, { weekday: 'short' });
}

function renderForecastWeather ({ data }) {
    const HTML = data.map(function ({ datetime, weather, min_temp, max_temp }) {
        const icon = `<img src="small_icons/${weather.icon}.png" width="25">`;
        const tempspan = `<span>${max_temp} / <small>${min_temp}</small></span>`;
        const date = `<span>${sanitizeDate(datetime)}</span>`;
        const day = `<span>${sanitizeDay(datetime)}</span>`;

        return `${icon} ${tempspan} ${date} ${day}`;
    }).join('');

    weatherForecast.innerHTML = HTML;
}

function renderCurrentWeather ({ data }) {
    const [{
        city_name, 
        weather: {
            code, 
            description
        },
        ob_time,
        temp
    }] = data;
    const src = `big_icons/${icons[code]}.png`;

    tempP.innerText = `${temp} C°`;
    titleP.innerText = description;
    locationSpan.innerText = city_name;
    dateSpan.innerText = ob_time;
    
    weatherIcon.setAttribute('src', src);
}

function fetchData ({ value }) {
    const [city = '', country = ''] = value.split(',');
    const options = {
        city: city.trim(),
        country: country.trim()
    };

    if (city === '' || country === '') {
        return alert('Please enter a valid pattern, e.g. "City, country"');
    }

    getWeather(options, 'current').then(renderCurrentWeather);
    getWeather(options, 'forecast/daily').then(renderForecastWeather);
    localStorage.setItem('last', value);
}

input.addEventListener('keyup', function ({ target, code }) {
    if (code === 'Enter' && target.value.trim() !== '') {
        return fetchData(target);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const last = localStorage.getItem('last');

    if (last) {
        fetchData({ value: last });
        input.value = last;
    }

    input.focus(); 
});