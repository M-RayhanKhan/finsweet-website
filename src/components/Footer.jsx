import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="bg-[#1d2130]">
            <section className="footer pl-2 lg:pl-0 pt-16 md:max-w-7xl mx-auto  text-white/55 text-base-content md:flex justify-between">
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover hover:text-white">About Us</a>
                    <a className="link link-hover hover:text-white">Design</a>
                    <a className="link link-hover hover:text-white">Pricing</a>
                    <a className="link link-hover hover:text-white">Testimonial</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover hover:text-white">Privacy Policy</a>
                    <a className="link link-hover hover:text-white">Terms and Condition</a>
                    <a className="link link-hover hover:text-white">Blog</a>
                    <a className="link link-hover hover:text-white">Contact Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover hover:text-white">Project managment</a>
                    <a className="link link-hover hover:text-white">Time tracker</a>
                    <a className="link link-hover hover:text-white">Time schedule</a>
                    <a className="link link-hover hover:text-white">Lead generate</a>
                    <a className="link link-hover hover:text-white">Remote Collaboration</a>
                </nav>
                <form>
                    <h6 className="footer-title">Finsweet</h6>
                    <fieldset className="form-control  md:w-80">
                        <label className="label">
                            <span className="label-text text-white/90 text-lg">Subscribe to our Newsletter</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="Enter your Email"
                                className="input bg-[#2b2e3c] input-bordered join-item" />
                            <button className="btn  join-item bg-[#ffffff]">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </section>
            <div className="flex gap-4 md:w-full md:max-w-7xl mx-auto pb-12 pt-10 flex-col">
                <div className="divider text-[#8e9097] divider-info">
                    <div className="flex flex-col md:flex-row gap-4 px-8">
                        <div>
                            <p>© Copyright Finsweet 2022</p>
                        </div>
                        <div className="flex ml-5 items-center gap-5">
                            <NavLink>
                                <button className="text-xl">
                                    <FaFacebook />
                                </button>
                            </NavLink>
                            <NavLink>
                                <button className="text-xl">
                                    <FaTwitter />
                                </button>
                            </NavLink>
                            <NavLink>
                                <button className="text-xl">
                                    <SiInstagram />
                                </button>
                            </NavLink>
                            <NavLink>
                                <button className="text-xl">
                                    <FaLinkedin />
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;