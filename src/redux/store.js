import { configureStore } from '@reduxjs/toolkit';
import forecastReducer from './features/forcastSlice';
import cityLatLongReducer from './features/getLatLongSlice';

const store = configureStore({
    reducer: {
        forecast: forecastReducer,
        city: cityLatLongReducer,
    },
});

export default store;
