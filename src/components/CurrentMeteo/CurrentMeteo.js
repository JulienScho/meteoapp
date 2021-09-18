import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const CurrentMeteo = ({ zipCode, city }) => {
    const [currentTemp, setCurrentTemp] = useState('##');
    const [weatherIcon, setweatherIcon] = useState('01d')

    const currentCity = city.toLowerCase().split("");
    currentCity[0] = currentCity[0].toUpperCase();


    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},fr&appid=e04ea56a69066d943d8974856fdc59a0&units=metric`;

        axios.get(url)
            .then((response) => {
                console.log(response.data)
                //TODO afficher premier 10ème
                setCurrentTemp(Math.round(response.data.main.temp))
                setweatherIcon(response.data.weather[0].icon);

                // Modification du favicon
                // var link = document.querySelector("link[rel~='icon']");
                // if (!link) {
                //     link = document.createElement('link');
                //     link.rel = 'icon';
                //     document.getElementsByTagName('head')[0].appendChild(link);
                // }
                // link.href = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            }).catch((error) => {
                console.log(error);
            })
    }, [zipCode]);

    return (
        <article className="meteo" >
            <div className="meteo-container">
                <div className="meteo-infos" >
                    <h3 className="meteo-city" >{currentCity}</h3>
                    <p className="meteo-code" > {zipCode}</p>
                </div>
                <p className="meteo-temperature" > {currentTemp}°C </p>
            </div>
            <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="icon" />
        </article>
    )
};

export default CurrentMeteo;