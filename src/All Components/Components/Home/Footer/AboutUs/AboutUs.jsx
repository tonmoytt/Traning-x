import { FaDailymotion, FaDiscourse } from "react-icons/fa";
import img from "./../../../../../assets/image/about us.png"
import { Fa42Group } from "react-icons/fa6";

const AboutUs = () => {
    return (
        <div className="bg-[#F1F3F4]">

            <div className=" bg-[#EBEDEA] mx-10 my-10  py-6 items-center mt-10">
                <div className="  px-20 flex gap-20">
                    {/* img */}
                    <div>
                        <img className="w-[400px] h-[400px] rounded-t-lg" src={img} alt="" />
                    </div>
                    {/* information */}
                    <div className="w-9/12">
                        <p className="text-3xl font-semibold text-[#897F6F]">Form skety to real life</p>
                        <p className="mt-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laborum praesentium quasi qui atque quam rem possimus molestias aliquam! Maxime ea reprehenderit id optio est. Sit itaque ab fuga maxime? laborum praesentium quasi qui atque quam rem possimus molestias aliquam! Maxime ea reprehenderit id optio est. Sit itaque ab fuga maxime?</p>
                        <p className="mt-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisic reprehenderit id optio est. Sit itaque ab fuga maxime? laborum praesentium quasi qui atque quam rem possimus molestias aliquam! Maxime ea reprehenderit id optio est. Sit itaque ab fuga maxime?</p>
                    </div>
                </div>
                {/* section 2 */}
                <div className="bg-orange-100 mt-10 grid md:flex gap-16 md:pl-[370px] ">
                    {/* first */}
                    <div className="flex gap-1 py-2 px-4 items-center">
                        <FaDiscourse className="h-10 w-10 "></FaDiscourse>
                        <div>
                            <h1 className="text-[30px] font-bold">10+</h1>
                            <p className="ml-1">java</p>

                        </div>
                    </div>
                    {/* second */}
                    <div className="flex gap-1 py-2 px-4 items-center">
                        <Fa42Group className="h-10 w-10 "></Fa42Group>
                        <div>
                            <h1 className="text-[30px] font-bold">30+</h1>
                            <p className="ml-1">Backend</p>

                        </div>
                    </div>
                    {/* third */}
                    <div className="flex gap-1 py-2 px-4 items-center">
                        <FaDiscourse className="h-10 w-10 "></FaDiscourse>
                        <div>
                            <h1 className="text-[30px] font-bold">50+</h1>
                            <p className="ml-1">Front-end</p>

                        </div>
                    </div>
                    {/* four */}
                    <div className="flex gap-1 py-2 px-4 items-center">
                        <FaDailymotion className="h-10 w-10 "></FaDailymotion>
                        <div>
                            <h1 className="text-[30px] font-bold">130+</h1>
                            <p className="ml-1">java-script</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;