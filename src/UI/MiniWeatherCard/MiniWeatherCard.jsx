import './MiniWeatherCard.scss';

const MiniWCard=({header,grad})=>{
    return (
        <div className='small_wcard'>
            <div className='small_card_top'>
                <p>{header?header:'Feels like'}</p>
            </div>
            <div className='small_card_bottom'>
                <span>{grad?`${grad}°`:'65°'}</span>
            </div>
        </div>
    )
};
export default MiniWCard;
