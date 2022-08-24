import moment from 'moment';

const getCurrentDayForecast = forecast => ({
    weekday: moment(forecast.forecast).format('dddd'),
    date: moment(forecast.forecast).format('MMMM Do'),
    location: forecast.forecast.city.name,
    temperature: forecast.forecast.list[0].main.temp.toFixed(1),
    weatherIcon: `http://openweathermap.org/img/wn/${forecast.forecast.list[0].weather[0].icon}@2x.png`,
    weatherDescription: forecast.forecast.list[0].weather[0].description,
});

export default getCurrentDayForecast;
