/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const AboutData = ({about}) => {

    const {img, id} = about
    return (
        <div className="">
            <NavLink to={`/blogs/${id}`}>
            <img className="h-[258px] object-cover rounded-3xl" src={img} alt="" />
            </NavLink>
        </div>
    );
};

export default AboutData;