const getUpcomingDaysForecast = forecast =>
    forecast.forecast.list.filter((day, index) => [7, 15, 23, 31, 39].includes(index));

export default getUpcomingDaysForecast;
