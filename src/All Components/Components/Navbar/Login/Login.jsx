import { GrGithub } from "react-icons/gr";
import background from "./../../../../assets/image/bg fixed.avif";
import gif from "./../../../../assets/image/bg4.avif";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Background Image */}
      <img
        className="h-[660px] w-full object-cover"
        src={background}
        alt="Background"
      />

      {/* Login Box */}
      <div className="absolute inset-0 flex justify-center items-start pt-10 px-4 md:px-10">
        <div className="hero bg-white rounded-lg shadow-xl max-w-7xl w-full flex flex-col lg:flex-row gap-6 lg:gap-10 py-6 px-4 md:px-10">
          {/* Image Section */}
          <div className="flex-shrink-0 w-full lg:w-[820px]">
            <img
              className="rounded-lg w-full h-auto max-h-[500px] object-cover"
              src={gif}
              alt="Login Illustration"
            />
          </div>

          {/* Form Section */}
          <div className="card w-full max-w-sm shadow-2xl bg-base-100 p-6">
            <form className="card-body space-y-5">
              {/* Heading */}
              <div>
                <p className="text-3xl font-bold">Login</p>
                <p className="text-gray-500 mt-1">
                  Doesn't have an account yet?{" "}
                  <Link to="/signup">
                    <span className="text-fuchsia-400 border-b border-black cursor-pointer">
                      Sign Up
                    </span>
                  </Link>
                </p>
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label flex justify-between items-center">
                  <span className="label-text font-semibold text-base">
                    Password
                  </span>
                  <Link
                    to="#"
                    className="label-text-alt link link-hover text-fuchsia-400 border-b border-black text-sm"
                  >
                    Forgot password?
                  </Link>
                </label>
                <input
                  type="password"
                  placeholder="Enter 6 character or more"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Login Button */}
              <div className="form-control mt-4">
                <button className="btn bg-fuchsia-400 hover:bg-fuchsia-500 text-white">
                  Login
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2 md:gap-10 mt-4">
                <hr className="border-sky-300 w-10 md:w-24" />
                <p className="text-base md:text-xl text-gray-400 font-semibold text-center flex-grow">
                  Continue
                </p>
                <hr className="border-sky-300 w-10 md:w-24" />
              </div>

              {/* Social Buttons */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4">
                <button className="relative flex items-center justify-center border-2 border-error btn-outline rounded-lg px-10 py-2 text-lg md:text-base text-center hover:bg-fuchsia-100 transition">
                  <FcGoogle className="absolute left-3 h-6 w-6" />
                  Google
                </button>

                <button className="relative flex items-center justify-center border-2 border-accent btn-outline rounded-lg px-10 py-2 text-lg md:text-base text-center hover:bg-sky-100 transition">
                  <GrGithub className="absolute left-3 h-6 w-6 bg-sky-500 rounded-full p-[2px] text-white" />
                  Github
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
