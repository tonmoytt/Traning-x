// import { Link } from "react-router-dom";
// import img from "./../../../assets/image/logo.png"
// import { FaAngleDown } from "react-icons/fa";
// import { FaBookOpen } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import img from "./../../../assets/image/edx-logo-elm.svg"
import "./Style.css"
import { IoIosArrowDown, IoIosArrowDropright, IoIosArrowDroprightCircle, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
    const [isHover, setIsHover] = useState(false)
    // const navbar = <>
    //     <div className="grid md:flex gap-4">


    //         <li className="text-xl font-semibold"><a>Home</a></li>
    //         <li className="text-xl font-semibold"><a>About us</a></li>
    //         <li className="text-xl font-semibold"><a>Success story</a></li>
    //         <li className="text-xl font-semibold"><a>Freelancing</a></li>
    //         <li className="text-xl font-semibold"><a>Contact</a></li>
    //     </div>
    // </>
    return (
        // <div className="mx-0 md:mx-8">
        //     <div className="navbar bg-base-100">
        //         <div className="navbar-start">
        //             <div className="dropdown">
        //                 <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                 </div>
        //                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72 h-[350px] ">
        //                     {
        //                         navbar
        //                     }
        //                 </ul>
        //             </div>
        //             <img src={img} alt="" />
        //         </div>
        //         <div className="navbar-center hidden lg:flex">
        //             <ul className="menu menu-horizontal px-1">
        //                 {
        //                     navbar
        //                 }
        //             </ul>
        //         </div>
        //         <div className="navbar-end">
        //             <Link>  <div className="btn btn-error flex" >


        //                 <FaBookOpen></FaBookOpen>

        //                 <button className="  text-lg  rounded-md px-[10px] py-[4px]  input-bordered input-secondary font-semibold text-black">Browse Course
        //                 </button>
        //                 <FaAngleDown></FaAngleDown>


        //             </div>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
        <div className="flex justify-between">
            {/* first/logo section */}
            <div className="flex gap-4 py-4 ml-6">
                <img className="h-12 w-12" src={img} alt="" />
                {/* learn section  */}
                <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="flex bg-black text-white gap-2 px-2 rounded-sm ">

                    <p id="dropdown" className="">

                        <div className="flex w-28 items-center">
                            <summary className="text-xl font-bold  mt-2 px-2">
                                Explore
                            </summary>
                            <div>
                                {
                                    !isHover ? <IoIosArrowDown className="h-5 w-5 mt-3 ml-[2px]"></IoIosArrowDown> : <IoIosArrowUp className="h-5 w-5 mt-3 ml-[2px]" />
                                }
                            </div>
                        </div>


                        <ul id="submenu" className="h-screen w-[280px] border absolute left-0 overflow-y-auto bg-gray-100">
                            <div>.</div>
                            {/* first */}
                            <li className=" font-bold pt-4 text-lg text-black px-4 " > By goal </li>

                            {/* first.1 */}
                            <Link to='/takecourse'>
                                <li className=" pl-4 text-black pt-4">Take a course </li>
                            </Link>

                            {/* first.2 */}
                            <div className="flex items-center gap-24">
                                <li className=" pl-4 text-black pt-4">Earn a certificate </li>
                                <IoIosArrowForward className="text-gray-600 mt-5 h-5 w-5" />

                            </div>
                            {/* first.3 */}
                            <div className="flex items-center gap-[115px]">
                                <li className=" pl-4 text-black pt-4">Earn a degree </li>
                                <IoIosArrowForward className="text-gray-600 mt-5 h-5 w-5" />

                            </div>

                            {/* second */}


                            <li className=" font-bold pt-4 text-lg text-black px-4 " > By Topic </li>

                            {/*  second.1 */}
                            <div className="flex items-center gap-[70px]">
                                <li className=" pl-4 text-black pt-4">Artificial intelligence </li>
                                <IoIosArrowForward className="text-gray-600 mt-5 h-5 w-5" />

                            </div>

                            {/*  second.2 */}
                            <div className="flex items-center gap-[123px]">
                                <li className=" pl-4 text-black pt-4">Data science </li>
                                <IoIosArrowForward className="text-gray-600 mt-5 h-5 w-5" />

                            </div>
                            {/*  second.3 */}
                            <div className="flex items-center gap-[157px]">
                                <li className=" pl-4 text-black pt-4">Finance</li>
                                <IoIosArrowForward className="text-gray-600 mt-5 h-5 w-5" />

                            </div>



                            <li className="font-semibold pl-4   text-lg  text-black pt-6">Search Half Map </li>
                            <li className="font-semibold pl-4   text-lg  text-black pt-6">Search Half Map </li>
                            <li className="font-semibold pl-4   text-lg  text-black pt-6">Search Half Map </li>
                            <li className="font-semibold pl-4   text-lg  text-black pt-6">Search Half Map </li>

                            <li className="font-semibold pl-4   text-lg  text-black pt-6">Search Half Map </li>
                            <li className="font-semibold pl-4   text-lg  text-black pt-6">Search Half Map </li>
                            <li className="font-semibold pl-4   text-lg  text-black pt-6">Search Half Map </li>
                            <li className="font-semibold pl-4   text-lg  text-black pt-6">Search Half Map </li>

                            <li className="font-semibold pl-4   text-lg  text-black pt-6">Search Half Map </li>
                            <li className="font-semibold pl-4   text-lg  text-black pt-6">Search Half Map </li>
                            <li className="font-semibold pl-4   text-lg  text-black pt-6">Search Half Map </li>
                            <li className="font-semibold pl-4   text-lg  text-black pt-6">Search Half Map </li>

                        </ul>


                    </p>






                </div>
                {/* search section */}
                <div className="flex items-center">


                    <input type="text" placeholder="What do you to learn ?" className="relative border border-black  px-2 pr-8 py-2 w-full max-w-xs" />

                    <button>
                        <FaSearch className="text-gray-500 absolute -ml-8 -mt-2"></FaSearch>
                    </button>
                </div>
            </div>
            {/* second/registion section */}
            <div className="flex">
                <button>
                    edX For Business
                </button>
                <div className="box2 bg-gray-200 px-10 items-center flex">
                   <Link to="/login"> <button className="text-black "> Sign in</button></Link>
                    <div className="">
                        <button className="btn box bg-red-400 hover:bg-red-400 items-center  ">
                        <Link to="/signup"> <p className="px-4">Registion for free</p>
                        </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;