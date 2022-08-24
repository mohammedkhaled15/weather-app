import React, { useState } from 'react';

import styles from './Form.module.css';
import { useSelector, useDispatch } from "react-redux"
// import { getLatLong } from '../../redux/features/getLatLongSlice';
import { getForecast } from '../../redux/features/forcastSlice';

const Form = () => {

    const dispatch = useDispatch()
    const cityForecast = useSelector(state => state.forecast)
    // const cityLatLong = useSelector(state => state.city)
    const [location, setLocation] = useState("")
    // const [latlon, setLatLon] = useState({})

    // useEffect(() => {
    //     console.log("latlon changed")
    // }, [latlon, dispatch, cityLatLong.cityLatLong])


    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (!location || location === "") return
        // console.log(location)
        // dispatch(getLatLong(location)) // get the lat and lon data from geo API
        dispatch(getForecast(location)) // use lat and lon date to get the weather date from API
        // setLatLon(cityLatLong.cityLatLong)
        // console.log(cityLatLong.cityLatLong)
    }
    // console.log(latlon)
    return (
        <form onSubmit={handleOnSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={handleOnSubmit}>
                SEARCH
            </button>
        </form>
    );
};


export default Form;

