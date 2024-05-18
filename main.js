document.addEventListener('DOMContentLoaded', () => {
    const weatherData = {
        new_york: {
            location: 'New York',
            temperature: '15°C',
            condition: 'Cloudy'
        },
        los_angeles: {
            location: 'Los Angeles',
            temperature: '22°C',
            condition: 'Sunny'
        },
        chicago: {
            location: 'Chicago',
            temperature: '10°C',
            condition: 'Windy'
        },
        tokyo: {
            location: 'Tokyo',
            temperature: '18°C',
            condition: 'Rainy'
        },
        beijing: {
            location: 'Beijing',
            temperature: '20°C',
            condition: 'Sunny'
        },
        bangkok: {
            location: 'Bangkok',
            temperature: '30°C',
            condition: 'Humid'
        },
        mandalay: {
            location: 'Mandalay',
            temperature: '25°C',
            condition: 'Cloudy'
        },
        new_delhi: {
            location: 'New Delhi',
            temperature: '35°C',
            condition: 'Hot'
        },
        england: {
            location: 'England',
            temperature: '12°C',
            condition: 'Foggy'
        }
    };

    const locationSelect = document.getElementById('location-select');
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const conditionElement = document.getElementById('condition');

    function updateWeather(location) {
        const data = weatherData[location];
        locationElement.textContent = data.location;
        temperatureElement.textContent = data.temperature;
        conditionElement.textContent = data.condition;
    }

    locationSelect.addEventListener('change', (event) => {
        updateWeather(event.target.value);
    });

    // Set initial weather
    updateWeather(locationSelect.value);
});
