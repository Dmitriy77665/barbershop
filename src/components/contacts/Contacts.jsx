
import './contacts.scss'

const Contacts = () => {
    return (
        <div className="contacts">
            <h2 className="contacts__title">Contacts</h2>
            <div className='contacts__devider'>
                <i></i>
            </div>
            <div className="contacts__descr">
                <div className="contacts__address">
                    <h3>Working hours:</h3>
                    <p>Daily 09.00 to 20.00</p>
                    <h3>Address:</h3>
                    <p>Hugona Kołłątaja 29/30, Wrocław</p>
                    <h3>Telephone:</h3>
                    <a href="tel:+48777777777">+48 777-777-777</a>
                </div>
                <div className="contacts__map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.3199440342673!2d17.034551077096506!3d51.10255687172394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc3f441020703%3A0xc8aeb30a6f70d717!2sCHESTER%20BARBERSHOP!5e0!3m2!1sru!2spl!4v1698160587535!5m2!1sru!2spl" 
                        width="750" 
                        height="250" 
                        style={{ border: "0" }} 
                        allowfullscreen="" 
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacts