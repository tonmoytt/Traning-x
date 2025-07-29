import img from "./../../../../assets/image/footer.svg"
import { MdFacebook, } from "react-icons/md";
import { FaInstagram, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import "./style.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-gray-100 px-6">
            <div className="py-20 grid md:grid-cols-4">

                <div>
                    <h1 className="text-xl font-bold pb-4">Support</h1>
                    <p className="text-gray-500 pb-1">Help Center</p>
                    <p className="text-gray-500 pb-1">Our COVID-19 Response</p>
                    <p className="text-gray-500 pb-1">Cancellation options</p>
                    <p className="text-gray-500">Safety information</p>
                </div>

                <div>
                    <h1 className="text-xl font-bold pb-4">Company</h1>
                   <Link to="/aboutus">
                    <p className="text-gray-500 pb-1">About us</p>
                   </Link>
                    <p className="text-gray-500 pb-1">Community Blog</p>
                    <p className="text-gray-500 pb-1">Careers</p>
                    <p className="text-gray-500">Privacy policy</p>
                    <p className="text-gray-500">Terms of service</p>
                </div>

                <div>
                    <h1 className="text-xl font-bold pb-4">Contact</h1>
                    <Link to="/contact">
                        <p className="text-gray-500 pb-1">Contact us</p>
                    </Link>
                    <p className="text-gray-500 pb-1">FAQ</p>
                    <p className="text-gray-500 pb-1">Get in touch</p>

                </div>
                <div>
                    {/* <p className="text-xl font-bold pb-4">Social</p> */}
                    {/* logo */}
                    <div className="style-css ml-0 md:ml-4 lg:ml-[30px] w-[90px] md:w-[50px]">
                        <h2 data-text="TRAINER~X" className="style-css-two text-4xl  ml-40 md:ml-24 lg:">TRAINER~X</h2>
                    </div>


                    <div className="flex gap-4 md:pr-10">
                        <div className="flex">
                            <div className="flex">
                                <a className="py-4 " href="https://www.facebook.com">
                                    <MdFacebook className="h-10 w-10"></MdFacebook>
                                </a>

                            </div>




                        </div>
                        <div className="flex">
                            <div className="flex">
                                <a className="py-4 " href="https://twitter.com">
                                    <FaTwitterSquare className="h-9 w-9"></FaTwitterSquare>
                                </a>

                            </div>




                        </div>
                        <div className="flex">
                            <div className="flex">
                                <a className="py-4 " href="https://www.instagram.com/">
                                    <FaInstagram className="h-9 w-9"></FaInstagram>
                                </a>

                            </div>




                        </div>
                        <a className="py-4 " href="https://www.youtube.com/">
                            <FaYoutube className="h-10 w-10"></FaYoutube>
                        </a>
                    </div>
                </div>


            </div>

            <div className="border-t-4 flex justify-between items-center">
                <div className="">
                    <p className="text-gray-500 pt-5 pb-5" >© Copyright Tonmoy 2025</p>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;