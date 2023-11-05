
import Footer from "../../footer/Footer"
import fatherson from './../../img/father+son/father+son.jpeg'

import './fatherson.scss'

const FatherSon = () => {
    return (
        <div className='fatherson'>
            <div className='container'>
                <h1 className='fatherson__title'>Father + son</h1>
                <div className='fatherson__devider'>
                    <i></i>
                </div>
                <p className='hairstyle__descr'>Service is primarily for married, but in fact it is possible and a little cunning and for example come to visit us with his younger brother, after all, the main idea is to instill the right manners to the younger generation and habits, so that with both hands for, you only have to come, the rest behind us.</p>
                <div className='fatherson__photo'>
                    <img src={fatherson} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FatherSon