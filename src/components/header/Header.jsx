import { useState } from 'react'
import { Link } from 'react-router-dom'

import { servicesPrice } from './../services/services'
import logo from '../img/logo.png'
import './header.scss'

const Header = () => {

    const [servicesOpen, setServicesOpen] = useState(false)
    
    const handleMouseEnter = () => {
        setServicesOpen(true);
    };

    const handleMouseLeave = () => {
        setServicesOpen(false);
    };
    
    return (
        <div className="header">
            <div>
                <Link to='/'><img className='header__logo' src={logo} alt="logo"/></Link>
            </div>
            <div className="header__item">
                <Link to='/'>Barbershop</Link>
                <a  href="#services" 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >Services</a>
                {servicesOpen && (
                    <ul className='header__services' 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}>
                        {servicesPrice.map(service => (
                        <li className='header__services_item' key={service.name}>
                            <a href="" >{service.name}</a>
                        </li>
                        ))}
                    </ul>

                )}
                <Link to='/school'>School</Link>
                <Link to='/contact'>Contacts</Link>
            </div>
        </div>
    )
}

export default Header