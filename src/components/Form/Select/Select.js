import { useEffect } from "react";
import axios from 'axios';

const Select = ({ inputValue, apiCityData, setApiCityData, setCity, setZipCode, setInputValue }) => {

    useEffect(() => {
        //Recherche seulement au delà de 3 lettres ou chiffre renseignés
        if (inputValue.length > 2) {
            axios.get(`https://vicopo.selfbuild.fr/cherche/${inputValue}`)
                .then((response) => {
                    setApiCityData(response.data.cities);
                })
                .catch((error) => console.log(error))
        } else { setApiCityData([]) }

    }, [inputValue]);

    const handleChange = (e) => {
        const selectedCityData = e.target[e.target.selectedIndex].dataset;
        setZipCode(selectedCityData.code);
        localStorage.setItem('zipCode', selectedCityData.code)
        setCity(selectedCityData.city);
        localStorage.setItem('city', selectedCityData.city)
        setInputValue('');
        setApiCityData([])
    }


    return (
        <>
        {apiCityData.length>0 ? 
        <select onChange={handleChange}>
            {apiCityData.map(
                (objet) => (
                    <option key={objet.city + Math.random()}
                        data-city={objet.city}
                        data-code={objet.code}>
                        {objet.code}, {objet.city}
                    </option>
                )
            )}
        </select> :
        false
        }
        </>
    );
};

export default Select;
