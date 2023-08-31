import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import '../css/experience.css';


import homenv from "../media/Home nVentory.png";
import leetcode from "../media/LeetCode_Sharing.png";
import bst from "../media/bst.jpg";
import sortingalgs from "../media/sorting.jpg";

function Projects() {
    return (
        <div className="experience-container" id="projects">
            <div className='experience-top-left'>
                <h1>Projects</h1>
                <p className='underline'></p>
            </div>

            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="slide-content">
                    <a href="https://github.com/Hussein-Mortada/Home-nVentory">
                        <img src={homenv} alt="Experience 1" />
                        </a>
                        <p >Full Stack application with CRUD functionality and Admin/User sections</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="slide-content">
                    <a href="https://github.com/Hussein-Mortada/LeetCode">
                        <img src={leetcode} alt="Experience 2" />
                        </a>
                        <p >Leetcode solutions with all in Java and translating (most) into Python</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="slide-content">
                    <a href="https://github.com/Hussein-Mortada/BSTImplementation">
                        <img src={bst} alt="Experience 3" />
                        </a>
                        <p >Binary Search Tree implementation, full JUnit testing, and using it for a word counting application using serialization and deserialization</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="slide-content">
                    <a href="https://github.com/Hussein-Mortada/JavaSortingAlgorithms">
                        <img src={sortingalgs} alt="Experience 4" />
                        </a>
                        <p >Implementation of multiple sorting algorithms, written in Java and Python (other repo) with file I/O, reflection, etc.</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>Thats all for now! :D</SwiperSlide>
            </Swiper>

        </div>
    );
}
export default Projects;