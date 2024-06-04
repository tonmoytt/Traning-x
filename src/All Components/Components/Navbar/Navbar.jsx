// import { Link } from "react-router-dom";
// import img from "./../../../assets/image/logo.png"
// import { FaAngleDown } from "react-icons/fa";
// import { FaBookOpen } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import img from "./../../../assets/image/edx-logo-elm.svg"
import "./Style.css"
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GrGithub } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";



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
                <Link to="/"><img className="h-12 w-12" src={img} alt="" /></Link>
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





                        </ul>


                    </p>






                </div>
                {/* search section */}
                {/* <div className="flex items-center">


                    <input type="text" placeholder="What do you to learn ?" className="relative border border-black  px-2 pr-8 py-2 w-full max-w-xs" />

                    <button>
                        <FaSearch className="text-gray-500 absolute -ml-8 -mt-2"></FaSearch>
                    </button>
                </div> */}
            </div>
            {/* second/registion section */}
            <div className="flex justify-center items-center">
                <Link to="/previous-page">
                    <button className="edx-button hover:bg-orange-300 hover:text-lg hover:px-1 hover:rounded-md">
                        Case studies
                    </button>
                </Link>
                <div className="box2 bg-gray-200 px-10 items-center flex ml-4">

                    <Link to="/login">
                        <button className="text-black">Sign in</button>
                    </Link>
                    <div className="">
                        <button className="btn box bg-red-400 hover:bg-red-400 items-center">
                            {/* <Link to="/signup">
                            <p className="px-4">Registration for free</p>
                        </Link> */}

                            {/* modal  */}

                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="px-4 " onClick={() => document.getElementById('my_modal_5').showModal()}>Registration for free</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle  ">
                            <form className="card-body">
                        {/* name */}
                        <div className="form-control text-sky-400">

                            <input type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered input-info  bg-[#062244] text-sky-500 " required />
                        </div>
                        {/* email */}

                        <div className="form-control text-white mt-1">

                            <input type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered input-info bg-[#062244]" required />
                        </div>

                        {/* picture */}
                        {/* <input type="file" name="picture" className="mt-4 file-input file-input-bordered file-input-primary w-full max-w-lg bg-[#062244] text-sky-500" /> */}

                        {/* password */}
                        <div className="form-control ">

                            <input type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered input-error bg-[#062244] text-sky-500" required />

                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-secondary text-xl font-semibold">Register</button>
                        </div>

                        {/* second */}
                        <div className="form-control mt-2 ml-1 " >
                            <p className="text-lg md:text-[17px] font-sans text-gray-400">Already have an account? <Link to="/login"> <span className="underline text-cyan-400">Login</span></Link>
                            </p>

                            {/* continew  */}
                            <div className="flex items-center gap-2 md:gap-4 mt-4">
                                <div className="text-sky-300 w-[45px] md:w-[90px]">
                                    <hr />
                                    <hr />


                                </div>
                                <p className="text-base md:text-[20px] text-gray-300 font-semibold mx-auto">Continue</p>

                                <div className="text-sky-300 w-[45px] md:w-[80px]">
                                    <hr className="text-sky-300" />
                                    <hr className="text-sky-300" />



                                </div>

                            </div>

                            {/* btn */}
                            <div className="flex gap-[10px] md:gap-4 mt-2">
                                <div className="flex items-center mr-2">
                                    <FcGoogle className="picture h-4 md:h-6 w-5 md:w-6 absolute ml-2 md:ml-4"></FcGoogle>
                                    <button className="border-2 btn-outline btn-error text-center  rounded-lg px-7 md:px-[40px] text-lg md:text-[16px] relative py-1 md:py-1 ml-2">Google</button>
                                </div>
                                <div className="flex items-center">
                                    <GrGithub className="picture h-5 md:h-6 w-5 md:w-6 absolute ml-2   md:ml-4 bg-sky-500 rounded-3xl"></GrGithub>
                                    <button className=" border-2 rounded-lg btn-outline btn-accent px-7 md:px-[40px] text-lg md:text-[16px] relative py-1 md:py-1 ml-2">Github</button>
                                </div>

                            </div>


                        </div>
                    </form>
                            </dialog>

                        </button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;