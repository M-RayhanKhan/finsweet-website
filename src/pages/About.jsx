import { useLoaderData } from "react-router-dom";
import AboutData from "../components/AboutData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

//Our corporate values image
import likeImg from '../assets/like.png'
import authImg from '../assets/authntication.png'
import emailImg from '../assets/email.png'
import discountImg from '../assets/discount.png'
import disLikeImg from '../assets/dislike.png'
import InventoryImg from '../assets/inventory.png'


const About = () => {
  const { aboutData } = useLoaderData();
  return (
    <main>
      {/* about  banner */}
      <section className="contact-gradient">
        {/* text contant */}
        <div className="text-center pt-20 px-2 lg:px-0">
          <h1 className="text-title md:text-5xl text-3xl font-bold">
            We are proud of our products
          </h1>
          <p className="text-description pt-3 pb-16">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor <br className="hidden md:block" /> invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
        {/* show ui image */}
        <div className="max-w-[1000px] px-2 mx-auto pb-10 mb-10">
          <div className="grid gap-5 grid-cols-3"></div>
          {/*  */}
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
                enabled: false
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {aboutData.map((about) => (
              <SwiperSlide key={about.id}><AboutData  about={about}></AboutData></SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* About Us */}
      <div className="text-center my-20">
        <h4 className="text-xl discover font-bold">About Us</h4>
        <h1 className="text-4xl font-bold my-2">We’re a team of data analysts</h1>
        <p className="txet-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br className="hidden md:block" /> invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et <br className="hidden md:block" /> justo duo dolores et ea rebum.</p>
      </div>
      <section className="bg-[#f0f2fe] mb-16">
        <div className="max-w-7xl py-16 flex gap-10 md:flex-row flex-col items-center mx-auto px-2 lg:px-0">
              <div className="md:w-1/2 space-y-3">
              <h5 className="font-bold text-[20px] discover2">Our Goals</h5>
              <h1 className="lg:text-[48px] lg:leading-[55px] text-3xl font-bold">To upscale your business <br  className="hidden md:block"/>
              to the next level</h1>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br  className="hidden lg:block"/> tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero <br  className="hidden lg:block"/> eos et accusam et justo duo dolores et ea rebum.</p>
              </div>
              <div className="md:w-1/2 space-y-3">
              <h5 className="font-bold text-[20px] discover2">Our Vision</h5>
              <h1 className="lg:text-[48px] lg:leading-[55px] text-3xl font-bold">To provide solutions for <br  className="hidden md:block"/>growing companies 
              </h1>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br  className="hidden lg:block"/> tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero <br  className="hidden lg:block"/> eos et accusam et justo duo dolores et ea rebum.</p>
              </div>
             
        </div>
      </section>
      {/* Our corporate values */}
      <section className="my-20">
              <h1 className="md:text-5xl text-4xl text-center  font-bold">Our corporate values</h1>
              <p className="text-center px-4 md:px-0 mt-2 text-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
              <div className="max-w-7xl mt-10 lg:mx-auto rounded-3xl mx-2 bg-[#f9f0fb] p-5 py-10 lg:py-12 lg:p-0
              grid gap-8 grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3
              ">
                {/* 1 */}
                <div>
                    <figure className="w-10">
                        <img src={likeImg} alt="" />
                    </figure>
                    <h3 className="text-[24px] mt-4 mb-3 font-bold text-title">Best in Class</h3>
                    <p className="text-description">Lorem ipsum dolor sit amet, consetetur <br className="hidden md:block" /> sadipscing elitr, sed diam nonumy.</p>
                </div>
                {/* 2 */}
                <div>
                    <figure className="w-10">
                        <img src={authImg} alt="" />
                    </figure>
                    <h3 className="text-[24px] mt-4 mb-3 font-bold text-title">Authenticity</h3>
                    <p className="text-description">Lorem ipsum dolor sit amet, consetetur <br className="hidden md:block" /> sadipscing elitr, sed diam nonumy.</p>
                </div>
                {/* 3 */}
                <div>
                    <figure className="w-10">
                        <img src={emailImg} alt="" />
                    </figure>
                    <h3 className="text-[24px] mt-4 mb-3 font-bold text-title">Email Support</h3>
                    <p className="text-description">Lorem ipsum dolor sit amet, consetetur <br className="hidden md:block" /> sadipscing elitr, sed diam nonumy.</p>
                </div>
                {/* 4 */}
                <div>
                    <figure className="w-10">
                        <img src={discountImg} alt="" />
                    </figure>
                    <h3 className="text-[24px] mt-4 mb-3 font-bold text-title">Discounts Available </h3>
                    <p className="text-description">Lorem ipsum dolor sit amet, consetetur <br className="hidden md:block" /> sadipscing elitr, sed diam nonumy.</p>
                </div>
                {/* 5 */}
                <div>
                    <figure className="w-10">
                        <img src={discountImg} alt="" />
                    </figure>
                    <h3 className="text-[24px] mt-4 mb-3 font-bold text-title">Powerful Marketing</h3>
                    <p className="text-description">Lorem ipsum dolor sit amet, consetetur <br className="hidden md:block" /> sadipscing elitr, sed diam nonumy.</p>
                </div>
                {/* 6 */}
                <div>
                    <figure className="w-10">
                        <img src={InventoryImg} alt="" />
                    </figure>
                    <h3 className="text-[24px] mt-4 mb-3 font-bold text-title">Inventory management
                    </h3>
                    <p className="text-description">Lorem ipsum dolor sit amet, consetetur <br className="hidden md:block" /> sadipscing elitr, sed diam nonumy.</p>
                </div>
              </div>
      </section>
    </main>
  );
};

export default About;
