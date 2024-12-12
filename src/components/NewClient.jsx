import Aos from "aos";
import { useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import { BiSolidPieChartAlt } from "react-icons/bi";
import { HiUsers } from "react-icons/hi2";
import { MdMultilineChart } from "react-icons/md";

import { Audio } from "react-loader-spinner";

const NewClient = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <main className="bg-gradient-to-r from-[#d4ecf5] to-gray-100">
      <section  className="max-w-7xl mx-auto lg:flex items-center gap-12 py-16">
        {/* text content */}
        <div data-aos="fade-down" className="lg:w-1/2 px-4 lg:px-0">
          <h1 className="md:text-[48px] text-3xl font-bold md:leading-[50px]">
            More impressions, more conversions
          </h1>
          <p className="text-description mt-6 lg:pr-10 bg-title">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </p>
          <button className="bg-BtnBg mt-7 text-btnColor font-bold box-border px-10 py-4 rounded-[12px]">
            Get Free trial
          </button>
        </div>
        <div data-aos="fade-down" className="lg:w-1/2 mt-24 lg:mt-0 relative flex justify-center items-end lg:h-[435px]">
          {/* progress card */}
          <div  className="card bg-base-100 pt-8 w-72 h-[330px] shadow-xl">
            <div className="relative mx-auto ">
              <div
                className="radial-progress"
                style={{
                  "--value": "70",
                  "--size": "6rem",
                  "--thickness": "12px",
                }}
                role="progressbar"
              >
                <p className="text-xl font-bold">98%</p>
              </div>
              <div
                className="radial-progress opacity-10 absolute left-0"
                style={{
                  "--value": "100",
                  "--size": "6rem",
                  "--thickness": "12px",
                }}
                role="progressbar"
              ></div>
            </div>
            <div className="flex justify-center mt-6 items-center gap-8">
              <div className="flex items-center gap-2">
                <p className="w-6 h-6 rounded-md bg-blue-200"></p>
                <div>
                  <h1 className="text-2xl font-bold">30%</h1>
                  <p className="text-gray-400 text-xs">Losses 2021</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="w-6 h-6 rounded-md bg-blue-400"></p>
                <div>
                  <h1 className="text-2xl font-bold">150%</h1>
                  <p className="text-gray-400 text-xs">sales 2021</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-10 text-gray-500">
              Get the best out of your coustomer support finsweet
            </p>
          </div>
          {/* pi chart 1 left */}
          <div  className="bg-base-100 text-center rounded-lg py-4 pl-2 pr-3 absolute lg:left-0 lg:top-1/2 md:top-20 md:left-24 top-0 left-2 shadow-2xl   md:shadow-md">
            <p className="text-gray-400">Impression</p>
            <div className="flex gap-1 items-center mt-2">
              <button className="text-5xl">
                <BiSolidPieChartAlt className="text-[#6c7bf7] " />
              </button>
              <h3 className="text-[30px] font-bold">32k</h3>
            </div>
          </div>
          {/* pi chart top 2 new client */}
          <div
            
            className="bg-base-100 flex items-center gap-3 absolute lg:top-0 lg:left-24 -top-[85px] rounded-xl shadow-md py-4 pl-4 pr-5"
          >
            <div>
              <button className="text-xl  text-white/90 bg-[#6c7bf7] p-3 rounded-full">
                <HiUsers />
              </button>
            </div>
            <div>
              <p className="text-gray-400 text-sm">New Client</p>
              <p className="font-bold">324+</p>
            </div>
            <button className="text-3xl text-[#6c7bf7] rotate-12">
              <MdMultilineChart />
            </button>
          </div>
          {/* pi chart right  */}
          <div
            
            className="bg-base-100 flex items-center gap-2 absolute lg:right-10
               lg:top-1/3 md:top-10  md:right-28 -bottom-10 md:bottom-auto  rounded-xl shadow-md pb-3 py-4 pl-3 pr-12"
          >
            <div>
              <button className="bg-[#f4f7fe] p-3 rounded-full">
                <Audio
                  height="20"
                  width="20"
                  radius="9"
                  color="#6c7bf7"
                  ariaLabel="three-dots-loading"
                  wrapperStyle
                  wrapperClass
                />
              </button>
            </div>
            <div>
              <p className="text-blue-400 mb-1 text-sm">Earnings</p>
              <p className="font-bold">$7782.40</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewClient;
