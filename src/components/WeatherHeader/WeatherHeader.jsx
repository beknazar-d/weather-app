import { useState } from 'react';
import './WeatherHeader.scss';
import logo from '../../UI/logo.svg';
import units from '../../UI/icon-units.svg';
import arrow from '../../UI/icon-dropdown.svg';
import Menu from '../../UI/menu/menu';

const WeatherHeader = () => {
    const [show, setShow] = useState(false);

    return (
        <section onClick={(e)=>{
            setShow(false)
        }} className='main_header'>
            <div className='header_top'>
                <img className='header_logo'
                 src={logo} alt="logo" />
                <div className='header_dropdown'>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setShow(show => !show)}}
                        ><img className={show ? 'wheel' : 'backspin'}     src={units} alt="units" /></button>
                    <span>Units</span>
                    <button >
                        <img className={show ? 'rotate' : ''} src={arrow} alt="arrow-down" />
                    </button>
                    <Menu show={show} />
                </div>
            </div>
            <div className='header_text'>How's the sky looking today?</div>
        </section>
    );
};

export default WeatherHeader;