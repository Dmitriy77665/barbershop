

import Job from './../img/ourBarbers/1.jpg'
import Alan from './../img/ourBarbers/2.jpg'
import Felix from './../img/ourBarbers/3.jpg'

import './ourBarbers.scss'




const OurBarbers = () => {

    return (
        <div className='barbers'>
            <div className='container'>
                <h2 className='barbers__title'>Our brabers</h2>
                <div className='barbers__devider'>
                    <i></i>
                </div>
                <div className='barbers__content'>
                    <div className='barbers__item'>
                        <img className='barbers__photo' src={Job} alt="#" />
                        <p className='barbers__descr'>Job</p>
                    </div>
                    <div className='barbers__item'>
                        <img className='barbers__photo' src={Alan} alt="#" />
                        <p className='barbers__descr'>Alan</p>
                    </div>
                    <div className='barbers__item'>
                        <img className='barbers__photo' src={Felix} alt="#" />
                        <p className='barbers__descr'>Felix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurBarbers