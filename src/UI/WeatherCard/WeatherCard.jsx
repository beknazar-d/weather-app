import './WeatherCard.scss';
import sunny from '../icon-sunny.webp';
import cloud from '../icon-storm.webp';
import fog from '../icon-fog.webp';
import snow from '../icon-snow.webp';
import rain from '../icon-drizzle.webp';
import overcast from '../icon-overcast.webp';
import partlycloudy from '../icon-partly-cloudy.webp';
import storm from '../icon-storm.webp';
import loading from '../icon-loading.svg';
import {selectWeatherStatus } from '../../weatherSlice';
import { useSelector } from 'react-redux';
const WCard = ({ location, data, img, grad }) => {
    const status = useSelector(selectWeatherStatus);
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
        <div className='weather_card'>
            {status === 'loading' ?
                <div className='loading'><img src={loading} alt="loading-icon" />Loading...</div>
                :
                <>
            <div className='weather_card_left'>
                <h1>{location?location:'Berlin, Germany'}</h1>
                <p>{data?data:'Tuesday, Aug 5, 2026'}</p>
            </div>
            <div className='weather_card_right'>
                <img src={getWeatherIcon(img)} alt="sun" />
                <span>{grad?`${grad}°`:'20°'}</span>
            </div>
                </>
                        }
        </div>
    )
};
export default WCard;