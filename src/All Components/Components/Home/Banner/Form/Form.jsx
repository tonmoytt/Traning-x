import { Link } from "react-router-dom";


const Form = () => {
    return (
        <div className="bg-[#DFE2EC] pt-8 pb-8">

            <div className="grid grid-cols-4 bg-white mx-24  ">
                {/* 1st section */}
                <div className="col-span-3 pt-6">
                    <p className="text-4xl font-semibold text-center ">Your form</p>
                    <div className="mt-1 ">
                        <hr className="bg-sky-400 text-sky-400 w-[170px] ml-[345px]" />
                        <hr className="bg-sky-400 text-sky-400 w-[170px] ml-[345px]" />
                    </div>
                    {/* 1st section */}
                    <div className=" mx-10">

                        <form className="card-body">

                            <div className="grid grid-cols-3 gap-8">
                                {/* first name */}
                                <div className="form-control text-sky-400">
                                    <label className="label">
                                        <span className="label-text text-gray-400 text-sm">First name</span>
                                    </label>
                                    <input type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="input input-bordered input-info  text-sky-500 " required />
                                </div>
                                {/* last name */}
                                <div className="form-control text-sky-400">
                                    <label className="label">
                                        <span className="label-text text-gray-400 text-sm">Last name</span>
                                    </label>
                                    <input type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="input input-bordered input-info  text-sky-500 " required />
                                </div>
                                {/* email */}

                                <div className="form-control text-sky-400 mt-1">
                                    <label className="label">
                                        <span className="label-text text-gray-400 text-sm">E-mail</span>
                                    </label>
                                    <input type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="input input-bordered input-info  " required />
                                </div>
                            </div>

                            {/* second section */}
                            <div className="grid grid-cols-3 gap-8 mt-10">
                                {/*country*/}
                                <div className="form-control text-sky-400">
                                    <label className="label">
                                        <span className="label-text text-gray-400 text-sm">Country</span>
                                    </label>
                                    <select className="select select-bordered w-full max-w-xs">
                                        <option disabled selected className="text-gray-400">Country?</option>
                                        <option>Bangladesh</option>
                                        <option>India</option>
                                        <option>Usa</option>
                                        <option>Canada</option>
                                        <option>UK</option>
                                    </select>
                                </div>
                                {/* Address */}
                                <div className="form-control text-sky-400 col-span-2">
                                    <label className="label">
                                        <span className="label-text text-gray-400 text-sm">Address</span>
                                    </label>
                                    <input type="text"
                                        name="name"

                                        className="input input-bordered input-info  text-sky-500 " required />
                                </div>

                            </div>

                            {/* third section */}
                            <div className="grid grid-cols-3 gap-8">
                                {/* zila */}
                                <div className="form-control text-sky-400">
                                    <label className="label">
                                        <span className="label-text text-gray-400 text-sm">Zila</span>
                                    </label>
                                    <select className="select select-bordered w-full max-w-xs">
                                        <option disabled selected className="text-gray-400">Divistion?</option>

                                        <option>Dhaka</option>
                                        <option>Rajshahi</option>
                                        <option>Dinajpur</option>
                                        <option>Rangpur</option>
                                        <option>Mymangshing</option>
                                        <option>Barishal</option>
                                        <option>Sylet</option>
                                        <option>Chottragram</option>
                                    </select>
                                </div>
                                {/* number */}
                                <div className="form-control text-sky-400">
                                    <label className="label">
                                        <span className="label-text text-gray-400 text-sm">Number</span>
                                    </label>
                                    <input type="number"
                                        name="number"
                                        placeholder="017********88"
                                        className="input input-bordered input-info  text-sky-500 " required />
                                </div>
                                {/*Zip */}

                                <div className="form-control text-sky-400 mt-1">
                                    <label className="label">
                                        <span className="label-text text-gray-400 text-sm">Zip Code</span>
                                    </label>
                                    <input type="number"
                                        name="zip"

                                        className="input input-bordered input-info  " required />
                                </div>
                            </div>

                            {/* treams  */}
                            <div className="flex gap-2  mt-5">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                <p>I agree treams and condistion</p>
                            </div>

                            {/* btn */}
                            <div className="flex justify-between mt-16">
                                <Link to="/">
                                    <button className="btn btn-outline btn-secondary text-lg">Back to Home</button>
                                </Link>

                                <button className="px-6 btn bg-green-400 text-xl hover:btn-secondary"> Register</button>
                            </div>

                        </form>

                    </div>

                </div>
                {/* second div/section */}
                <div className="col-span-1 bg-[#313A72]">
                    <div className="pl-10">
                        <p className="text-white text-xl mt-4 font-semibold">Payment mathod</p>

                        {/* bkash  */}
                        <h1 className="text-sky-400 border-y-2 border-[#2D366E] py-2 mt-8">Payment on Bkash <span className="ml-20 text-gray-300">$299</span></h1>
                        {/* nogod  */}
                        <h1 className="text-sky-400 border-y-2 border-[#2D366E] py-2 mt-8">Payment on Nogod <span className="ml-[73px] text-gray-300">$299</span></h1>
                        {/* rocket  */}
                        <h1 className="text-sky-400 border-y-2 border-[#2D366E] py-2 mt-8">Payment on Rocket <span className="ml-[75px] text-gray-300">$299</span></h1>
                        {/* uppai  */}
                        <h1 className="text-sky-400 border-y-2 border-[#2D366E] py-2 mt-8">Payment on Uppai <span className="ml-[81px] text-gray-300">$299</span></h1>
                    </div>
                    {/* bank */}

                    <div className="pl-10">
                        {/* <p className="text-white text-xl mt-4 font-semibold">Payment mathod</p> */}

                        {/* Paynoor  */}

                        {/* <h1 className="text-sky-400 border-y-2 border-[#2D366E] py-2 mt-8">Payment on Paynoor <span className="ml-[65px] text-gray-300">$299</span></h1> */}

                        {/* visa card  */}

                        {/* <h1 className="text-sky-400 border-y-2 border-[#2D366E] py-2 mt-8">Payment on Visa card <span className="ml-[62px] text-gray-300">$299</span></h1> */}

                        {/* master card  */}

                        {/* <h1 className="text-sky-400 border-y-2 border-[#2D366E] py-2 mt-8">Payment on master card <span className="ml-[45px] text-gray-300">$299</span></h1> */}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Form;