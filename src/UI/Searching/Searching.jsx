import './Searching.scss';

const Searching=()=>{

    return (
        <div className='searching_place'>
            <input className='search_input' type="text" name="search-place" placeholder='Search for place..' />
            <button className='search_btn'>
                Search
            </button>
        </div>
    )
};

export default Searching;