import './SobreMelisa.css'
import { useState, useEffect } from 'react'


const SobreMelisa = () => {
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

    const mostrarImagenResponsive = () => {
        const scrollTop = document.documentElement.scrollTop;

        if (windowWidth < 1150) {
            return <img src="/img/melisa.jpg" alt="Una mujer vestida de Blanco" />
        } else {
            return
        }

    };
    const mostrarImagen = () => {
        const scrollTop = document.documentElement.scrollTop;

        if (windowWidth > 1150) {
            return <img src="/img/melisa.jpg" alt="Una mujer vestida de Blanco" />
        } else {
            return
        }

    };
    return (
        <div className='sobreMelisa'>
            {mostrarImagen()}
            <div className="txtMelisa">
                <h2>Sobre Melisa Guevara</h2>
                {mostrarImagenResponsive()}
                <p>¡Hola! Soy Melisa, una mujer apasionada por el mundo de la joyería y comprometida con la sostenibilidad.</p>
                <p className='txtMelisaResponsive'>Mi misión es convertir lo que antes dañaba nuestra tierra en arte y diseño. Estas creaciones transmiten un mensaje de esperanza y concienciación.</p>
                <a href="#">CONOCEME</a>
            </div>
        </div>
    )
}

export default SobreMelisa