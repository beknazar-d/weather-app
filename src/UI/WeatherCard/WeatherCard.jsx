import './WeatherCard.scss';
import sunny from '../icon-sunny.webp';
const WCard =({location,data,img,grad})=>{
    return(
        <div className='weather_card'>
            <div className='weather_card_left'>
                <h1>{location?location:'Berlin, Germany'}</h1>
                <p>{data?data:'Tuesday, Aug 5, 2026'}</p>
            </div>
            <div className='weather_card_right'>
                <img src={sunny} alt="sun" />
                <span>{grad?`${grad}°`:'20°'}</span>
            </div>
        </div>
    )
};
export default WCard;