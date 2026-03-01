import './DailyForecast.scss';
import SmallForecast from '../../UI/SmallForecast/SmallForecast';
const DailyForecast =()=>{

const arr = [1,2,3,4,5,6,7];
    return (
        <div className='daily_forecast'>
            <h2>Daily Forecast</h2>
            <section className='daily_weather_cards'>
            {arr.map((item)=>{
                return (
                    <SmallForecast key={item}/>
                )
            })}
            </section>
        </div>
    )
};

export default DailyForecast;