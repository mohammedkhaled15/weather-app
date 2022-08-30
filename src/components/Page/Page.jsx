import React, { Fragment } from 'react';

import Header from '../Header';
import styles from "./Page.module.css"
import Form from "./../Form"
import Loader from "./../Loader"
import Forecast from '../Forecast';
import Error from '../Error';
import { useSelector } from 'react-redux';

const Page = () => {
    const forecast = useSelector(state => state.forecast)
    const handleSearchChange = (searchData) => {
        console.log(searchData)
    }
    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
                {forecast.forecast.cod !== "200" && !forecast.loading && < Form onSearchChange={handleSearchChange} />}
                {forecast.loading && <Loader />}
                {forecast.forecast.cod === "200" && <Forecast />}
                {forecast.forecast.cod !== "200" && forecast.error && <Error message={forecast.error} />}
            </div>
        </Fragment>
    );
};

export default Page;
