
import Teaching1 from './../../img/teaching1.jpeg'
import Teaching2 from './../../img/teaching2.jpeg'
import './teaching.scss'

const Teaching = () => {
    return (
        <div className='teaching'>
            <div className='container'>
                <h2 className='teaching__title'>Teaching</h2>
                <div className='teaching__devider'>
                    <i></i>
                </div>
                <p className='teaching__descr'>
                    When teaching with us, you should expect the following: The first 2 weeks - getting the basic knowledge of the theory of mens haircuts, the basic forms of haircuts and skills of possession of the instrument. Familiarization with the norms of sanitation, hygiene and professional ethics. Study of cosmetics and methods of their use. The next 6 weeks is a practical part: Block 1-washing of the head, styling, hair cutting machine. Block 2 - the basic forms of a hairstyle, a shearing with scissors, work with a texture of hair, work with system of masking of a gray hair. Block 3 - combined forms of haircuts. Individual features of the skull and facial features, selection of haircuts based on them. Block 4 - beard cutting, shaving. Techniques and technologies for their implementation. The last 4 weeks - internship under the leadership of the barber. When you complete a full course of study, you acquire a highly paid profession for life. The best students are given the opportunity to join our team of professionals.
                </p>
                <div className='teaching__photo'>
                    <img src={Teaching1} alt="" />
                    <img src={Teaching2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Teaching