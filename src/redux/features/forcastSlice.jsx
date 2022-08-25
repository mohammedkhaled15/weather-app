import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    forecast: [],
    error: '',
};
const ApiKey = 'f3df22d37e0ab270347f62a9b3d4cc89';
const basUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const basUrl5Daays = 'https://api.openweathermap.org/data/2.5/forecast?';


export const getForecast = createAsyncThunk('getForecast', async (location) => {
    const latlon = await axios.get(`${basUrl}q=${location}&appid=${ApiKey}`);
    const response = await axios.get(
        `${basUrl5Daays}units=metric&lat=${latlon.data.coord.lat}&lon=${latlon.data.coord.lon}&appid=${ApiKey}`
    );
    return response.data;
});
const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    extraReducers: builder => {
        builder.addCase(getForecast.pending, state => {
            state.loading = true;
        });
        builder.addCase(getForecast.fulfilled, (state, action) => {
            state.loading = false;
            state.forecast = action.payload;
            state.error = '';
        });
        builder.addCase(getForecast.rejected, (state, action) => {
            state.loading = false;
            state.forecast = [];
            state.error = "There is No Data For This City";
        });
    },
});

export default forecastSlice.reducer;
