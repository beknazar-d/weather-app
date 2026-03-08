import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, selectCityForecast } from '../weatherSlice';

const useWeatherData = (city) => {
    const dispatch = useDispatch();
    const cityForecast = useSelector(selectCityForecast);


    useEffect(() => {
        if (!city) return;
        const coords = { latitude: city.latitude, longitude: city.longitude };
        dispatch(fetchWeather(coords));
    }, [city, dispatch]);


    const { current } = cityForecast || {};
    const { time = 'нет данных' } = current || {};


    const formatted = new Date(time).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });


    const hourlyByDay = {};
    cityForecast?.hourly.time.forEach((time, i) => {
        const day = time.split("T")[0];
        if (!hourlyByDay[day]) hourlyByDay[day] = [];
        hourlyByDay[day].push({
            time,
            temp: cityForecast.hourly.temperature_2m[i],
            code: cityForecast.hourly.weather_code[i]
        });
    });


    const daysOfWeek = {};
    Object.entries(hourlyByDay).forEach(([date, value]) => {
        const day = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
        daysOfWeek[day] = value;
    });

    

    return {
        current,
        formatted,
        hourlyByDay,
        daysOfWeek,
        currentTP: current?.temperature_2m
    };
};

export default useWeatherData;