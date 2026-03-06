import './menu.scss';
import checkmark from '../icon-checkmark.svg';
import { useState } from 'react';

const Menu = ({show}) => {
    const listOfMenu = [
        { Temperature: ['Celsius(°C)', 'Fahrenheit(°F)'] },
        { WindSpeed: ['km/h', 'mph'] },
        { Precipitation: ['Millimeters(mm)', 'Inches(in)'] }
    ];

    const [selected,setSelected] = useState([]);

    const toggleOption = (option) => {
    setSelected((prev) =>
    prev.includes(option)
        ? prev.filter((i) => i !== option) 
        : [...prev, option]                
    );
};
const chooseOption = (group, option) => {
    setSelected(prev => ({
    ...prev,
    [group]: option,
    }));
};
    return (
        <div className={show?'dropdown_menu open':'dropdown_menu'}>
                <h4>Switch to Imperial</h4>
            <ul className='dropdown_list_wrapper'>
                {
                listOfMenu.map((item) => {
                const group = Object.keys(item)[0];      
                const options = item[group];          

            return (
                <div className='dropdown_inner_container' key={group}>
                <span>{group}</span>

                    {options.map((option) => (
                    <li
                    key={option}
                    onClick={() => chooseOption(group, option)}
                    >
                    {option}
                    {selected[group] === option && (
                        <img src={checkmark} alt="checkmark" />
                    )}
                    </li>
                ))}


                <hr />
                </div>
                );
            })
            }
            </ul>
        </div>
    )
};
export default Menu;
