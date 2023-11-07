import { useState, useEffect } from 'react';
import './CardFront.css'

const CardFront = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const mostrarImagen = () => {
        if (windowWidth > 1150) {
            return <img src="/img/melisaCard.webp" alt="Melisa" />
        } else if (windowWidth < 1150) {
            return <img src="/img/bannerMelisa.webp" alt="Melisa" />
        }

    };
    return (
        <div id='inicioMelisa' className='cardFront'>
            <div className="leftCard">
                <div className="titleCard">
                    <h2>Joyeria</h2>
                    <h2><span>Sustentable</span></h2>
                </div>
                <p className='enableResponsive'>Somos un emprendimiento que valora la belleza y la responsabilidad ambiental.</p>
                <p className='disableResponsive'>Somos un emprendimiento que valora la belleza y la responsabilidad ambiental, creamos joyas que reflejan la elegancia y el compromiso con un planeta más limpio y sostenible.</p>
            </div>
            <div className="rightCard">
                {mostrarImagen()}
                {/* <img src="/img/melisaCard.png" alt="Melisa" /> */}
            </div>
        </div>
    )
}

export default CardFront