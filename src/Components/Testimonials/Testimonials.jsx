import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='test' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                <div className='card'>
                    <h2>Dr. Rohini Kelkar</h2>
                    <p className='designation'>Principal, Vidyalankar School of Information Technology</p>
                    <p className='desc'> "Their dedication, creativity, and innovative approach have consistently exceeded our expectations. Sonal has a unique ability to transform complex ideas into engaging and visually appealing designs, making them an invaluable asset to any team. Their professionalism and commitment to excellence are truly commendable."</p>
                </div>
                <div className='card'>
                    <h2>Prof.Asif Rampurawala</h2>
                    <p className='designation'>Vice Principal, Vidyalankar School of Information Technology</p>
                    <p className='desc'> "Sonal has demonstrated remarkable skill and enthusiasm in their work. They bring a fresh perspective and a high level of expertise to every project they undertake. Their ability to collaborate effectively and their attention to detail are qualities that set them apart. Sonal's contributions have significantly enhanced our initiatives, and I highly recommend their talents."</p>
                </div>
                <div className='card'>
                    <h2>Dr.Ujwala Sav</h2>
                    <p className='designation'>HOD, Msc.IT, Vidyalankar School of Information Technology</p>
                    <p className='desc'> "As the Head of Department, I have had the pleasure of overseeing Sonal's work. Their creativity and technical prowess are matched by their reliability and strong work ethic. Sonal consistently delivers high-quality results, often surpassing our expectations. Their passion for their craft is evident in every project, making them a standout contributor to our department."</p>
                </div>
                <div className='card'>
                    <h2>Dr.Sarika Chouhan</h2>
                    <p className='designation'>Chief Academic Officer, Vidyalankar School of Information Technology </p>
                    <p className='desc'>"Her innovative thinking and problem-solving skills have brought new life to our projects. Sonal's ability to understand and meet our needs with precision and creativity is truly remarkable. Their dedication to their work and their professionalism make them an exemplary professional in their field."  </p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
