
import Footer from '../../footer/Footer'

import beardtrim1 from './../../img/beardtrim/beardtrim1.jpeg'
import beardtrim2 from './../../img/beardtrim/beardtrim2.jpeg'
import beardtrim3 from './../../img/beardtrim/beardtrim3.jpeg'
import beardtrim4 from './../../img/beardtrim/beardtrim4.jpeg'

import './beardtrim.scss'

const BeardTrim = () => {
    return (
        <div className='beardtrim'>
            <div className='container'>
                <h1 className='beardtrim__title'>Beard trim</h1>
                <div className='beardtrim__devider'>
                    <i></i>
                </div>
                <p className='beardtrim__descr'>Your image can significantly change a well-groomed beard: it will give the face of masculinity, make the chin more pronounced, and also clearly form features of the face. Masters of our barbershop are advised to grow it in the course of a month or two, and then come to CHESTER for a haircut and modeling of the beard. Depending on the wishes of the client and facial features, we will give it an individual form and help you choose professional care cosmetics that will help keep the new shape longer. The service provides for modeling, registration, as well as care of hair and skin. With a machine and scissors, the craftsmen will give the bristles a clear shape, for the creation of which they use a dangerous razor, because with her help the silhouette of a bristle or beard lasts longer. The procedure takes about 20-30 minutes.</p>
                <div className='beardtrim__photo'>
                    <img src={beardtrim2} alt="" />
                    <img src={beardtrim1} alt="" />
                    <img src={beardtrim3} alt="" />
                    <img src={beardtrim4} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BeardTrim