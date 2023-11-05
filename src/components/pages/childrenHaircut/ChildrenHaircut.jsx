
import Footer from '../../footer/Footer'
import childrenhaircut1 from './../../img/childrenhaircut/childrenhaircut1.jpeg'
import childrenhaircut2 from './../../img/childrenhaircut/childrenhaircut2.jpeg'
import childrenhaircut3 from './../../img/childrenhaircut/childrenhaircut3.jpeg'
import childrenhaircut4 from './../../img/childrenhaircut/childrenhaircut4.jpeg'

import './childrenhaircut.scss'

const ChildrenHaircut = () => {
    return (
        <div className='childrenhaircut'>
            <div className='container'>
                <h1 className='childrenhaircut__title'>Children’s haircut</h1>
                <div className='childrenhaircut__devider'>
                    <i></i>
                </div>
                <p className='childrenhaircut__descr'>Helping a child look good, you gradually form in him self-confidence. There are many types and types of haircuts that will help to highlight the beauty of a small mod. The last trend was a haircut in tandem, when the father and son are sheared together, in the same stylistic image, or in different ways, which in itself unites them and instills in the boy the habit of following himself in a truly masculine place since childhood. Masters of CHESTER Barbershop know how to properly emphasize the nature of your child and will always help to show individuality. Grooming takes about 40-50 minutes.</p>
                <div className='childrenhaircut__photo'>
                   <img src={childrenhaircut1} alt="" />
                   <img src={childrenhaircut2} alt="" />
                   <img src={childrenhaircut3} alt="" />
                   <img src={childrenhaircut4} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ChildrenHaircut