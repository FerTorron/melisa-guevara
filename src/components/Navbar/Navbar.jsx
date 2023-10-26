import './Navbar.css'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [scroll, setScroll] = useState(0);
    const [headerClass, setHeaderClass] = useState('');
    const [navUlClass, setnavUlClass] = useState('');
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

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const mostrarImagen = () => {
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 20) {
            return <img className='logoNavClass logoImg' src="/img/logo/logoMg2.png" alt="Logo de Melisa Guevara Pequeña" />;
        } else if (windowWidth < 1150) {
            return <img className='logoImg logoSmall' src="/img/logo/logoCompleto.png" alt="Logo de Melisa Guevara Pequeña" />;
        } else {
            return <img className='logoImg' src="/img/logo/logoMg.png" alt="Logo de Melisa Guevara Grande" />;
        }

    };

    // SCROLL NAV
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 20) {
            setHeaderClass('nav-mod');
            setnavUlClass('ul-nav-mod')
        } else {
            setHeaderClass('');
            setnavUlClass('')
        }

        setScroll(scrollTop);
    };

    return (
        <header className={headerClass}>
            {mostrarImagen()}
            <nav className={navOpen ? "navResponsive" : null}>
                <img src="/img/icons/close.svg" onClick={menuBtn} className='menuBtn' alt="" />
                <ul className={navUlClass}>
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