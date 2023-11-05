
import Footer from '../../footer/Footer'
import menshaircut from './../../img/menshaircut/menshaircut.jpeg'

import './mensHaircut.scss'

const MensHaircut = () => {
    return (
        <div className='manshaircut'>
            <div className='container'>
                <h1 className='manshaircut__title'>Men’s haircut</h1>
                <div className='manshaircut__devider'>
                    <i></i>
                </div>
                <p className='manshaircut__descr'>During the haircuts in CHESTER Barbershop - our masters maintain an individual approach to each client, depending on his preferences. We can offer you the option of a haircut, fully consistent with the trends of mens fashion, or to perform a quality haircut solely based on the wishes voiced by the client. Haircut includes washing the head, directly cutting and styling with high-quality cosmetics. The whole procedure lasts from 40 minutes to an hour, depending on the complexity and features of the hair.</p>
                <div className='manshaircut__photo'>
                    <img src={menshaircut} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MensHaircut