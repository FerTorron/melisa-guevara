import './Navbar.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [scroll, setScroll] = useState(0);
    const [headerClass, setHeaderClass] = useState('');
    const [navUlClass, setNavUlClass] = useState('');
    const [navImgClass, setNavImgClass] = useState('linkImg logoSmall');
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
            return <img className='logoNavClass logoImg' src="/img/logo/logoMg2.png" onClick={scrollToTop} alt="Logo de Melisa Guevara Pequeña" />;
        } else if (windowWidth < 1150) {
            return <img className='logoImg logoSmall' src="/img/logo/logoCompleto.png" onClick={scrollToTop} alt="Logo de Melisa Guevara Pequeña" />;
        } else {
            return <img className='logoImg' src="/img/logo/logoMg.png" onClick={scrollToTop} alt="Logo de Melisa Guevara Grande" />;
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
            setNavUlClass('ul-nav-mod')
            setNavImgClass('linkImg logoNavClass')
        } else {
            setHeaderClass('');
            setNavUlClass('')
            setNavImgClass('linkImg logoSmall')
        }

        setScroll(scrollTop);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className={headerClass}>
            <Link className={navImgClass} to="/">
                {mostrarImagen()}
            </Link>
            <nav className={navOpen ? "navResponsive" : null}>
                <img src="/img/icons/close.svg" onClick={menuBtn} className='menuBtn' alt="" />
                <ul className={navUlClass}>
                    <li><a href="#inicioMelisa">Inicio</a></li>
                    <li><a href="#creaciones">Creaciones</a></li>
                    <li><a href="#joyasRecicladas">Joyas Recicladas</a></li>
                    <li><a href="#melisa">Melisa Guevara</a></li>
                    <li><a href="#novedades">Novedades</a></li>
                    <li><a href="#footer">Contacto</a></li>
                </ul>
            </nav>
            <img src="/img/icons/menu.svg" onClick={menuBtn} className='menuBtn' alt="" />
        </header>
    )
}

export default Navbar