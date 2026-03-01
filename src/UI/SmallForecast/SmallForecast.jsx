import './SmallForecast.scss';
import cloud from '../icon-storm.webp';


const SmallForecast =()=>{
    return(
        <div className='small_forecast'>
            <span>Tue</span>
            <img src={cloud} alt="cloud" />
            <footer className='small_forecast_footer'>
                <span>60°</span>
                <span>70°</span>
            </footer>
        </div>
    )
};

export default SmallForecast;