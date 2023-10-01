import './Navbar.css'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    const menuBtn = () => {
        setNavOpen(!navOpen)
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Limpia el evento al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const mostrarImagen = () => {
        if (windowWidth < 1150) {
            return <img className='logoSmall logoImg' src="/img/logo/logoMg2.png" alt="Logo de Melisa Guevara Pequeña" />;
        } else {
            return <img className='logoImg' src="/img/logo/logoMg.png" alt="Logo de Melisa Guevara Grande" />;
        }
    };

    return (
        <header>
            {mostrarImagen()}
            {/* <img className='logoEnable' src="/img/logo/logoMg.png" alt="Logo Melisa Guevara" /> */}
            {/* <img className='logoDisable' src="/img/logo/logoMg2.png" alt="Logo Melisa Guevara" /> */}
            <nav className={navOpen ? "navResponsive" : null}>
                <img src="/img/icons/close.svg" onClick={menuBtn} className='menuBtn' alt="" />
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Creaciones</a></li>
                    <li><a href="#">Joyas Recicladas</a></li>
                    <li><a href="#">Melisa Guevara</a></li>
                    <li><a href="#">Novedades</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <img src="/img/icons/menu.svg" onClick={menuBtn} className='menuBtn' alt="" />
        </header>
    )
}

export default Navbar