
import './services.scss'

const servicesPrice = [
    {
        id: 1,
        name: 'Men’s haircut',
        price: 50
    },
    {
        id: 2,
        name: 'Black mask',
        price: 30
    },
    {
        id: 3,
        name: 'Beard trim',
        price: 30
    },
    {
        id: 4,
        name: 'Headshave',
        price: 50
    },
    {
        id: 5,
        name: 'Straight razor shave',
        price: 35
    },
    {
        id: 6,
        name: 'Camouflage',
        price: 80
    },
    {
        id: 7,
        name: 'Children’s haircutt',
        price: 45
    },
    {
        id: 8,
        name: 'Fether + Son',
        price: 75
    },
    {
        id: 9,
        name: 'Hairstyle',
        price: 15
    },
]


const Services = () => {

    return (
        <div className="services">
            <h2 className='services__title'>Services</h2>
            <div className="services__buttons">
                {servicesPrice.map(service => (
                    <div className="services__item" key={service.id}>
                        <button className='services__btn'>{service.name}<p className='services__descr'>{service.price} $</p></button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services