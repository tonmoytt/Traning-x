import "./Style.css"
import background from "./../../../../assets/image/login.jpg"
import logo from "./../../../../assets/image/logo.png"
import background2 from "./../../../../assets/image/Signup.jpg"
import { GrGithub } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="">
            <img className="h-[600px] w-full relative" src={background} alt="" />
            <div className="absolute -mt-[550px]">
                <img className="w-[1000px] h-[500px] mx-[200px] relative rounded-md" src={background2} alt="" />

                {/* authinction  */}

                <div id="shadow-maker" className="rounded-xl md:rounded-md shrink-0 mx-4 max-w-[290px] md:max-w-[470px] absolute -mt-[650px] md:-mt-[550px] lg:-mt-[470px] md:mx-[130px] lg:mx-[200px] ">
                    <p id="color2" className="uppercase font-bold text-4xl mx-12">Sign-UP ToDay</p>
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

                </div>
                {/* third section */}
                <div className="absolute w-60 ml-[990px] -mt-40">
                    <p className="text-2xl font-semibold text-white">Welcome now.</p>
                    <p className="text-left text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, reprehenderit!</p>
                </div>

                {/* it's logo */}
                <div className="absolute ml-[990px] -mt-[480px]">
                    <img src={logo} alt="" />
                </div>


            </div>
        </div>
    );
};

export default SignUp;
