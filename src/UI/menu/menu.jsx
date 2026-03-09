import './menu.scss';
import checkmark from '../icon-checkmark.svg';
import { useState } from 'react';
import {setMode,selectWeatherMode} from '../../weatherSlice';
import { useSelector,useDispatch } from 'react-redux';


const Menu = ({show}) => {

    const mode = useSelector(selectWeatherMode);
    const dispatch = useDispatch();
    const [imperialMode, setImperialMode] = useState(false);
    
    const listOfMenu = [
        { Temperature: ['Celsius(°C)', 'Fahrenheit(°F)'] },
        { WindSpeed: ['km/h', 'mph'] },
        { Precipitation: ['Millimeters(mm)', 'Inches(in)'] }
    ];

    const imperialOptions = ['Fahrenheit(°F)', 'mph', 'Inches(in)'];
    const metricOptions = ['Celsius(°C)', 'km/h', 'Millimeters(mm)'];

    return (
        <div className={show ? 'dropdown_menu open' : 'dropdown_menu'}>
            <h4 onClick={() => {
                setImperialMode(!imperialMode);
                dispatch(setMode(imperialMode));
            }}>
                {mode ? 'Switch to Metric' : 'Switch to Imperial'}
            </h4>
            <ul className='dropdown_list_wrapper'>
                {listOfMenu.map((item) => {
                    const group = Object.keys(item)[0];
                    const options = item[group];

                    return (
                        <div className='dropdown_inner_container' key={group}>
                            <span>{group}</span>
                            {options.map((option) => (
                                <li key={option}>
                                    {option}
                                    {mode
                                        ? imperialOptions.includes(option) && <img src={checkmark} alt="checkmark" />
                                        : metricOptions.includes(option) && <img src={checkmark} alt="checkmark" />
                                    }
                                </li>
                            ))}
                            <hr />
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default Menu;