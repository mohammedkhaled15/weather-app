import { configureStore } from '@reduxjs/toolkit';
import forecastReducer from './features/forcastSlice';

const store = configureStore({
    reducer: {
        forecast: forecastReducer,
    },
});

export default store;
