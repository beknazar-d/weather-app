import './DailyForecast.scss';
import SmallForecast from '../../UI/SmallForecast/SmallForecast';
import { useSelector } from 'react-redux';
import { selectCityForecast } from '../../weatherSlice';
const DailyForecast = () => {




    const cityForecast = useSelector(selectCityForecast);

    const dailyMax = cityForecast?.daily?.temperature_2m_max || [];
    const dailyMin = cityForecast?.daily?.temperature_2m_min || [];
    const weatherCode = cityForecast?.daily?.weather_code || [];

    const arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
        <div className='daily_forecast'>
            <h2>Daily Forecast</h2>
            <section className='daily_weather_cards'>
                {arr.map((item, index) => {
                    return (
                        <SmallForecast code={weatherCode[index]} day={item} key={item} min={dailyMin[index]} max={dailyMax[index]} />
                    )
                })}
            </section>
        </div>
    )
};

export default DailyForecast;