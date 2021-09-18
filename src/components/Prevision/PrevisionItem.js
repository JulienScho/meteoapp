const PrevisionItem = ({ temp, icon, dateString }) => {
    const date = new Date(dateString);
    const currentDate = `${date.getDate()}/${date.getMonth() + 1} - ${date.getHours()}h`
    const numberConvertToDay=['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];

    return (
        <>
            {!date.getHours() && <p>{numberConvertToDay[date.getDay()]} {date.getDate()}/{date.getMonth() + 1}</p>}{/* changement de ligne si jour suivant */}
            <article className="prevision-item" >

                <p>{currentDate}</p>
                <p className="prevision-item-temperature" > {Math.round(temp)}°C </p>
                <img className="prevision-item-icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />

            </article>

        </>
    )
}

export default PrevisionItem;