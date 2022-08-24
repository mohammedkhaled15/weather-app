import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    cityLatLong: '',
    error: '',
};
const ApiKey = 'f3df22d37e0ab270347f62a9b3d4cc89';
const basUrl = 'https://api.openweathermap.org/data/2.5/weather?';

export const getLatLong = createAsyncThunk('getLatLong', async location => {
    const response = await axios.get(`${basUrl}q=${location}&appid=${ApiKey}`);
    return response.data.coord;
});

const cityLatLongSlice = createSlice({
    name: 'city',
    initialState,
    extraReducers: builder => {
        builder.addCase(getLatLong.pending, state => {
            state.loading = true;
        });
        builder.addCase(getLatLong.fulfilled, (state, action) => {
            state.loading = false;
            state.cityLatLong = action.payload;
            state.error = '';
        });
        builder.addCase(getLatLong.rejected, (state, action) => {
            state.loading = false;
            state.cityLatLong = '';
            state.error = action.error.message;
        });
    },
});

export default cityLatLongSlice.reducer;
