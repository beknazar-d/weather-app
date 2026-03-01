import './Forecast.scss';
import dropdown from '../icon-dropdown.svg';
import sunny from '../icon-sunny.webp';
export const WeatherItem =()=>{
    return(
        <div className='forecast_list_item'>
            <div className='list_item_left'>
            <img src={sunny} alt="cloud" />
            <span>3PM</span>
            </div>
            <span className='list_item_grad'>60°</span>
        </div>
    )
};

const Forecast =(props)=>{
    const arrs=[1,2,3,4,5,6,7];
    
    return(
        <div className='hourly_forecast'>
                <section className='forecast_header'>
                        <h3>Hourly forecast</h3>
                        <div className='day_selector'>
                            <span>Monday</span>
                            <button className='selector_btn'><img src={dropdown} alt="dropdown" /></button>
                    </div>
                </section>
                <section className='forecast_content'>
                <ul className='list_wrapper'>
                    {props.children}
                </ul>
                </section>
        </div>
    )
};
export default Forecast;