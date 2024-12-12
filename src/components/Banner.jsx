import { Typewriter } from "react-simple-typewriter";
import 'animate.css';

const Banner = () => {
  return (
    <section className="">
      <div className="gradient">
        <div className="text-center mx-auto lg:mt-[108px] pt-10 lg:w-[800px]">
          <h2 className="lg:text-[56px] h-[80px] lg:h-[125px] animate__animated animate__zoomInDown animate__delay-2ss md:text-4xl text-[24px] font-bold md:leading-none">
            
            <Typewriter
              words={[
                " The Best Software to Grow your Sales and Services"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="md:text-lg px-4 text-gray-500  md:mb-[48px]
          
          ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
          <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="pt-5 relative">
            <input
              type="text"
              className="outline-none bg-white shadow md:w-[576px] py-3 px-4 md:h-[72px] w-64 md:rounded-2xl rounded"
              placeholder="Enter your Email"
            />
            <div className="absolute lg:right-[122px] md:right-[109px] right-[100px] md:bottom-2 mt-2">
              <button className="text-base font-bold rounded md:rounded-xl text-white md:w-[170px] py-2 px-3 md:h-[56px] bg-black">
                Get Free trial
              </button>
            
            </div>
          </div>
        </div>

        <div className="lg:w-[1140px] mx-auto p-4 mt-16">
          <img className="mx-auto" src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
