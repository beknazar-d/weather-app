import './SmallForecast.scss';
import cloud from '../icon-storm.webp';
import fog from '../icon-fog.webp';
import snow from '../icon-snow.webp';
import rain from '../icon-drizzle.webp';
import overcast from '../icon-overcast.webp';
import partlycloudy from '../icon-partly-cloudy.webp';
import sunny from '../icon-sunny.webp';
import storm from '../icon-storm.webp';
const SmallForecast = ({ min, max, day, code }) => {


    const getWeatherIcon = (code) => {
        if (code === 0) return sunny;
        if (code >= 1 && code <= 3) return overcast;
        if (code === 2) return partlycloudy;
        if (code >= 61 && code <= 67) return rain;
        if (code === 45 || code === 48) return fog;
        if (code >= 71 || code || code <= 75) return snow;
        if (code >= 95) return storm;
        return cloud;
    };

    return (
        <div className='small_forecast'>
            <span>{day ? day : 'Нет данных'}</span>
            <img src={getWeatherIcon(code)} alt="cloud" />
            <footer className='small_forecast_footer'>
                <span>{min ? min : 'нет данных'}°</span>
                <span>{max ? max : 'Нет данных'}°</span>
            </footer>
        </div>
    )
};

export default SmallForecast;