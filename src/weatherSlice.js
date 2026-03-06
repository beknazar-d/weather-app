import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    cityForecast:null,
    cityResults:[],
    selectedCity:null,
    status:'idle',
    error:null
}

export const fetchWeather = createAsyncThunk('weather/fetchWeather',async(coords)=>{
    const { latitude, longitude } = coords;
    const res = await fetch(
`https://api.open-meteo.com/v1/forecast
?latitude=${latitude}
&longitude=${longitude}
&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code
&hourly=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation_probability,weather_code
&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code
&timezone=auto`
);
    const data = await res.json();
    return data
});

export const fetchCity = createAsyncThunk('city/fetchCity',async(name)=>{
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${name}`);
    const data = await res.json();
    return data
});

const weatherSlice = createSlice({
    name:'weather',
    initialState,
    reducers:{
        setCity:(state,action)=>{
            state.selectedCity=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchWeather.pending,(state)=>{
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchWeather.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.cityForecast =action.payload;

        })
        .addCase(fetchWeather.rejected,(state,action)=>{
            state.status = 'failed';
            state.error = action.error?.message||'Error';
        })
        .addCase(fetchCity.pending,(state)=>{
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchCity.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.cityResults = action.payload;
        })
        .addCase(fetchCity.rejected,(state,action)=>{
            state.status='failed';
            state.error=action.error?.message||'Error';
        })
    }
});


export default weatherSlice.reducer;

export const {setCity} = weatherSlice.actions;
export const selectCityForecast = (state) => state.weather.cityForecast;
export const selectCityResults = (state) => state.weather.cityResults;
export const selectedCity =(state) =>state.weather.selectedCity;
export const selectWeatherStatus = (state) => state.weather.status;
export const selectWeatherError = (state) => state.weather.error;

