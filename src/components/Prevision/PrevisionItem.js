const PrevisionItem = ({ temp, icon, dateString }) => {
    const date = new Date(dateString);
    //heure + 3 pour correspondre aux prévisions (sinon affiche un créneau déjà passé)
    const hours = (date.getHours()+3===24?0:date.getHours()+3);
    const currentDate = `${date.getDate()}/${date.getMonth() + 1}`;
    const timeSlot = `${date.getHours()}h-${hours}h`;
    const numberConvertToDay = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    return (
        <>
            {/* changement de ligne si jour suivant */}
            {!date.getHours() &&
                <p className="dayTitle">
                    {numberConvertToDay[date.getDay()]} {date.getDate()}/{date.getMonth() + 1}
                </p>}

            <article className="prevision-item" >
                <p>{currentDate}</p>
                <p>{timeSlot}</p>
                <p className="prevision-item-temperature" > {Math.round(temp)}°C </p>
                <img className="prevision-item-icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
            </article>

        </>
    )
}

export default PrevisionItem;