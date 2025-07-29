import React from 'react';
import "./style.css"
import communicationImage from "./../../../../assets/image/webcome.webp"
import tasfirul from "./../../../../assets/image/tasfirul.png"
import man from "./../../../../assets/image/man.webp"
import { FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';

const Features = () => {
    return (
        <div>
            <div className='bg-green-500 md:relative'>
                <h1 className='text-white text-5xl text-center font-serif font-bold mt-4 pt-4'>
                    Meet our team
                </h1>
                <p className='text-gray-300 text-sm text-center mt-2 pb-40'>introducation self</p>
            </div>
            {/* second   */}
            <div className='grid md:grid-cols-3 md:absolute -mt-36 gap-4 mx-5 md:mx-20 mr-6'>
                {/* card 1 */}
                <div className="w-[290px] md:w-[350px] bg-base-100 shadow-lg rounded-3xl mb-6">
                    <figure className="px-4 pt-6 text-center mx-auto">
                        <img src={communicationImage} alt="Shoes" className="rounded-t-3xl bg-gray-100 mx-10 h-[200px] md:h-[250px] w-[180px] md:w-[230px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='bg-gray-100 px-4 '>
                            <div className='b'>
                                <h2 className='text-xl text-black font-bold pt-2'>Minhaj  </h2>
                                <p className='text-[16px] text-black font-semibold mt-3'> CEO TrainerX Solution</p>
                                <p className='mt-3 px-4'>nahid's description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, suscipit?</p>
                                {/* social link */}
                                <div className="flex gap-4 mt-2 ml-14">
                                    <a className="py-4" href="https://www.facebook.com">
                                        <MdFacebook className="h-8 w-8 text-green-400 rounded-full" />
                                    </a>
                                    <a className="py-4" href="https://twitter.com">
                                        <FaTwitterSquare className="h-8 w-8 text-green-400 rounded-full" />
                                    </a>
                                    <a className="py-4" href="https://www.instagram.com/">
                                        <FaInstagram className="h-8 w-8 text-green-400 rounded-full" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="w-[290px] md:w-[350px] bg-base-100 shadow-lg rounded-3xl mb-6">
                    <figure className="px-4 pt-6 text-center mx-auto">
                        <img src={tasfirul} alt="Shoes" className="rounded-t-3xl bg-gray-100 mx-10 h-[200px] md:h-[250px] w-[180px] md:w-[230px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='bg-gray-100 px-4 '>
                            <h2 className='text-xl text-black font-bold pt-2'>Tafsirul Tonmoy </h2>
                            <p className='text-[16px] text-black font-semibold mt-3'>TrainerX Solution Developer</p>
                            <p className='mt-3 px-4'>Tafsirul Tonmoy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, suscipit?</p>
                            {/* social link */}
                            <div className="flex gap-4 mt-2 ml-[75px]">
                                <a className="py-4" href="https://www.facebook.com">
                                    <MdFacebook className="h-8 w-8 text-green-400 rounded-full" />
                                </a>
                                <a className="py-4" href="https://twitter.com">
                                    <FaTwitterSquare className="h-8 w-8 text-green-400 rounded-full" />
                                </a>
                                <a className="py-4" href="https://www.instagram.com/">
                                    <FaInstagram className="h-8 w-8 text-green-400 rounded-full" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="w-[290px] md:w-[350px] bg-base-100 shadow-lg rounded-3xl mb-6">
                    <figure className="px-4 pt-6 text-center mx-auto">
                        <img src={man} alt="Shoes" className="rounded-t-3xl bg-gray-100 mx-10 h-[200px] md:h-[250px] w-[180px] md:w-[230px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='bg-gray-100 px-4'>
                            <h2 className='text-xl text-black font-bold pt-2'>Mr josef </h2>
                            <p className='text-[16px] text-black font-semibold mt-3'>TrainerX Solution marketor</p>
                            <p className='mt-3 px-4'>Mr josefn Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, suscipit?</p>
                            {/* social link */}
                            <div className="flex gap-4 mt-2 ml-[75px]">
                                <a className="py-4" href="https://www.facebook.com">
                                    <MdFacebook className="h-8 w-8 text-green-400 rounded-full" />
                                </a>
                                <a className="py-4" href="https://twitter.com">
                                    <FaTwitterSquare className="h-8 w-8 text-green-400 rounded-full" />
                                </a>
                                <a className="py-4" href="https://www.instagram.com/">
                                    <FaInstagram className="h-8 w-8 text-green-400 rounded-full" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
