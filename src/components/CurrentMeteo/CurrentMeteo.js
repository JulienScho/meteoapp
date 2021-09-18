import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const CurrentMeteo = ({ zipCode, city }) => {
    const [currentTemp, setCurrentTemp] = useState('##');
    const [weatherIcon, setweatherIcon] = useState('01d')
    const [humidity, setHumidity] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);

    const currentCity = city.toLowerCase().split("");
    currentCity[0] = currentCity[0].toUpperCase();


    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},fr&appid=e04ea56a69066d943d8974856fdc59a0&units=metric`;

        axios.get(url)
            .then((response) => {
                setCurrentTemp(Math.round(response.data.main.temp));
                setweatherIcon(response.data.weather[0].icon);
                setHumidity(response.data.main.humidity);
                setWindSpeed(Math.round(response.data.wind.speed));
                console.log(response.data);

                // Modification du favicon
                let link = document.querySelector("link[rel~='icon']");
                if (!link) {
                    link = document.createElement('link');
                    link.rel = 'icon';
                    document.getElementsByTagName('head')[0].appendChild(link);
                }
                link.href = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

            }).catch((error) => {
                console.log(error);
            })
    }, [zipCode, weatherIcon]);

    const date = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };

    return (
        <article className="meteo" >
            <div className="meteo-container">
                <div className="meteo-infos" >
                    <h3 className="meteo-city" >{currentCity}</h3>
                    <p className="meteo-code" > {zipCode}</p>
                </div>
                <p className="meteo-temperature" > {currentTemp}°C </p>
            </div>

            <div className="infosContainer">
                <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="icon" />
                <div>
                    <p className="infosSupp">Hygrométrie : {humidity}%</p>
                    <p className="infosSupp">Vent : {windSpeed}km/h</p>
                </div>
            </div>

            <p>{date.toLocaleDateString("fr-FR", options)}</p>
        </article>
    )
};

export default CurrentMeteo;