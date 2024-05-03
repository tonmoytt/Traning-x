import { GrGithub } from "react-icons/gr";
import background from "./../../../../assets/image/bg fixed.avif"
import gif from "./../../../../assets/image/bg4.avif"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <img className="h-[660px] w-full relative" src={background} alt="" />
            {/* login div */}
            <div className="absolute -mt-[620px] mx-auto ml-10 ">
                <div className="hero px-10 py-6 bg-white  ">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-1">
                        <div className="text-center lg:text-left">
                            <img className="h-[500px] w-[820px] rounded-lg" src={gif} alt="" />
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div>
                                    <p className="text-2xl font font-bold">Login</p>
                                    <p className="text-gray-400 mt-1">Dosen't have an account yet?
                                        <Link to="/signup"> <span className="text-fuchsia-400 border-b border-black">Sign Up</span>
                                        </Link>
                                    </p>
                                </div>
                                <div className="form-control mt-4">
                                    <label className="label">
                                        <span className="label-text font-semibold font text-base">Email Address</span>
                                    </label>
                                    <input type="email" placeholder="you@exemple.com" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label flex justify-between">
                                        <span className="label-text font-semibold text-base ">Password</span>
                                        <span> <a href="#" className="label-text-alt link link-hover  text-fuchsia-400 border-b border-black text-sm">Forgot password?</a></span>
                                    </label>
                                    <input type="password" placeholder="Enter 6 character or more" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-4">
                                    <button className="btn bg-fuchsia-400">Login</button>
                                </div>

                                {/* continew  */}
                                <div className="flex items-center gap-2 md:gap-10 mt-2">
                                    <div className="text-sky-300 w-[45px] md:w-[100px]">
                                        <hr />
                                        <hr />


                                    </div>
                                    <p className="text-base md:text-[20px] text-gray-300 font-semibold mx-auto">Continue</p>

                                    <div className="text-sky-300 w-[45px] md:w-[100px]">
                                        <hr className="text-sky-300" />
                                        <hr className="text-sky-300" />



                                    </div>

                                </div>

                                {/* btn */}
                                <div className="flex gap-[10px] md:gap-8 mt-2">
                                    <div className="flex items-center ">
                                        <FcGoogle className="picture h-4 md:h-6 w-5 md:w-6 absolute ml-2 md:ml-4"></FcGoogle>
                                        <button className="border-2 btn-outline btn-error text-center  rounded-lg px-7 md:px-[45px] text-lg md:text-[16px] relative py-1 md:py-1 ml-2">Google</button>
                                    </div>
                                    <div className="flex items-center">
                                        <GrGithub className="picture h-5 md:h-6 w-5 md:w-6 absolute ml-2   md:ml-4 bg-sky-500 rounded-3xl"></GrGithub>
                                        <button className=" border-2 rounded-lg btn-outline btn-accent px-7 md:px-[45px] text-lg md:text-[16px] relative py-1 md:py-1 ml-2">Github</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;