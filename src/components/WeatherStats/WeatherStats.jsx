import './WeatherStats.scss';
import MiniWCard from '../../UI/MiniWeatherCard/MiniWeatherCard';

const WeatherStats = ({ current }) => {
    const feelsLike = current?.apparent_temperature;
    const humidity = current?.relative_humidity_2m;
    const wind = current?.wind_speed_10m;
    const precipitation = current?.precipitation;

    const weatherArr = [
        [`${feelsLike}°`, 'FeelsLike'],
        [`${humidity}%`, 'Humidity'],
        [`${wind}mph`, 'Wind'],
        [`${precipitation} in`, 'Precipitation']
    ];

    return (
        <div className='mini_cards'>
            {weatherArr.map((item, index) => (
                <MiniWCard key={index} grad={item[0]} header={item[1]} />
            ))}
        </div>
    );
};

export default WeatherStats;