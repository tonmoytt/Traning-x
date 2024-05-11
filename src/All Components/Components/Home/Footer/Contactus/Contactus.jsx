import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAddIcCall, MdOutlineEmail } from "react-icons/md";
import locationimg from "./../../../../../assets/image/google.jpg"



const Contactus = () => {
    return (
        <div>
            {/* first section */}
            <div className="flex gap-20 my-10 mx-20">

                <div>
                    <img className="h-72 rounded-t-lg" src={locationimg} alt="" />
                </div>
                {/* information */}
                <div>
                    {/* location and information */}
                    <div>
                        <h1 className="font-bold text-xl text-rose-400">Branch Office [Uttara Branch]</h1>
                        <p className="text-sm text-gray-500 mt-4">RAJUK Razib Cosmo Shopping Complex</p>
                        <p className="text-sm text-gray-500 my-1">7th Floor, H#71, R#5, Sector#7, Azampur Bus Stand,</p>
                        <p className="text-sm text-gray-500 my-1">Uttara, Dhaka-1230</p>
                    </div>
                    {/* phone numbner */}
                    <div className="flex gap-10">
                        <div>

                            <h1 className="font-bold text-xl mt-4">Phone Number</h1>
                            <p className="text-sm text-gray-500 mt-2">+880 199077***</p>
                            <p className="text-sm text-gray-500 mt-2">+880 199077***</p>
                        </div>
                        {/* office addres*/}
                        <div>

                            <h1 className="font-bold text-xl mt-4">Office Visit Time</h1>
                            <p className="text-sm text-gray-500 mt-2"> Saturday- Friday</p>
                            <p className="text-sm text-gray-500 mt-2"> 9:00 am to 8:00 pm</p>
                            <div>
                                <h1 className="font-bold text-xl mt-2">E-Mail</h1>
                                <p className="text-sm text-gray-500 mt-2"> help@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* second section */}
            <div id="background" className="py-8 bg-[#003B5B]">
                <div className=" ">
                    <p className="mx-auto text-white text-4xl font-semibold max-w-[330px] border-b-2 border-b-sky-400">Have any <span className="text-sky-400">Question</span>?</p>

                </div>
                <div className="grid md:grid-cols-2 border-2 rounded-md mx-4 md:mx-10 lg:mx-16 mt-6 py-10 px-4">
                    <div>

                        {/* addres */}
                        <div className="flex gap-1 items-center">
                            <CiLocationOn className="text-sky-400 h-12 w-12"></CiLocationOn>
                            <div className="text-white">
                                <p className="text-2xl font-bold">Our Location</p>
                                <p className="text-sm">Bogura</p>
                            </div>
                        </div>
                        {/* section 2 phne */}
                        <div className="  gap-2 flex mt-8 items-center">


                            <MdOutlineAddIcCall className="text-sky-500 h-10 w-10"></MdOutlineAddIcCall>
                            <div className="text-white ">
                                <p className="text-xl font-bold">PHONE NUMBER</p>
                                <p className="text-sm">Mobile: 01739 ******</p>
                            </div>
                        </div>
                        {/* section 3 */}
                        <div className="flex mt-8 gap-2 mb-20 md:mb-0 items-center">



                            <MdOutlineEmail className="text-sky-500 h-10 w-10"></MdOutlineEmail>
                            <div className="text-white items-center">
                                <p className="text-2xl font-bold"> Email</p>
                                <p className="text-sm">help9@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    {/* input section */}
                    <form >
                        <h1 id="drive" className="bg-red-400 text-center text-2xl mb-6 block md:hidden">Fill up Please</h1>
                        <div className="mt-2">
                            <div className="grid md:grid-cols-2 gap-10">
                                <input type="text" placeholder="Name" className=" bg-[#003352] text-white rounded-md px-2 border-b-2 border-b-sky-400 w-full max-w-xs" required />
                                <input type="number" placeholder="Number" className=" bg-[#003352] text-white rounded-md px-2 border-b-2 border-b-sky-400 w-full max-w-xs" required />
                            </div>
                            {/*  */}
                            <input type="email" placeholder="Email" className="mt-10 bg-[#003352] text-white rounded-md px-2 border-b-2 border-b-sky-400 w-full " required />
                            {/* msg */}

                            <textarea className="textarea textarea-bordered textarea-xs w-full mt-10 bg-[#003352] text-white rounded-md px-2 border-b-2 border-b-sky-400 " placeholder="Write details">

                            </textarea>

                            <button type="submit" className="text-lg mt-2 w-full py-1 rounded-lg bg-sky-400">Send</button>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contactus;