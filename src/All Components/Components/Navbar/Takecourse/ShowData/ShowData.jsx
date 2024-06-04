import { Link } from "react-router-dom";
import Footer from "../../../Home/Footer/Footer";


const ShowData = ({ data }) => {
    const { id, description, title, img, } = data
    return (
       

            <div className="bg-gray-100 ">
                <img className="h-40 w-full rounded-t-lg" src={img} alt="" />
                <p className="mt-4 font-semibold text-lg px-4 ">{title}</p>
                <p className="mt-4 px-4 ">{description}</p>
                <Link to={`/takecourse/${id}`}> <button className="mt-8  btn btn-outline btn-accent w-full">Details</button></Link>

            </div>
            
        
    );
};

export default ShowData;