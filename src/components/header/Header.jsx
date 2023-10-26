import { useState } from 'react'

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
                <img className='header__logo' src={logo} alt="logo"/>
            </div>
            <div className="header__item">
                <a href="">Barbershop</a>
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
                <a href="">School</a>
                <a href="#contacts">Contacts</a>
            </div>
        </div>
    )
}

export default Header