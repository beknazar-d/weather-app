import './Forecast.scss';
import dropdown from '../icon-dropdown.svg';
import sunny from '../icon-sunny.webp';
import { useState } from 'react';
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
const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const DayList = ({show})=>{

    return(
    <div className={show?'day_list open':'day_list'}>
            <ul className='inner_list'>
                {
                    days.map(item=>{
                        return(
                            <li className='day_name' key={item}>{item}</li>
                        )
                    })
                }
            </ul>
    </div>
    )
};


const Forecast =(props)=>{
    const arrs=[1,2,3,4,5,6,7];
    const [show,setShow]=useState(false);

    return(
        <div className='hourly_forecast'>
            <DayList show={show}/>
                <section className='forecast_header'>
                        <h3>Hourly forecast</h3>
                        <div className='day_selector'>
                            <span>Monday</span>
                            <button onClick={()=>{setShow(show=>!show)}} className='selector_btn'><img className={show?'rotate':''} src={dropdown} alt="dropdown" /></button>
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