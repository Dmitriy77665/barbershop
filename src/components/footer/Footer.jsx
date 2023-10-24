import github from './../img/icons/github.png'
import linkedin from './../img/icons/linkedin.png'

import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__icons">
                <a href="https://github.com/Dmitriy77665/store"><img className='footer__github' src={github} alt="" /></a>
                <a href="https://www.linkedin.com/in/dmitriy-chikish-4b5083266/"><img src={linkedin} alt="" /></a>
            </div>
        </div>
    )
}

export default Footer