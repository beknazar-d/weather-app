import './Main.scss';
import WCard from '../../UI/WeatherCard/WeatherCard';
import MiniWCard from '../../UI/MiniWeatherCard/MiniWeatherCard';
import Searching from '../../UI/Searching/Searching';
const Main =()=>{
    
    const arr =[1,2,3,4];
    return(
        <div className='main_container'>
          <Searching/>
            <div>
            <WCard/>
            </div>
            <div className='main_inner_bottom'>
            {arr.map((item)=>{
              return(
                <MiniWCard/>
              )
            })}
            </div>
        </div>
    )
};
export default Main;