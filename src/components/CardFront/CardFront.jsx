import './CardFront.css'

const CardFront = () => {
    return (
        <div className='cardFront'>
            <div className="leftCard">
                <div className="titleCard">
                    <h2>Joyeria</h2>
                    <h2><span>Sustentable</span></h2>
                </div>
                <p>Somos un emprendimiento que valora la belleza y la responsabilidad ambiental, creamos joyas que reflejan la elegancia y el compromiso con un planeta más limpio y sostenible.</p>
            </div>
            <div className="rightCard">
                <img src="/img/melisaCard.png" alt="Melisa" />
            </div>
        </div>
    )
}

export default CardFront