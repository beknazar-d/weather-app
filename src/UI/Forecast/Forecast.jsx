import './Forecast.scss';
import dropdown from '../icon-dropdown.svg';
import sunny from '../icon-sunny.webp';
import { useState } from 'react';
import useWeatherData from '../../hooks/useWeatherData.js';
import { selectedCity } from '../../weatherSlice.js';
import { useSelector } from 'react-redux';
import cloud from '../icon-storm.webp';
import fog from '../icon-fog.webp';
import snow from '../icon-snow.webp';
import rain from '../icon-drizzle.webp';
import overcast from '../icon-overcast.webp';
import partlycloudy from '../icon-partly-cloudy.webp';
import storm from '../icon-storm.webp';

export const WeatherItem =({time,grad,code})=>{

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
    return(
        <div className='forecast_list_item'>
            <div className='list_item_left'>
            <img src={getWeatherIcon(code)} alt="cloud" />
            <span>{time?time:null}</span>
            </div>
            <span className='list_item_grad'>{grad?grad:null}60°</span>
        </div>
    )
};



const DayList = ({setShow,show,setActiveDay})=>{
    const city = useSelector(selectedCity);
    const {daysOfWeek} = useWeatherData(city);

    return(
    <div className={show?'day_list open':'day_list'}>
            <ul className='inner_list'>
                {
                    Object.keys(daysOfWeek)?.map(item=>{
                        return(
                            <li onClick={(e)=>{
                                
                                setActiveDay(item);
                                setShow(false);
                            }} className='day_name' key={item}>{item}</li>
                        )
                    })
                }
            </ul>
    </div>
    )
};



const Forecast =({activeDay,setActiveDay,children,data})=>{
    const [show,setShow]=useState(false);


    return(
        <div className='hourly_forecast'>
            <DayList setShow={setShow} setActiveDay={setActiveDay} show={show}/>
                <section className='forecast_header'>
                        <h3>Hourly forecast</h3>
                        <div className='day_selector'>
                            <span>{activeDay}</span>
                            <button onClick={()=>{setShow(show=>!show)}} className='selector_btn'><img className={show?'rotate':''} src={dropdown} alt="dropdown" /></button>
                        </div>
                </section>
                <section className='forecast_content'>
                <ul className='list_wrapper'>
                    {children}
                </ul>
                </section>
        </div>
    )
};
export default Forecast;