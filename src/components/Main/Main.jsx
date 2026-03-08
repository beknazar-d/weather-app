import './Main.scss';
import { useSelector } from 'react-redux';
import { selectedCity, selectCityResults } from '../../weatherSlice';
import useWeatherData from '../../hooks/useWeatherData';
import WeatherHeader from '../WeatherHeader/WeatherHeader';
import WeatherStats from '../WeatherStats/WeatherStats';
import WeatherSidebar from '../WeatherSidebar/WeatherSidebar';
import WCard from '../../UI/WeatherCard/WeatherCard';
import DailyForecast from '../DailyForecast/DailyForecast';
import Searching from '../../UI/Searching/Searching';
import { useState } from 'react';

const Main = () => {
  
  const city = useSelector(selectedCity);
  const { daysOfWeek,current, formatted, currentTP } = useWeatherData(city);

  const [activeDay,setActiveDay] = useState('Monday');
  const activeDayData = daysOfWeek[activeDay] || [];


  return (
    <div className='main_container'>
      <WeatherHeader />
      <section className='main_body'>
        <div className='body_search'>
          <Searching />
        </div>
        <div className='body_cards'>
          <div className='weather_cards'>
            <WCard grad={currentTP} data={formatted} location={`${city ? city.name : 'Choose location'},${city ? city.country : 'enter city name'}`} />
            <WeatherStats current={current} />
            <section className='main_footer'>
              <DailyForecast />
            </section>
          </div>
          <WeatherSidebar
            data={activeDayData}
            activeDay={activeDay}
            setActiveDay={setActiveDay}
          />
        </div>
      </section>
    </div>
  );
};

export default Main;