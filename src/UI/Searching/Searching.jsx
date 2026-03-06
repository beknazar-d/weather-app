import './Searching.scss';
import lupa from '../../UI/icon-search.svg';
import { fetchCity, selectCityResults, setCity, selectedCity } from '../../weatherSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect,useRef } from 'react';

const SearchItem = ({ name, country, onClick }) => {
    return (
        <div className='city_option' onClick={onClick}>
            <span>{name}, {country}</span>
        </div>
    );
};

const Searching = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const cityName = useSelector(selectCityResults);
    const city = useSelector(selectedCity);
    const lastSearch = useRef('');
    const fetchName = (value) => {
        dispatch(fetchCity(value));
    };

    const selectOneCity = (id) => {
        const one = cityName?.results?.find(item => item.id === id);
        if (!one) return;
        dispatch(setCity(one));
        setName('');
    };
    useEffect(() => {

        const correct= name.trim();
        if (correct.length < 3) return;
        if(correct===lastSearch.current) return;
        const timer = setTimeout(() => {
            lastSearch.current=correct;
            dispatch(fetchCity(correct));
        }, 500);

        return () => clearTimeout(timer);

    }, [name]);


    return (
        <div className='searching_place'>
            <div className='search_icon'>
                <img src={lupa} alt="search-icon" />
            </div>

            <input
                className='search_input'
                value={name}
                onChange={(e) => {
                    const value = e.target.value;
                    setName(value);
                }}
                type="text"
                name="search-place"
                placeholder='Search for place...'
            />

            <button
                onClick={() => fetchName(name)}
                className='search_btn'
            >
                Search
            </button>

            <div className={name ? 'result_container' : 'close'}>
                {cityName?.results?.map((item) => (
                    <SearchItem
                        key={item.id}
                        name={item.name}
                        country={item.country}
                        onClick={() => selectOneCity(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Searching;