import logo from '../img/logo.png'

import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className='header__logo' src={logo} alt="logo"/>
            </div>
            <div className="header__item">
                <a href="">Barbershop</a>
                <a href="">Services</a>
                <a href="">School</a>
                <a href="">Contacts</a>
            </div>
        </div>
    )
}

export default Header