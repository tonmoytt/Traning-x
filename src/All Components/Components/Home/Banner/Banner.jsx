
import { Link } from "react-router-dom";
import banner from "./../../../../assets/image/wallpaperflare.com_wallpaper (1).jpg"
import logo from "./../../../../assets/image/fast-co.png"
import "./Style.css"

const Banner = () => {
    return (
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
    );
};

export default Banner;