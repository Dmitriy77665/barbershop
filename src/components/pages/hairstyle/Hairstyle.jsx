
import hairstyle1 from './../../img/hairstyle/hairstyle1.jpeg'
import hairstyle2 from './../../img/hairstyle/hairstyle2.jpeg'
import Footer from '../../footer/Footer'
import './hairstyle.scss'

const Hairstyle = () => {
    return (
        <div className='hairstyle'>
            <div className='container'>
                <h1 className='hairstyle__title'>Hairstyle</h1>
                <div className='hairstyle__devider'>
                    <i></i>
                </div>
                <p className='hairstyle__descr'>If you want to look irreproachable at an event, an important meeting or just in everyday life - come to us at CHESTER BARBERSHOP  and our professionals put your hair on the shoulder blades) Joke, everything will be beautiful + good mood from us as a gift))) Perfect styling takes only 10-15 minutes of your time!</p>
                <div className='hairstyle__photo'>
                    <img src={hairstyle1} alt="" />
                    <img src={hairstyle2} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Hairstyle