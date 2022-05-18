import React from 'react';
import './testimonials.css'
import DL from '../../assets/dl1.jpg'
import IVFX from '../../assets/ivfx.jpg'
import IBV from '../../assets/ibv.png'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {

    const data = [
        {
            avatar:IBV,
            name:'IBV',
            Duration: 'from June 2019',
            Role:'BIM Engineer',
            link:'https://www.ibv-hd.de/',
            review: 'Enjoy the flexibility of selecting online or offline classes with Digital-Lync first-ever hybrid learning model. Get the fruitful chance of choosing between the privilege of learning from home or the advantage of one-on-one knowledge gaining - all in one place.'
        },
        {
            avatar:IVFX,
            name:'Infinito VFX',
            Role:'Game Developer',
            Duration: 'June 2018 to Dec 2018',
            link:'https://www.infinitovfx.com/',
            review: 'Enjoy the flexibility of selecting online or offline classes with Digital-Lync first-ever hybrid learning model. Get the fruitful chance of choosing between the privilege of learning from home or the advantage of one-on-one knowledge gaining - all in one place.'
        },
        {
            avatar:DL,
            name:'Digital Lync',
            Role:'3D Visualizer/Artist',
            link:'https://www.digital-lync.com/',
            Duration: 'December 2015 to June 2018',
            review: 'Enjoy the flexibility of selecting online or offline classes with Digital-Lync first-ever hybrid learning model. Get the fruitful chance of choosing between the privilege of learning from home or the advantage of one-on-one knowledge gaining - all in one place.'
        }

    ]
    return (
        <section id = 'testimonials'>
            <h5>About</h5>
            <h2>Companies that, I worked</h2>

            <Swiper 
                className="container testimonials__container"
                modules={[ Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                data.map(({avatar,name,Role,link,Duration,review},index) => {
                    return(
                        <SwiperSlide key = {index} className="testimonials">
                        <div className="client__avatar">
                            <a href={link} target='_blank'><img src={avatar} alt=""/></a>
                        </div>
                        <h3 className="client__name">{name}</h3>
                        <h5 className="client__name">{Duration}</h5>
                        <h3 className="client__role">{Role}</h3>
                        <small className="client__review">
                            {review}
                        </small>
                    </SwiperSlide>      
                    )
                })
            }   
                
            </Swiper>
        </section>
    );
}

export default Testimonials;
