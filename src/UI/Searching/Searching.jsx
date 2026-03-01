import './Searching.scss';
import lupa from '../../UI/icon-search.svg';
const Searching=()=>{

    return (
        <div className='searching_place'>
            <div className='search_icon'>
            <img  src={lupa} alt="search-icon" />
            </div>
            <input className='search_input' type="text" name="search-place" placeholder='Search for place...' />
            <button className='search_btn'>
                Search
            </button>
        </div>
    )
};

export default Searching;