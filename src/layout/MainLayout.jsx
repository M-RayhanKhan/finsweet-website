import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="h-[70px]">
            <Navbar/>
            </div>
            <div className="min-h-[calc(100vh-434px)]">
            <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;