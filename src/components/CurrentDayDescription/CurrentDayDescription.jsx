import React from 'react';
import { useSelector } from 'react-redux';
import currentDayForecast from '../../helpers/getCurrentDayDetailedForecast';

const CurrentDayDescription = () => {
    const forecast = useSelector(state => state.forecast)
    const detailedForecast = currentDayForecast(forecast)
    return (
        <div className="mt-4 mt-md-2">
            <div className="d-flex flex-column mb-2">
                {detailedForecast.map((detail, index) => (
                    <div key={index} className='d-flex justify-content-between'>
                        <p className='mb-0 font-weight-bolder text-uppercase'>{detail.name}</p>
                        <div>
                            <span className='mb-0 mr-2'>{detail.value}</span>
                            <span className='mb-0'>{detail.unit}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default CurrentDayDescription;
