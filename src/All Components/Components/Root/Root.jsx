import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Home/Header/Header";
 

  

const Root = () => {
    return (
        <div>
            <Header></Header>
             <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;