import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import '../css/experience.css';


import sunclinic from "../media/sunclinic.JPG";


function Experience() {
    return (
        <div className="experience-container" id="experience">
            <div className='experience-top-left'>
                <h1>Experience</h1>
                <p className='underline'></p>
            </div>

            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="slide-content">
                    <a href="https://github.com/Hussein-Mortada/SunClinic">
                        <img src={sunclinic} alt="Experience 1" />
                        </a>
                        <h2 >Lead Developer</h2>
                        <p >Project Manager and Lead Developer for a booking portal application</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Thats all for now! I am a recent grad looking to gain experience :)</SwiperSlide>
            </Swiper>

        </div>
    );
}
export default Experience;