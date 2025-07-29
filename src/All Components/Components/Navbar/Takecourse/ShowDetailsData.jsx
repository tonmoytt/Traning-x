import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ShowDetailsData = () => {
    const [data, setdata] = useState();
    const params = useParams();
    const loader = useLoaderData();

    useEffect(() => {
        const findloader = loader?.find(data => data.id === parseInt(params.id));
        setdata(findloader);
    }, [params.id, loader]);

    return (
        <div className="flex flex-col lg:flex-row justify-between items-center mt-10 px-4 gap-6">
            {/* Left Side */}
            <div className="card-body w-full lg:w-1/2">
                <p className="text-lg font-semibold text-orange-600 mb-4">{data?.description}</p>

                <div className="items-center mt-4">
                    <p id="color2" className="text-2xl sm:text-3xl font-bold mb-6">{data?.title}</p>

                    {/* Stats Section */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-6">
                        {/* Duration */}
                        <div id="rotate" className="border rounded-xl text-center px-5 py-2 shadow-md shadow-blue-600 hover:shadow-lg hover:shadow-blue-400">
                            <p>Duration</p>
                            <p className="px-2 py-1 font-bold text-xl sm:text-2xl">{data?.duration} Month</p>
                        </div>
                        {/* Lectures */}
                        <div id="rotate" className="border rounded-xl text-center px-5 py-2 shadow-md shadow-blue-600 hover:shadow-lg hover:shadow-blue-400">
                            <p>Lectures</p>
                            <p className="px-2 py-1 font-bold text-xl sm:text-2xl">{data?.lectures}</p>
                        </div>
                        {/* Projects */}
                        <div id="rotate" className="border rounded-xl text-center px-5 py-2 shadow-md shadow-blue-600 hover:shadow-lg hover:shadow-blue-400">
                            <p>Projects</p>
                            <p className="px-2 py-1 font-bold text-xl sm:text-2xl">{data?.projects}+</p>
                        </div>
                    </div>

                    {/* Details */}
                    <p className="text-base sm:text-lg">{data?.Detials}</p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-6">
                        <Link to="/login">
                            <button className="px-8 py-2 rounded-md btn btn-secondary text-center w-full sm:w-auto">Admisstion</button>
                        </Link>
                        <Link to="/login">
                            <button className="px-8 py-2 rounded-md btn btn-outline btn-secondary text-center w-full sm:w-auto">Join Free Seminar</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Side (Image) */}
            <div className="w-full lg:w-auto">
                <figure>
                    <img
                        className="w-full max-w-[600px] h-auto lg:h-80 rounded-2xl object-cover"
                        src={data?.img}
                        alt="course image"
                    />
                </figure>
            </div>
        </div>
    );
};

export default ShowDetailsData;
