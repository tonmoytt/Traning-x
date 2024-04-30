import { Link } from "react-router-dom";
import img from "./../../../assets/image/logo.png"
import { FaAngleDown } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
    const navbar = <>
        <div className="flex gap-4">


            <li className="text-xl font-semibold"><a>Home</a></li>
            <li className="text-xl font-semibold"><a>About us</a></li>
            <li className="text-xl font-semibold"><a>Success story</a></li>
            <li className="text-xl font-semibold"><a>Freelancing</a></li>
            <li className="text-xl font-semibold"><a>Contact</a></li>
        </div>
    </>
    return (
        <div className="mx-8">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navbar
                            }
                        </ul>
                    </div>
                    <img src={img} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navbar
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link>  <div className="btn btn-error flex" >


                        <FaBookOpen></FaBookOpen>

                        <button className="  text-lg  rounded-md px-[10px] py-[4px]  input-bordered input-secondary font-semibold text-black">Browse Course
                        </button>
                        <FaAngleDown></FaAngleDown>


                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;