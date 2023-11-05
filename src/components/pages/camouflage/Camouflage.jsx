
import Footer from '../../footer/Footer'
import camouflage1 from './../../img/camouflage/camouflage1.jpeg'
import camouflage2 from './../../img/camouflage/camouflage2.jpeg'

import './camouflage.scss'

const Camouflage = () => {
    return (
        <div className='camouflage'>
            <div className='container'>
                <h1 className='camouflage__title'>Camouflage</h1>
                <div className='camouflage__devider'>
                    <i></i>
                </div>
                <p className='camouflage__descr'>If your head or beard has different in color hair - for example, red, or with gray hair, or just has an uneven color, then camouflage will help to solve this problem. The procedure is performed by high-quality cosmetics of American brand American CREW and takes approximately 20-30 minutes and the result after its completion will surpass all your expectations. The color will be smooth, perfectly matched to the hair, or under your color. Camouflage lasts up to three weeks and is washed smoothly, in natural tones.</p>
                <div className='camouflage__photo'>
                    <img src={camouflage1} alt="" />
                    <img src={camouflage2} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Camouflage