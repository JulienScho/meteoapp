import Input from './Input/Input';
import Select from './Select/Select';
import { useState } from 'react';

import './style.css';

const Form = ({ city, setCity, zipCode, setZipCode, inputValue, setInputValue }) => {
    const [apiCityData, setApiCityData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setZipCode(apiCityData[0].code);
        localStorage.setItem('zipCode', apiCityData[0].code)
        setCity(apiCityData[0].city);
        localStorage.setItem('city', apiCityData[0].city)
        setInputValue('');
    }

    return (
        <form className="cityForm" onSubmit={handleSubmit}>
            <Input setInputValue={setInputValue} inputValue={inputValue} />

            {apiCityData.length > 0 && <span>{apiCityData.length} correspondance{apiCityData.length > 1 && "s"}</span>}
            {inputValue.length > 2 && apiCityData.length === 0 && <span>Aucune correspondance</span>}
            
            {(apiCityData.length === 1) && <button type="submit">Valider</button>}
            <Select
                inputValue={inputValue}
                setInputValue={setInputValue}
                apiCityData={apiCityData}
                setApiCityData={setApiCityData}
                setCity={setCity}
                setZipCode={setZipCode}
            />            
        </form>
    )
}

export default Form;