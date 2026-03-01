import './menu.scss';


const Menu = ({show}) => {
    const listOfMenu = [
        { Temperature: ['Celsius(°C)', 'Fahrenheit(°F)'] },
        { WindSpeed: ['km/h', 'mph'] },
        { Precipitation: ['Millimeters(mm)', 'Inches(in)'] }
    ];
    console.log(listOfMenu.map(item => {
        return Object.values(item)
    }))
    return (
        <div className={show?'dropdown_menu':'hide'}>
                <h4>Switch to Imperial</h4>
            <ul>
                {
                    listOfMenu.map((item) => {
                        return (
                            <>
                                <span key={item}>
                                    {Object.keys(item)}
                                </span>
                                <ul key={item} >{Object.values(item)[0].map(option => (
                                    <li key={option}>{option}</li>
                                ))}</ul>
                                <hr />
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )
};
export default Menu;
