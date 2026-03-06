import './Main.scss';
import { useRef, useState, useEffect } from 'react';
import WCard from '../../UI/WeatherCard/WeatherCard';
import DailyForecast from '../DailyForecast/DailyForecast';
import MiniWCard from '../../UI/MiniWeatherCard/MiniWeatherCard';
import Searching from '../../UI/Searching/Searching';
import Forecast from '../../UI/Forecast/Forecast';
import { WeatherItem } from '../../UI/Forecast/Forecast';
import Menu from '../../UI/menu/menu';
import { fetchWeather, selectCityForecast,selectedCity ,selectCityResults} from '../../weatherSlice';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../UI/logo.svg';
import units from '../../UI/icon-units.svg';
import arrow from '../../UI/icon-dropdown.svg'
const Main = () => {
  const ref = useRef(null); 
  const arr = [1, 2, 3, 4];
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const city = useSelector(selectedCity);
  const cityForecast = useSelector(selectCityForecast);
  const cityName = useSelector(selectCityResults);




useEffect(()=>{
  if(!city) return;
  const coords = {latitude:city.latitude, longitude:city.longitude};
  dispatch(fetchWeather(coords));
  
},[city,dispatch]);
  
  console.log(cityForecast)
  
 const { time = 'нет данных' } = cityForecast?.current || {};

  const formatted = new Date(time).toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

const currentTP=cityForecast?.current?.temperature_2m||[];







  return (
    <div ref={ref} className='main_container'>
      <section className='main_header'>
        <div className='header_top'>
          <img src={logo} alt="logo" />
          <div className='header_dropdown'>
            <button><img src={units} alt="units" /></button>
            <span>Units</span>
            <button onClick={() => { setShow(show => !show) }}><img className={show ? 'rotate' : ''} src={arrow} alt="arrow-down" /></button>
            <Menu show={show} />
          </div>
        </div>
        <div className='header_text'>
          How's the sky looking today?
        </div>
      </section>
      <section className='main_body'>
        <div className='body_search'>
          <Searching />
        </div>
        <div className='body_cards'>
          <div className='weather_cards'>
            <WCard grad={currentTP} data={formatted} location={`${city?city.name:'Choose location'},${city?city.country:'enter city name'}`} />
            <div className='mini_cards'>
              {arr.map(item => {
                return (
                  <MiniWCard key={item} />
                )
              })}
            </div>
            <section className='main_footer'>
              <DailyForecast />
            </section>
          </div>
          <div className='weather_list'>
            <Forecast>
              {arr.map(item => {
                return (
                  <li key={item}><WeatherItem /></li>
                )
              })}
            </Forecast>
          </div>
        </div>

      </section>
    </div>
  )
};
export default Main;