import './WeatherSidebar.scss';
import Forecast from '../../UI/Forecast/Forecast';
import { WeatherItem } from '../../UI/Forecast/Forecast';

const WeatherSidebar = ({data,setActiveDay,activeDay}) => {

    const dataCode=data.filter((item)=>{
        
        return item.code
    }) 

    const dataTemp = data.map((item)=>{
        return item.temp;
    })
    
const newData = data.map((item)=>{
    return new Date(item.time).toLocaleTimeString('en-US',{
        hour:'numeric'
    })
});




    return (
        <div className='weather_list'>
            <Forecast 
            activeDay={activeDay} setActiveDay={setActiveDay}
            data={data}
            >
                {newData.map((item,i) => (
                    <li key={i}><WeatherItem time={item} code={dataCode[i]} grad={dataTemp[i]} /></li>
                ))}
            </Forecast>
        </div>
    );
};

export default WeatherSidebar;