
import Footer from '../../footer/Footer'
import chestershave1 from './../../img/chestershave/chestershave1.jpeg'
import chestershave2 from './../../img/chestershave/chestershave2.jpeg'
import chestershave3 from './../../img/chestershave/chestershave3.jpeg'

import './straightChesterShave.scss'

const StraightChesterShave = () => {
    return (
        <div className='chestershave'>
            <div className='container'>
                <h1 className='chestershave__title'>Straight chester shave</h1>
                <div className='chestershave__devider'>
                    <i></i>
                </div>
                <p className='chestershave__descr'>Shaving a dangerous razor is a service for true connoisseurs of male rituals, which can not be compared with home shaving. Shaving with a dangerous razor has many advantages - complete removal of bristles, even in hard-to-reach places, the speed of the process, the absence of irritation after the procedure, easy removal of even the stiffest bristles. The process of shaving begins with moistening and steaming the skin with a hot towel, then the master applies a thick layer of gel for easier sliding of the razor. Because of the severity of the blade, the master does not need to go through the razor in the same place, due to this, the risk of irritation is minimal. After the procedure, the master removes the rest of the foam with a towel and uses the funds after shaving, depending on the skin. The procedure takes about 30 minutes.</p>
                <div className='chestershave__photo'>
                    <img src={chestershave1} alt="" />
                    <img src={chestershave2} alt="" />
                    <img src={chestershave3} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default StraightChesterShave