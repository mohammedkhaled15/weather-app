import React, { Fragment } from 'react';
import { useState } from 'react';

import Header from '../Header';
import styles from "./Page.module.css"
import Form from "./../Form"
import Loader from "./../Loader"
import Forecast from '../Forecast';
import { useSelector } from 'react-redux';

const Page = () => {
    const forecast = useSelector(state => state.forecast)
    // const [newSearch, setNewSearch] = useState(true)
    // const newSearchHandler = ()=>{
    //     setNewSearch(true)
    // }

    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
                {forecast.forecast.cod !== "200" && !forecast.loading && < Form />}
                {forecast.loading && <Loader />}
                {forecast.forecast.cod === "200" && <Forecast />}
            </div>
        </Fragment>
    );
};

export default Page;
