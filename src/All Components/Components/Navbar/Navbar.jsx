import img from "./../../../assets/image/edx-logo-elm.svg"
import "./Style.css"
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GrGithub } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
    const [isHover, setIsHover] = useState(false)

    return (
        <div className="flex md:justify-between flex-wrap md:flex-nowrap">
            {/* first/logo section */}
            <div className="flex gap-4 py-4 md:ml-6 flex-wrap md:flex-nowrap">
                <Link to="/">
                    <img
                        className="h-12 w-auto hidden md:block"
                        src={img}
                        alt=""
                    />
                </Link>

                {/* learn section */}
                <div
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className="flex text-white gap-2 px-2 rounded-sm relative bg-black"
                >
                    <p id="dropdown" className="relative cursor-pointer select-none">
                        <div className="flex w-28 items-center">
                            <summary className="text-xl font-bold mt-2 px-2">Explore</summary>
                            <div>
                                {!isHover ? (
                                    <IoIosArrowDown className="h-5 w-5 mt-3 ml-[2px]" />
                                ) : (
                                    <IoIosArrowUp className="h-5 w-5 mt-3 ml-[2px]" />
                                )}
                            </div>
                        </div>

                        <ul
                            id="submenu"
                            className="h-screen max-h-[90vh] w-[280px] border absolute left-0 overflow-y-auto bg-gray-100 shadow-lg rounded-md z-50"
                        >
                            <div>.</div>

                            {/* first */}
                            <li className="font-bold pt-4 text-lg text-black px-4">By goal</li>

                            {/* first.1 */}
                            <Link to='/takecourse'>
                                <li className="pl-4 text-black pt-4 cursor-pointer">Take a course</li>
                            </Link>

                            {/* first.2 */}
                            <div className="flex items-center gap-24">
                                <li className="pl-4 text-black pt-4 cursor-pointer">Earn a certificate</li>
                                <IoIosArrowForward className="text-gray-600 mt-5 h-5 w-5" />
                            </div>

                            {/* first.3 */}
                            <div className="flex items-center gap-[115px]">
                                <li className="pl-4 text-black pt-4 cursor-pointer">Earn a degree</li>
                                <IoIosArrowForward className="text-gray-600 mt-5 h-5 w-5" />
                            </div>

                            {/* second */}
                            <li className="font-bold pt-4 text-lg text-black px-4">By Topic</li>

                            {/* second.1 */}
                            <div className="flex items-center gap-[70px]">
                                <li className="pl-4 text-black pt-4 cursor-pointer">Artificial intelligence</li>
                                <IoIosArrowForward className="text-gray-600 mt-5 h-5 w-5" />
                            </div>

                            {/* second.2 */}
                            <div className="flex items-center gap-[123px]">
                                <li className="pl-4 text-black pt-4 cursor-pointer">Data science</li>
                                <IoIosArrowForward className="text-gray-600 mt-5 h-5 w-5" />
                            </div>

                            {/* second.3 */}
                            <div className="flex items-center gap-[157px]">
                                <li className="pl-4 text-black pt-4 cursor-pointer">Finance</li>
                                <IoIosArrowForward className="text-gray-600 mt-5 h-5 w-5" />
                            </div>
                        </ul>
                    </p>
                </div>
            </div>

            {/* second/registration section */}
            <div className="flex justify-center items-center flex-wrap gap-4 md:gap-0">
                <Link to="/previous-page">
                    <button className="edx-button hidden md:block hover:bg-orange-300 hover:text-lg hover:px-1 hover:rounded-md">
                        Case studies
                    </button>
                </Link>

                <div className="md:box2 md:bg-gray-200 px-6 md:px-10 items-center flex ml-0 md:ml-4">
                    <Link to="/login">
                        <button className="text-black hidden md:block">Sign in</button>
                    </Link>
                    <div>
                        <button
                            className="md:btn box md:bg-red-400 hover:bg-red-400 items-center"
                            onClick={() => document.getElementById("my_modal_5").showModal()}
                        >
                            <button className="md:px-4 btn bg-red-400 text-lg md:text-base">
                                Registration <span className="hidden md:inline">for free</span>
                            </button>
                        </button>

                        {/* modal */}
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <form className="card-body">
                                <div className="form-control text-sky-400 bg-red-200">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="input input-bordered input-info bg-[#062244] text-sky-500"
                                        required
                                    />
                                </div>

                                <div className="form-control text-white mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="input input-bordered input-info bg-[#062244]"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="input input-bordered input-error bg-[#062244] text-sky-500"
                                        required
                                    />
                                </div>

                                <div className="form-control mt-4">
                                    <button className="btn btn-secondary text-xl font-semibold">Register</button>
                                </div>

                                <div className="form-control mt-2 ml-1">
                                    <p className="text-lg md:text-[17px] font-sans text-gray-400">
                                        Already have an account?{" "}
                                        <Link to="/login">
                                            <span className="underline text-cyan-400">Login</span>
                                        </Link>
                                    </p>

                                    <div className="flex items-center gap-2 md:gap-4 mt-4">
                                        <div className="text-sky-300 w-[45px] md:w-[90px]">
                                            <hr />
                                            <hr />
                                        </div>
                                        <p className="text-base md:text-[20px] text-gray-300 font-semibold mx-auto">
                                            Continue
                                        </p>
                                        <div className="text-sky-300 w-[45px] md:w-[80px]">
                                            <hr className="text-sky-300" />
                                            <hr className="text-sky-300" />
                                        </div>
                                    </div>

                                    <div className="flex gap-[10px] md:gap-4 mt-2">
                                        <div className="flex items-center mr-2">
                                            <FcGoogle className="picture h-4 md:h-6 w-5 md:w-6 absolute ml-2 md:ml-4" />
                                            <button className="border-2 btn-outline btn-error text-center rounded-lg px-7 md:px-[40px] text-lg md:text-[16px] relative py-1 md:py-1 ml-2">
                                                Google
                                            </button>
                                        </div>
                                        <div className="flex items-center">
                                            <GrGithub className="picture h-5 md:h-6 w-5 md:w-6 absolute ml-2 md:ml-4 bg-sky-500 rounded-3xl" />
                                            <button className="border-2 rounded-lg btn-outline btn-accent px-7 md:px-[40px] text-lg md:text-[16px] relative py-1 md:py-1 ml-2">
                                                Github
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
