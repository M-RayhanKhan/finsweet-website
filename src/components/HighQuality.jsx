import linkLogo from "../assets/like.png";
import successImg from "../assets/success.png";
import handPhoneImg from "../assets/headPhone.png";
import { useEffect } from "react";
import Aos from "aos";

const HighQuality = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <section className="max-w-7xl mx-auto mt-[66px]">
        <div className="text-center space-y-6 lieners">
          <h2
            className="font-bold discover
             "
          >
            High-quality
          </h2>
          <p className="md:text-4xl text-2xl font-bold  md:w-[460px] mx-auto">
            We have the Best Solution for your Business
          </p>
        </div>
        <div
          className="bg-[#eff1fd] mx-3 md:mx-0 rounded-3xl mt-10 mb-12 grid gap-20
          md:gap-6 md:grid-cols-2 justify-items-stretch lg:grid-cols-3 px-2 md:px-2
          py-10 lg:p-12"
        >
          <div
            data-aos="zoom-out-right"
            className="space-y-3 md:text-start text-center"
          >
            <img className="mx-auto md:mx-0" src={successImg} alt="" />
            <h2 className="md:text-[27px] text-2xl font-bold leading-10">
              High security to protect from piracy
            </h2>
            <p className="text-[16px] opacity-[0.87]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="space-y-3 md:text-start text-center"
          >
            <img className="mx-auto md:mx-0" src={linkLogo} alt="" />
            <h2 className="md:text-[27px] text-2xl font-bold leading-10">
              Premium quality performance
            </h2>
            <p className="text-[16px] opacity-[0.87]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="space-y-3 md:text-start text-center"
          >
            <img className="mx-auto md:mx-0" src={handPhoneImg} alt="" />
            <h2 className="md:text-[27px] md:w-80 text-2xl font-bold leading-10">
              Full time customer support - 24/7
            </h2>
            <p className="text-[16px] opacity-[0.87]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighQuality;
