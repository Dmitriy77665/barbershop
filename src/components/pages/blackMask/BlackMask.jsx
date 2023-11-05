
import Footer from '../../footer/Footer'
import blackmask1 from './../../img/blackmask/blackmask1.jpeg'
import blackmask2 from './../../img/blackmask/blackmask2.jpeg'

import './blackMask.scss'

const BlackMask = () => {
    return (
        <div className='blackmask'>
            <div className='container'>
                <h1 className='blackmask__title'>Black mask</h1>
                <div className='blackmask__devider'>
                    <i></i>
                </div>
                <p className='hairstyle__descr'>During this procedure, we use a high-quality professional facial mask for the Black Peel-Off Facial Mask brand Elegance, which contains a special formula that opens the pores and cleans them. This black deep-action mask will remove all dirt from the pores and help get rid of the black dots. An ingredient such as charcoal works on the principle of a magnet, attracting and removing even very deep-seated impurities. The process consists of three stages: steaming the skin, directly applying the mask, which is kept on the face for about 20-30 minutes before drying, and after - cleansing the face with a delicate scrub. As a result, you get a clean, elastic skin without dirt and black spots. The procedure takes about 30 minutes, but you can combine with the haircut and then you will not spend a single extra minute of your time.</p>
                <div className='blackmask__photo'>
                    <img src={blackmask1} alt="" />
                    <img src={blackmask2} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlackMask