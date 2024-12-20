/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const AboutData = ({about}) => {

    const {img} = about
    return (
        <div className="">
            <NavLink to="/blogs">
            <img className="h-[258px] object-cover rounded-xl" src={img} alt="" />
            </NavLink>
        </div>
    );
};

export default AboutData;