import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const Osh = {
  admin1: "Osh Region",
  admin1_id: 1346798,
  country: "Kyrgyzstan",
  country_code: "KG",
  country_id: 1527747,
  elevation: 988,
  feature_code: "PPLA",
  id: 1527534,
  latitude: 40.52828,
  longitude: 72.7985,
  name: "Osh",
  population: 322164,
  timezone: "Asia/Bishkek"
};
const initialState = {
    cityForecast:null,
    cityResults:[],
    selectedCity:Osh,
    imperialMode:false,
    status:{
        city:'idle',
        weather:'idle'
    },
    error:{
        city:null,
        weather:null
    }
}

const cord={
    latitude:'40.52828',
    longitude:'72.7985'
}

/* const res = await fetch(); */

export const fetchWeather = createAsyncThunk('weather/fetchWeather',async({latitude,longitude,imperialMode})=>{
    // const { latitude, longitude } = coords;
    const imperialFetch=`https://api.open-meteo.com/v1/forecast
?latitude=${latitude ? latitude : cord.latitude}
&longitude=${longitude ? longitude : cord.longitude}
&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code
&hourly=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation_probability,weather_code
&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code
&timezone=auto
&temperature_unit=fahrenheit
&wind_speed_unit=mph
&precipitation_unit=inch`;

    const metricFetch=`https://api.open-meteo.com/v1/forecast
?latitude=${latitude ? latitude : cord.latitude}
&longitude=${longitude ? longitude : cord.longitude}
&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code
&hourly=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation_probability,weather_code
&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code
&timezone=auto
&wind_speed_unit=kmh`

    const res = await fetch(imperialMode?imperialFetch:metricFetch);
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
        },
        setMode:(state,action)=>{
            state.imperialMode=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchWeather.pending,(state)=>{
            state.status.weather = 'loading';
            state.error.weather = null;
        })
        .addCase(fetchWeather.fulfilled,(state,action)=>{
            state.status.weather = 'succeeded';
            state.cityForecast =action.payload;

        })
        .addCase(fetchWeather.rejected,(state,action)=>{
            state.status.weather = 'failed';
            state.error.weather = action.error?.message||'Error';
        })
        .addCase(fetchCity.pending,(state)=>{
            state.status.city = 'loading';
            state.error.city = null;
        })
        .addCase(fetchCity.fulfilled,(state,action)=>{
            state.status.city = 'succeeded';
            state.cityResults = action.payload;
        })
        .addCase(fetchCity.rejected,(state,action)=>{
            state.status.city='failed';
            state.error.city=action.error?.message||'Error';
        })
    }
});


export default weatherSlice.reducer;

export const {setCity,setMode} = weatherSlice.actions;
export const selectCityForecast = (state) => state.weather.cityForecast;
export const selectCityResults = (state) => state.weather.cityResults;
export const selectedCity =(state) =>state.weather.selectedCity;
export const selectWeatherStatus = (state) => state.weather.status.weather;
export const selectWeatherError = (state) => state.weather.error.weather;
export const selectCityStatus = (state) => state.weather.status.city;
export const selectWeatherMode = (state)=> state.weather.imperialMode;

