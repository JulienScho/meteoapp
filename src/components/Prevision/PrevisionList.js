import axios from "axios";
import { useEffect, useState } from "react";
import PrevisionItem from "./PrevisionItem";

import './style.css';

const PrevisionList = ({ zipCode }) => {
    const [apiForecastData, setApiForecastData] = useState([]);
    
    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},fr&appid=e04ea56a69066d943d8974856fdc59a0&units=metric`;
        axios.get(url)
            .then((response) => {
                setApiForecastData(response.data.list)
            }).catch((error) => { console.log(error) })
    }, [zipCode]);

    return (
        <>
            <h2 className="listTitle">Prévisions à 5j</h2>
            <p className="dayTitle">Aujourd'hui</p>
            <section className="prevision--list">
                {apiForecastData.map((dataObject) => (
                    <PrevisionItem key={dataObject.dt_txt} temp={dataObject.main.temp} icon={dataObject.weather[0].icon} dateString={dataObject.dt_txt} />
                ))}
            </section>
        </>

    );
}

export default PrevisionList;