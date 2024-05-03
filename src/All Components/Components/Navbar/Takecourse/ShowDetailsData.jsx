import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";



const ShowDetailsData = () => {
    const [data, setdata] = useState()
    // console.log(data);
    const params = useParams()
    // console.log(params);
    const loader = useLoaderData()
    // console.log(loader);

    useEffect(() => {
        const findloader = loader?.find(data => data.id === parseInt(params.id))
        setdata(findloader);
    }, [params.id, loader])

    return (
        <div className="flex justify-between items-center mt-10">

            <div className="card-body w-1/2">
                <p className="text-lg font-semibold w-[450px] text-orange-600"> {data?.description}</p>
                <div className=" items-center mt-4 ">
                    <p id="color2" className="text-3xl font-bold"> {data?.title}</p>
                    {/* section 2 */}
                    <div className="flex gap-12 mt-10">
                        {/* duration */}
                        <div id="rotate" className="border rounded-xl text-center px-5 py-2 shadow-md shadow-blue-600 h-full hover:shadow-lg hover:shadow-blue-400">
                            <p className="">Duration</p>
                            <p className=" px-2 py-1 font-bold text-2xl ">  {data?.duration} Month</p>
                        </div>
                        {/* Letures */}
                      <div id="rotate" className="border rounded-xl text-center px-5 py-2 shadow-md shadow-blue-600 h-full hover:shadow-lg hover:shadow-blue-400">
                            <p className="">Lectures</p>
                            <p className=" px-2 py-1 font-bold text-2xl ">  {data?.lectures} </p>
                        </div>
                        {/*Projects */}
                      <div id="rotate" className="border rounded-xl text-center px-5 py-2 shadow-md shadow-blue-600 h-full hover:shadow-lg hover:shadow-blue-400">
                            <p className="">Projects</p>
                            <p className=" px-2 py-1 font-bold text-2xl ">  {data?.projects}+</p>
                        </div>
                    </div>
                    {/* details section  */}
                    <p className="text-lg mt-4"> {data?.Detials}</p>
                    <div className="flex gap-10 mt-6">
                    <Link to="/login"><button className=" px-10 py-1 rounded-md btn   btn-secondary text-center">Admisstion</button></Link>
                    <Link to="/login"><button className=" px-10 py-1 rounded-md btn btn-outline btn-secondary text-center">Join Free Seminar</button></Link>
                    </div>
                   
                </div>
            </div>
            {/* img */}
            <div>
                <figure><img className="m-2 w-[600px] h-80 rounded-2xl mr-10" src={data?.img} alt="" /></figure>
            </div>


        </div>
    );
};

export default ShowDetailsData;