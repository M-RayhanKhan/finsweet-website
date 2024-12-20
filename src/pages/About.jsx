import { useLoaderData } from "react-router-dom";
import AboutData from "../components/AboutData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const About = () => {
  const { aboutData } = useLoaderData();
  console.log(aboutData);
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
      <div>
        <h4 className="text-xl discover font-bold">About Us</h4>
      </div>
    </main>
  );
};

export default About;
