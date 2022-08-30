import React, { useState } from 'react';

import styles from './Form.module.css';
import { useDispatch } from "react-redux"
import { getForecast } from '../../redux/features/forcastSlice';
import { AsyncPaginate } from 'react-select-async-paginate';

import { geoCitiesOptions } from './citiesApiCall';
import { API_URL } from './citiesApiCall';
import "./select.css"

const Form = ({ onSearchChange }) => {

    const dispatch = useDispatch()
    const [location, setLocation] = useState("")



    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (!location || location === "") return
        dispatch(getForecast(location.label)) // use lat and lon date to get the weather date from API
    }

    const handleOnChange = (searchData) => {
        setLocation(searchData)
        onSearchChange(searchData)
    }

    const loadOptions = (inputValue) => {
        return fetch(`${API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`, geoCitiesOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude}`,
                            label: `${city.name}`
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <form onSubmit={handleOnSubmit} className={styles.form}>
            {/* <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            /> */}
            <AsyncPaginate
                placeholder="Search For City"
                debounceTimeout={700}
                value={location}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />

            <button type="submit" className={styles.button} onClick={handleOnSubmit}>
                SEARCH
            </button>
        </form>
    );
};


export default Form;

