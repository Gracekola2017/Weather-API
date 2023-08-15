const weatherForm = document.getElementById('weatherForm');
const locationInput = document.getElementById('localInput');
const weatherInfo = document.getElementById('weatherInfo');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const weatherData = document.getElementById('weatherData');
const locationSpan = document.getElementById('locationSpan');
const temperatureSpan = document.getElementById('temperatureSpan');
const conditionsSpan = document.getElementById('conditionsSpan');

weatherForm.addEventListener('submit' async (e) => {
e.preventDefault();
const location = locationInput.ariaValueMax;

loading.style.display = 'block';
error.style.display = 'none';
weatherData.style.display = 'none';

}