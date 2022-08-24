const currentDayForecast = forecast => {
    const maxTempCalc = forecast => {
        let max = 0;
        console.log(forecast);
        for (let i = 0; i < 8; i++) {
            if (forecast.forecast.list[i].main.temp_max > max) max = forecast.forecast.list[i].main.temp_max;
        }
        return max.toFixed(1);
    };
    const minTempCalc = forecast => {
        let min = forecast.forecast.list[0].main.temp_min;
        console.log(forecast);
        for (let i = 0; i < 8; i++) {
            if (forecast.forecast.list[i].main.temp_min < min) min = forecast.forecast.list[i].main.temp_min;
        }
        return min.toFixed(1);
    };

    const maxTemp = maxTempCalc(forecast);
    const minTemp = minTempCalc(forecast);
    return [
        {
            name: 'Feels Like',
            value: forecast.forecast.list[0].main.feels_like.toFixed(1),
            unit: '%',
        },
        {
            name: 'Humidity',
            value: forecast.forecast.list[0].main.humidity,
            unit: '%',
        },
        {
            name: 'Wind',
            value: forecast.forecast.list[0].wind.speed,
            unit: 'km/h',
        },
        {
            name: 'air pressure',
            value: forecast.forecast.list[0].main.pressure,
            unit: 'mb',
        },
        {
            name: 'max temp',
            value: maxTemp,
            unit: '°C',
        },
        {
            name: 'min temp',
            value: minTemp,
            unit: '°C',
        },
    ];
};

export default currentDayForecast;
