

import promo from '../img/1promo.jpg'

import './content.scss'



const Content = () => {
    return (

        <div className="content">
            <div className='container'>
                <h1 className="content__title">Chester Barbershop</h1>
                <div className='content__devider'>
                    <i></i>
                </div>
                <div className="content__item">
                    <div className="content__descr">
                        CHESTER Barbershop is, above all, a men’s vision of how one should spend their time. <br/>

                        It’s a hair salon for those who appreciate exclusive service and attentive attitude while caring about their looks. Not only will you be offered classic haircuts, beard & mustache trims, straight razor shaves and hair care products at our place, but you will also feel our understanding and friendly attitude.<br/>

                        CHESTER Barbershop was designed as a place where a man could not only have his hair cut or get a shave, but also take a break from the hustle and bustle and have a manly conversation over a glass of whisky.<br/>

                        You might be wondering where the name comes from. Let us tell you the story. CHESTER stands for RAZOR and BLADE. These two words emphasize our salon’s theme. But on top of this, the name also sounds similar to BROTHER. This pun reflects and summarizes our theme, which is about an exclusively male socializing.<br/>

                        Come and join us, we will find common ground!
                    </div>
                    <div className="content__photo">
                        <img src={promo} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Content