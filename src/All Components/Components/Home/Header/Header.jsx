import Marquee from "react-fast-marquee";
import { IoCall } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import "./Style.css"





const Header = () => {
    return (
        <div className="bg-[#074173] px-4 py-[10px] flex justify-between items-center">
            {/* first section */}
            <div className="flex text-white">

                {/* <div className="flex mx-10  gap-4 items-center">
                    <IoCall className="w-5 h-5 mt-1 "></IoCall>
                    <p className="text-lg">017******09</p>
                </div> */}


                <div id="border-box ">

                    <div id="border-animation" className="text-lg -mt-5">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Dream career
                    </div>
                </div>

            </div>
            {/* second section */}
            <div className=" ml-[340px] w-[600px] flex rounded-md bg-sky-200 px-6 text-center absolute">
                <p className="bg-pink-500 px-2 py-2 w-36 rounded-md text-white uppercase">Our service</p>
                <Marquee pauseOnHover className="bg-gray-100">

                    <p id="color2">
                        Workshops and Webinars,Career Fairs,  Training Programs.</p>
                </Marquee>
            </div>
            {/*Third section */}
            <div className="pl-[1000px] flex mx-10  gap-4 items-center relative">
                   
                    <MdMessage className="w-5 h-5 mt-1 text-white "></MdMessage>
                    <p className="text-lg text-gray-200">help@gmail.com</p>
                </div>




            <div>

            </div>
        </div>
    );
};

export default Header;