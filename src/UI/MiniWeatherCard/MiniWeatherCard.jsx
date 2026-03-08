import './MiniWeatherCard.scss';
import { selectCityForecast } from '../../weatherSlice';
import { useSelector } from 'react-redux';

const MiniWCard=({header,grad})=>{

    const data = useSelector(selectCityForecast);
    const {current}=data || {};

    


    return (
        <div className='small_wcard'>
            <div className='small_card_top'>
                <p>{header?header:'Feels like'}</p>
            </div>
            <div className='small_card_bottom'>
                <span>{grad?`${grad}`:'65°'}</span>
            </div>
        </div>
    )
};
export default MiniWCard;
