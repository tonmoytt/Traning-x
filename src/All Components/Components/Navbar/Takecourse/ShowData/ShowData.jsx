import { Link } from "react-router-dom";
import Footer from "../../../Home/Footer/Footer";


const ShowData = ({ data }) => {
     const { id, description, title, img } = data;
    return (
        <div className="bg-gray-100 rounded-lg shadow-md w-full max-w-[300px] sm:max-w-[360px] mx-auto mb-8">
            <img className="h-40 w-full object-cover rounded-t-lg" src={img} alt="" />
            <p className="mt-4 font-semibold text-lg px-4">{title}</p>
            <p className="mt-2 px-4 text-sm sm:text-base">{description}</p>
            <Link to={`/takecourse/${id}`}>
                <button className="mt-6 btn btn-outline btn-accent w-full mb-4">
                    Details
                </button>
            </Link>
        </div>
    );
};

export default ShowData;