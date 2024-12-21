import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
const Navbar = () => {
  const [state, setState] = useState(false);
  const websiteName = "{ Finsweet";
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-green-500  font-medium "
            : "text-black hover:border-green-400 font-medium  "
        }
      >
        {" "}
        Home
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive }) =>
          isActive ? "text-green-500 font-medium" : "text-black font-medium"
        }
      >
        Product
      </NavLink>
      <NavLink
        to="/Pricing"
        className={({ isActive }) =>
          isActive ? "text-green-500 font-medium" : "text-black font-medium"
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-green-500 font-medium" : "text-black font-medium"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          isActive ? "text-green-500 font-medium" : "text-black font-medium"
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-green-500 font-medium" : "text-black font-medium"
        }
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <div>
      <nav className="fixed z-50 w-full bg-white/30 backdrop-blur-sm">
        <div className="navbar lg:px-0 max-w-7xl mx-auto">
          <div className="flex-1">
            <NavLink className="text-2xl font-bold">
              <p>{websiteName}</p>
            </NavLink>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="gap-7 menu-horizontal px-1">{links}</ul>
          </div>
          <div>
            <div>
              <button className="bg-black py-3 ml-4 px-7 rounded-[12px] text-white text-sm font-bold md:block hidden ">
                Free trial
              </button>
            </div>

            <div className="md:hidden " onClick={() => setState(!state)}>
              <div>
              {state ? (
                <CgClose className="text-2xl" />
              ) : (
                <BiMenu className="text-2xl" />
              )}
              </div>
               <div className={`absolute border duration-700 space-y-4 z-40 bg-base-100 px-8 py-2 flex flex-col ${state ? "right-2" : "-right-[50%]"}`}>
              {links}
               </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
