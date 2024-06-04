import React from 'react';
import "./style.css"
import communicationImage from "./../../../../assets/image/webcome.webp"
import tasfirul from "./../../../../assets/image/tasfirul.png"
import man from "./../../../../assets/image/man.webp"
import { FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';

const Features = () => {
    return (
        // <div className="features-container">
        //     <h1>আমাদের এক্সপার্ট শিক্ষকগন  <br></br><span className="highlight">পরিচিত হোন আমাদের এক্সপার্ট শিক্ষকদের সাথে</span></h1>

        //     <div className="feature-grid">
        //         <div className="feature-card">
        //             <div className="feature-icon">
        //                 <img src={communicationImage} alt="Communication" />
        //             </div>
        //             <h2>Eng. Mohadmmad Nahid Mia</h2>
        //             <p>Eng. CEO TrainerX Solution <br />
        //                 Former, Customer relationship manager, Premiumy LTD </p>
        //         </div>
        //         <div className="feature-card">
        //             <div className="feature-icon">
        //                 <img src={tasfirul} alt="COMPATIBILITY" />
        //             </div>
        //             <h2>Tashfirul Tonmoy</h2>
        //             <p>Frontend Developoer at Trainer-X Solution</p>
        //         </div>
        //         <div className="feature-card">
        //             <div className="feature-icon">
        //                 <img src={communicationImage} alt="ENHANCEMENT" />
        //             </div>
        //             <h2>EXPERT TEAM ENHANCEMENT.</h2>
        //             <p>With extensive experience collaborating alongside Fortune 500 engineering teams, X-Teamers bring invaluable expertise to help your organization scale and elevate its standards in quality and best practices.</p>
        //         </div>
        //         <div className="feature-card">
        //             <div className="feature-icon">
        //                 <img src={communicationImage} alt="ALIGNMENT" />
        //             </div>
        //             <h2>TIME-ZONE ALIGNMENT.</h2>
        //             <p>We carefully select X-Teamers with the crucial time zone overlap needed for your team’s seamless operation, recognizing its importance in fostering team morale, efficiency, and cooperation.</p>
        //         </div>
        //     </div>
        // </div>

        <div>
            <div className='bg-green-500 relative'>
                <h1 className='text-white text-5xl text-center  font-serif font-bold mt-4 pt-4'>
                    Meet our team
                </h1>
                <p className='text-gray-300 text-sm text-center mt-2 pb-40'>introduse self</p>
            </div>
            {/* second   */}
             
            <div className='grid grid-cols-3 absolute -mt-36 gap-4 mx-20 mr-6'>
                {/* card 1 */}
                <div className=" w-[350px] bg-base-100 shadow-lg rounded-3xl mb-6">
                    <figure className="px-4 pt-6 text-center mx-auto  ">
                        <img src={communicationImage} alt="Shoes" className="rounded-t-3xl bg-gray-100 mx-10 h-[250px] w-[230px] " />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <div className='bg-gray-100 px-4 '>

                            <div className='b'>


                                <h2 className='text-xl text-black font-bold pt-2'>Eng. Nahid </h2>
                                <p className='text-[16px] text-black font-semibold mt-3'>Eng. CEO TrainerX Solution  </p>
                                <p className='mt-3 px-4'> nahid's description  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, suscipit? </p>

                                {/* social link */}
                                <div className="flex gap-4 mt-2 
                                ml-14">
                                    <div className="flex">
                                        <div className="flex ">
                                            <a className="py-4 " href="https://www.facebook.com">
                                                <MdFacebook className="h-8 w-8 text-green-400 rounded-full"></MdFacebook>
                                            </a>

                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex">
                                            <a className="py-4 " href="https://twitter.com">
                                                <FaTwitterSquare className="h-8 w-8 text-green-400 rounded-full"></FaTwitterSquare>
                                            </a>

                                        </div>

                                    </div>
                                    <div className="flex">
                                        <div className="flex">
                                            <a className="py-4 " href="https://www.instagram.com/">
                                                <FaInstagram className="h-8 w-8 text-green-400 rounded-full"></FaInstagram>
                                            </a>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className=" w-[350px] bg-base-100 shadow-lg rounded-3xl mb-6">
                    <figure className="px-8 pt-6 ">
                        <img src={tasfirul} alt="Shoes" className="rounded-t-3xl bg-gray-100 mx-8 h-[250px] w-[230px]" />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <div className='bg-gray-100 px-4 '>

                            <div>


                                <h2 className='text-xl text-black font-bold pt-2'>Tafsirul Tonmoy </h2>
                                <p className='text-[16px] text-black font-semibold mt-3'>TrainerX Solution Devoloper  </p>
                                <p className='mt-3 px-4'> Tafsirul Tonmoy  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, suscipit? </p>

                                {/* social link */}
                                <div className="flex gap-4 mt-2 
                                ml-[75px]">
                                    <div className="flex">
                                        <div className="flex ">
                                            <a className="py-4 " href="https://www.facebook.com">
                                                <MdFacebook className="h-8 w-8 text-green-400 rounded-full"></MdFacebook>
                                            </a>

                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex">
                                            <a className="py-4 " href="https://twitter.com">
                                                <FaTwitterSquare className="h-8 w-8 text-green-400 rounded-full"></FaTwitterSquare>
                                            </a>

                                        </div>

                                    </div>
                                    <div className="flex">
                                        <div className="flex">
                                            <a className="py-4 " href="https://www.instagram.com/">
                                                <FaInstagram className="h-8 w-8 text-green-400 rounded-full"></FaInstagram>
                                            </a>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className=" w-[350px] bg-base-100 shadow-lg rounded-3xl mb-6">
                    <figure className="px-8 pt-6 pb-">
                        <img src={man} alt="Shoes" className="rounded-xl bg-gray-100 mx-8 h-[250px] w-[230px]" />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <div className='bg-gray-100 px-4 '>

                            <div className=''>


                                <h2 className='text-xl text-black font-bold pt-2'>Mr josef </h2>
                                <p className='text-[16px] text-black font-semibold mt-3'>TrainerX Solution marketor  </p>
                                <p className='mt-3 px-4'> Mr josefn  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, suscipit? </p>

                                {/* social link */}
                                <div className="flex gap-4 mt-2 
                                ml-[75px]">
                                    <div className="flex">
                                        <div className="flex ">
                                            <a className="py-4 " href="https://www.facebook.com">
                                                <MdFacebook className="h-8 w-8 text-green-400 rounded-full"></MdFacebook>
                                            </a>

                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex">
                                            <a className="py-4 " href="https://twitter.com">
                                                <FaTwitterSquare className="h-8 w-8 text-green-400 rounded-full"></FaTwitterSquare>
                                            </a>

                                        </div>

                                    </div>
                                    <div className="flex">
                                        <div className="flex">
                                            <a className="py-4 " href="https://www.instagram.com/">
                                                <FaInstagram className="h-8 w-8 text-green-400 rounded-full"></FaInstagram>
                                            </a>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;