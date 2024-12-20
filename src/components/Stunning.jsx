import Carousel from "react-grid-carousel";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Stunning = () => {
  return (
    <section className="max-w-[1320px] mx-auto my-[66px]">
      <h2 className="md:text-5xl text-xl font-bold text-center md:w-[628px] mx-auto">
        The stunning results our customers have experienced
      </h2>
      {/*  */}
      <section className="mt-10 mx-2 lg:mx-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            enabled: false,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
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
          {/* 1 */}
          <SwiperSlide>
            <div className=" border rounded-3xl p-12">
              <div className="text-center space-y-6 ">
                <h2 className="text-lg font-semibold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </h2>
                <img
                  className="w-16 h-16 object-cover mx-auto rounded-full"
                  src="https://img.freepik.com/free-photo/business-man-black-suit-glasses-looking-front-with-confident-expression-smiling-showing-thumbs-up-standing-white-wall-2_141793-50834.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid"
                  alt=""
                />
                <div>
                  <h1 className="text-xl font-medium">Ron Wood</h1>
                  <p className="text-sm mt-1">CEO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* 2 */}
          <SwiperSlide>
            <div className=" border rounded-3xl ">
              <div className="text-center space-y-6 p-12">
                <h2 className="text-lg font-semibold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </h2>
                <img
                  className="w-16 h-16 object-cover mx-auto rounded-full"
                  src="https://img.freepik.com/free-photo/agree-hand-shake-business-concept_1194-617117.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid"
                  alt=""
                />
                <div>
                  <h1 className="text-xl font-medium">Mark Mason</h1>
                  <p className="text-sm mt-1">Marketing Manager</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* 3 */}
          <SwiperSlide>
            <div className=" border rounded-3xl ">
              <div className="text-center space-y-6 p-12">
                <h2 className="text-lg font-semibold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </h2>
                <img
                  className="w-16 h-16 object-cover mx-auto rounded-full"
                  src="https://img.freepik.com/free-photo/pleased-young-call-center-man-wearing-headset-showing-peace-gestures-isolated-white-background_141793-63597.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid"
                  alt=""
                />
                <div>
                  <h1 className="text-xl font-medium">Sam Preston</h1>
                  <p className="text-sm mt-1">CEO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* 4 */}
          <SwiperSlide>
            <div className=" border rounded-3xl ">
              <div className="text-center space-y-6 p-12">
                <h2 className="text-lg font-semibold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </h2>
                <img
                  className="w-16 h-16 object-cover mx-auto rounded-full"
                  src="https://img.freepik.com/free-photo/handsome-man-making-ok-sign_1368-6336.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid"
                  alt=""
                />
                <div>
                  <h1 className="text-xl font-medium">MD: Nasir</h1>
                  <p className="text-sm mt-1">Backend Developer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* 5 */}
          <SwiperSlide>
            <div className=" border rounded-3xl ">
              <div className="text-center space-y-6 p-12">
                <h2 className="text-lg font-semibold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </h2>
                <img
                  className="w-16 h-16 object-cover mx-auto rounded-full"
                  src="https://img.freepik.com/free-photo/medium-shot-smiley-man-desk_23-2148924776.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid"
                  alt=""
                />
                <div>
                  <h1 className="text-xl font-medium">IBE Riyad</h1>
                  <p className="text-sm mt-1">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* 6 */}
          <SwiperSlide>
            <div className=" border rounded-3xl ">
              <div className="text-center space-y-6 p-12">
                <h2 className="text-lg font-semibold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </h2>
                <img
                  className="w-16 h-16 object-cover mx-auto rounded-full"
                  src="https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid"
                  alt=""
                />
                <div>
                  <h1 className="text-xl font-medium">Fohad</h1>
                  <p className="text-sm mt-1">Web Developer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* 7 */}
          <SwiperSlide>
            <div className=" border rounded-3xl ">
              <div className="text-center space-y-6 p-12">
                <h2 className="text-lg font-semibold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </h2>
                <img
                  className="w-16 h-16 object-cover mx-auto rounded-full"
                  src="https://img.freepik.com/free-photo/close-up-portrait-pleased-unshaved-man-eyeglasses-looking-camera-with-sincere-smile-standing-with-arms-folded-isolated-gray_171337-631.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid"
                  alt=""
                />
                <div>
                  <h1 className="text-xl font-medium">Joinal Abden</h1>
                  <p className="text-sm mt-1">Backend Developer est...</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* 8 */}
          <SwiperSlide>
            <div className=" border rounded-3xl ">
              <div className="text-center space-y-6 p-12">
                <h2 className="text-lg font-semibold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </h2>
                <img
                  className="w-16 h-16 object-cover mx-auto rounded-full"
                  src="https://img.freepik.com/free-photo/close-up-portrait-pleased-unshaved-man-eyeglasses-looking-camera-with-sincere-smile-standing-with-arms-folded-isolated-gray_171337-631.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid"
                  alt=""
                />
                <div>
                  <h1 className="text-xl font-medium">Rayhan Khan</h1>
                  <p className="text-sm mt-1">FrontEnd Developer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* 9 */}
          <SwiperSlide>
            <div className=" border rounded-3xl ">
              <div className="text-center space-y-6 p-12">
                <h2 className="text-lg font-semibold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </h2>
                <img
                  className="w-16 h-16 object-cover mx-auto rounded-full"
                  src="https://img.freepik.com/free-photo/high-angle-smiley-business-man_23-2148479530.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid"
                  alt=""
                />
                <div>
                  <h1 className="text-xl font-medium">Jobayer </h1>
                  <p className="text-sm mt-1">Hafej est.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
};

export default Stunning;
