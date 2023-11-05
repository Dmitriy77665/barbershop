
import './services.scss'

 const servicesPrice = [
    {
        id: 1,
        name: 'Men’s haircut',
        price: 50,
        url: '/men’s-haircut'
    },
    {
        id: 2,
        name: 'Black mask',
        price: 30,
        url: '/black-mask'
    },
    {
        id: 3,
        name: 'Beard trim',
        price: 30,
        url: '/beard-trim'
    },
    {
        id: 4,
        name: 'Headshave',
        price: 50,
        url: '/headshave'
    },
    {
        id: 5,
        name: 'Straight chester shave',
        price: 35,
        url: '/straight-chester-shave'
    },
    {
        id: 6,
        name: 'Camouflage',
        price: 80,
        url: '/camouflage'
    },
    {
        id: 7,
        name: 'Children’s haircut',
        price: 45,
        url: '/children’s-haircut'
    },
    {
        id: 8,
        name: 'Fether + Son',
        price: 75,
        url: '/father+son'
    },
    {
        id: 9,
        name: 'Hairstyle',
        price: 15,
        url: '/hairstyle'
    },
]


const Services = () => {

    return (
        <div className="services">
            <div className='container'>
                <h2 className='services__title'>Services</h2>
                <div className="services__buttons">
                    {servicesPrice.map(service => (
                        <div className="services__item" key={service.id}>
                            <button className='services__btn'>{service.name}<p className='services__descr'>{service.price} $</p></button>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
// eslint-disable-next-line react-refresh/only-export-components
export {servicesPrice};