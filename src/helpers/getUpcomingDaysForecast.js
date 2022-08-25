const getUpcomingDaysForecast = forecast => {
    let maxTempForEachDay = [];
    let max = 0;
    for (let i = 1; i < forecast.forecast.list.length + 1; i++) {
        if (forecast.forecast.list[i - 1].main.feels_like > max) max = forecast.forecast.list[i - 1].main.feels_like;
        if (i % 8 === 0) maxTempForEachDay.push(max);
    }
    const fiveDays = forecast.forecast.list.filter((day, index) => [7, 15, 23, 31, 39].includes(index));
    return { maxTempForEachDay, fiveDays };
};

export default getUpcomingDaysForecast;
