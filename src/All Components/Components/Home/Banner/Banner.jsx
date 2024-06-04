
import { Link } from "react-router-dom";
import banner from "./../../../../assets/image/wallpaperflare.com_wallpaper (1).jpg"
import banner22 from "./../../../../assets/image//bg admisstion.avif"
import logo from "./../../../../assets/image/fast-co.png"
import logo2 from "./../../../../assets/image/scrolership cap.jpg"
import dot from "./../../../../assets/image/dot img.avif"
import "./Style.css"


// swiper//
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaMailchimp, FaPhone, FaVoicemail } from "react-icons/fa";

const Banner = () => {
    return (

        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}

                modules={[ Pagination, Navigation]}

                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img className="relative h-[480px] w-full" src={banner} alt="" />
                        {/* fuel section */}
                        <div className="absolute md:-mt-[440px] md:ml-36">
                            <h1 id="color2" className="text-7xl font-bold text-white">Fuel your <br />ambition</h1>

                            <div className="flex gap-2 mt-10">
                                <input type="text" placeholder="Search our 4000+ courses" className="relative border-2 border-black  px-2 py-1 w-64 max-w-xs" />
                                <button className="bg-red-500 px-2 py-1 text-xl font-semibold text-white rounded-sm">Search</button>

                            </div>
                            <Link>
                                <p className="underline text-white text-xl mt-10">Explore all courses</p>
                            </Link>
                        </div>
                        {/* banner logo section */}



                        <div className="absolute -mt-10 relative w-9/12 bg-green-800 py-4">
                            <p className="text-white text-3xl text-right pr-10">Recognized for AI innovations in learning</p>


                        </div>
                        <img className=" absolute -mt-28 h-36 w-28 ml-36 " src={logo} alt="" />
                    </div>
                </SwiperSlide>


                {/* swiper 2 */}
                <SwiperSlide>
                    <div className="bg-[#0b79b9]">
                        <div className="px-10 py-10">
                            <img className="relative h-[580px] w-full" src={banner22} alt="" />
                            {/* fuel section */}
                            <div className="absolute md:-mt-[590px] md:ml-10">

                                <div className=" mx-20 my-10 grid grid-cols-2 items-center">

                                    {/* first section */}
                                    <div className="pl-16">
                                        <img className="w-10 h-10 ml-5" src={logo2} alt="" />
                                        <p className="text-lg mt-2 font-semibold ml-2">Logo Here</p>
                                        {/* creative it admistion */}
                                        <h1 className="text-[#1448cd] font-bold text-5xl mt-2 relative">Creative-IT <br /><span id="color2" className="text-6xl mt-2 absolute">Admisstion </span></h1>
                                        {/* registion */}
                                        <Link to="/signup">
                                            <p className="bg-orange-400 py-[2px] px-1 rounded-sm w-[228px] mt-28 text-lg">Now open for Registration !</p>
                                        </Link>
                                        {/* describe registration  */}
                                        <p className="w-[200px] text-sm text-gray-500 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                        {/* enroll now */}


                                        {/* <div id="border-box">

                                    <div id="border-animation" className="text-lg mt-5 md:mt-16">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Enroll now
                                    </div>
                                </div> */}


                                        {/* optional  */}

                                        <div>
                                            <Link to="/form"> <button className="text-2xl font-bold bg-blue-800 text-white px-2 py-1 rounded-md mt-10 hover:text-3xl  hover:bg-sky-400">Enroll Now</button>
                                            </Link>
                                        </div>
                                        {/* contact info */}
                                        <div className="flex justify-between mt-10 ml-36 ">
                                            <div className="items-center flex gap-1 bg-white text-white">
                                                <FaPhone className="w-3 h-3"></FaPhone>
                                                <li className="text-sm ">+8801725-999999</li>
                                            </div>
                                            {/* email */}
                                            <div className="ml-16 items-center flex gap-1">
                                                <FaMailchimp></FaMailchimp>
                                                <li className="text-sm text-blue-900 ">help12@gmai.com</li>
                                            </div>


                                        </div>


                                    </div>
                                    {/* second/image section */}
                                    <div className="ml-[170px]">
                                        <img className="-mt-36 absolute rounded-rr-3xl" src={dot} alt="" />
                                    </div>


                                </div>


                            </div>
                            {/* banner logo section */}





                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner;



//
<div className="bg-white mx-20 my-10 grid grid-cols-2 items-center">
    {/* first section */}
    <div className="pl-16">
        <img className="w-10 h-10 ml-5" src={logo2} alt="" />
        <p className="text-lg mt-2 font-semibold ml-2">Logo Here</p>
        {/* creative it admistion */}
        <h1 className="text-[#1448cd] font-bold text-5xl mt-2 relative">Creative-IT <br /><span id="color2" className="text-6xl mt-2 absolute">Admisstion </span></h1>
        {/* registion */}
        <Link to="/signup">
            <p className="bg-orange-400 py-[2px] px-1 rounded-sm w-[228px] mt-28 text-lg">Now open for Registration !</p>
        </Link>
        {/* describe registration  */}
        <p className="w-[200px] text-sm text-gray-500 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        {/* enroll now */}


        {/* <div id="border-box">

                                    <div id="border-animation" className="text-lg mt-5 md:mt-16">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Enroll now
                                    </div>
                                </div> */}


        {/* optional  */}

        <div>
            <button className="text-2xl font-bold bg-blue-800 text-white px-2 py-1 rounded-md mt-10 ">Enroll Now</button>
        </div>
        {/* contact info */}
        <div className="flex mt-10">
            <div className="items-center flex gap-1">
                <FaPhone className="w-3 h-3"></FaPhone>
                <li className="text-sm text-blue-900">+8801725-999999</li>
            </div>
            {/* email */}
            <div className="ml-16 items-center flex gap-1">
                <FaMailchimp></FaMailchimp>
                <li className="text-sm text-blue-900 ">help12@gmai.com</li>
            </div>


        </div>


    </div>
    {/* image section */}
    <div>
        <img className=" " src={dot} alt="" />
    </div>


</div>