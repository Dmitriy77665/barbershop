
import Footer from '../../footer/Footer'
import headshave1 from './../../img/headshave/headshave1.png'
import headshave2 from './../../img/headshave/headshave2.jpeg'

import './headshave.scss'

const HeadShave = () => {
    return (
        <div className='headshave'>
            <div className='container'>
                <h1 className='headshave__title'>Headshave</h1>
                <div className='headshave__devider'>
                    <i></i>
                </div>
                <p className='headshave__descr'>Having addressed to the qualified masters of CHESTER Barbershop, we will help you to carry out a professional shave of the head in the most delicate and qualitative way. Shaving in barbershop is made using different technologies: we can shave a machine (shaver) or a dangerous razor - a royal shave. For all types of shaving we use professional high-quality cosmetics that will provide a comfortable and high-quality shave. Special composition will accelerate the healing of the head cover and eliminate irritation. The procedure takes about 30 minutes.</p>
                <div className='headshave__photo'>
                    <img src={headshave1} alt="" />
                    <img src={headshave2} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HeadShave