import { BiSolidPieChartAlt } from "react-icons/bi";

import { FaFileAlt } from "react-icons/fa";
import { Audio } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { LuChartSpline } from "react-icons/lu";
import Aos from "aos";
import { useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import { HiUsers } from "react-icons/hi2";
import { MdMultilineChart } from "react-icons/md";
import Features from "./Features";
import Ready from "./Ready";


const DataDrivingClient = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <main className=" mt-20 ">
      <div className="relative">
        <button className="mx-auto absolute z-1 top-[10px] right-5 md:top-0 md:right-40 lg:-top-10 lg:right-40 block border-[36px] p-[160px] md:p-[195px] border-[#ccdff5] rounded-full "></button>
      </div>
      <section className="product-markieting">
        <div className="max-w-7xl  mx-auto flex lg:flex-row  flex-col-reverse items-center gap-12 py-16">
          {/* text content */}
          <div className="lg:w-1/2 z-20 px-4  lg:px-0">
            <p className="text-xl discover font-bold">Marketing insights</p>
            <h1 className="md:text-[48px] text-3xl font-bold md:leading-[50px]">
              More impressions, more conversions
            </h1>
            <p className="text-description mt-6 lg:pr-10 bg-title">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
            <Link>
              <button className="bg-BtnBg mt-7 text-btnColor font-bold box-border px-10 py-4 rounded-[12px]">
                Get Free trial
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2 z-20 mt-32 lg:mt-0 relative flex justify-center items-end lg:h-[435px]">
            {/* progress card */}
            <div className="card px-4 border-2 box-border border-[#cacffa] bg-base-100 pt-8 w-[330px] h-[400px] shadow-xl">
              <div className="relative mx-auto ">
                <div
                  className="radial-progress"
                  style={{
                    "--value": "70",
                    "--size": "7rem",
                    "--thickness": "14px",
                  }}
                  role="progressbar"
                >
                  <p className="text-xl font-bold">98%</p>
                </div>
                <div
                  className="radial-progress opacity-10 absolute left-0"
                  style={{
                    "--value": "100",
                    "--size": "7rem",
                    "--thickness": "14px",
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
              <p className="text-center pt-5 text-gray-500">
                Get the best out of your coustomer support finsweet
              </p>
              {/* total client  */}
              <div className="flex justify-between bg-[#e0e4fc] py-4 rounded-xl px-4  mt-4">
                <div>
                  <p className="font-semibold">Total Client</p>
                  <p>
                    {" "}
                    <span className="font-bold text-[#1d2130]">533+</span>{" "}
                    <span className="text-blue-500 font-medium ml-1">+55%</span>{" "}
                  </p>
                </div>
                <button className="text-xl text-white bg-[#6c7bf7] px-3 rounded-xl">
                  <FaFileAlt />
                </button>
              </div>
            </div>
            {/* pi chart 1 left */}
            <div className="bg-[#e0e4fc] border-2 box-border border-[#cacffa] text-center rounded-lg py-4 pl-2 pr-3 absolute lg:-left-1 lg:top-1/3 md:top-20 md:-left-24 top-[10%] -left-[6%] shadow-2xl   md:shadow-md">
              <p className="">Impression</p>
              <div className="flex gap-1 items-center mt-2">
                <button className="text-5xl">
                  <BiSolidPieChartAlt className="text-[#6c7bf7] " />
                </button>
                <h3 className="text-[30px] font-bold">32k</h3>
              </div>
            </div>
            {/* pi chart top 2 new client */}
            {/* total client  */}
            <div className="flex absolute  -top-[100px] right-3  lg:-top-16  lg:right-0  justify-between bg-[#e0e4fc] py-4 rounded-xl pl-5 pr-8 gap-10  border-2 box-border border-[#cacffa]">
              <div>
                <p className="text-sm">Total Client</p>
                <p>
                  {" "}
                  <span className="font-bold text-[#1d2130]">533+</span>{" "}
                  <span className="text-blue-500 font-medium ml-1">+55%</span>{" "}
                </p>
              </div>
              <button className="text-xl text-white bg-[#6c7bf7] px-3 rounded-xl">
                <FaFileAlt />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Time tarcker */}
      <section className="max-w-7xl mt-32 flex gap-12 flex-col lg:flex-row mx-auto px-2 lg:px-0">
        <div className="lg:flex-1 relative">
          <div className="flex flex-col border-2 w-full mx-auto md:w-[350px] h-[350px] text-center rounded-xl border-[#cacffa]">
            <div className="text-end p-4">
              <button className="bg-[#f3f6fe] p-3 rounded-md">
                <Audio
                  height="20"
                  width="20"
                  radius="9"
                  color="#4c47f6"
                  ariaLabel="three-dots-loading"
                  wrapperStyle
                  wrapperClass
                />
              </button>
            </div>
            <div className="space-y-3">
              <p className="text-[#bac3dd]">This month earnings</p>
              <h2 className="text-3xl font-bold">$682.5</h2>
              <div>
                <button className="bg-[#e5f9f5] px-3 py-1 text-green-500 font-bold rounded-full">
                  +2.45%
                </button>
              </div>
            </div>
            <div className=" mt-20 pb-2 ">
           {/*  */}
            </div>
          </div>
          {/* total client time tracker  */}
          <div className="flex gap-8 absolute  -top-24 left-10 bg-[#8397f8] py-4 rounded-xl pl-5 pr-3   ">
            <div className="">
              <p>
                <span className="font-medium block text-[#ace5dd]">Active</span>{" "}
                <span className="text-[#d4e1f8] font-medium ml-1">
                  $635.50%
                </span>{" "}
              </p>
            </div>
            <button className="text-3xl text-white px-3 rounded-xl">
              <LuChartSpline />
            </button>
          </div>
          <div className="grid gap-2 grid-cols-5 mt-4 md:mt-0">
            {/* pi chart 1 left */}
            <div className="bg-[#e0e4fc] col-span-2 border-2 box-border border-[#cacffa] text-center rounded-lg py-4 pl-2 pr-3 md:absolute lg:-left-1 lg:top-1/3 md:top-20 md:left-10 top-[10%] -left-[6%] shadow-2xl   md:shadow-md">
              <p className="">Impression</p>
              <div className="flex gap-1 items-center mt-2">
                <button className="text-5xl">
                  <BiSolidPieChartAlt className="text-[#6c7bf7] " />
                </button>
                <h3 className="text-[30px] font-bold">32k</h3>
              </div>
            </div>
            {/* pi chart top 2 new client */}
            {/* total client  */}
            <div className="flex col-span-3 items-center md:absolute -top-[100px] right-3  lg:top-32  lg:right-0  justify-between bg-[#e0e4fc] py-4 rounded-xl pl-5 pr-8 gap-10  border-2 box-border border-[#cacffa]">
              <div>
                <p className="text-sm">Total Client</p>
                <p>
                  {" "}
                  <span className="font-bold text-[#1d2130]">533+</span>{" "}
                  <span className="text-blue-500 font-medium ml-1">+55%</span>{" "}
                </p>
              </div>
              <button className="text-xl text-white bg-[#6c7bf7] py-3 px-3 rounded-xl">
                <FaFileAlt />
              </button>
            </div>
          </div>
        </div>
        {/* text content time tracker */}
        <div className="lg:flex-1 space-y-7">
          <h5 className="text-xl discover font-bold">Time tracker</h5>
          <h3 className="md:text-5xl text-4xl md:leading-[50px] lea font-bold">
            Track your project performance
          </h3>
          <p className="text-description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>
        </div>
      </section>

      {/* lead Generation section */}
      <section className="max-w-7xl lead-gradient mx-auto lg:flex items-center gap-12 py-16">
        {/* text content */}
        <div data-aos="fade-down" className="lg:w-1/2 px-4 lg:px-0">
          <h5 className="font-bold text-xl discover mb-2">Lead Generation</h5>
          <h1 className="md:text-[48px] text-3xl font-bold md:leading-[50px]">
            More leads that convert
          </h1>
          <p className="text-description mt-4 lg:pr-10 bg-title">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>
        </div>
        <div
          data-aos="fade-down"
          className="lg:w-1/2 lead-gradient mt-24 lg:mt-0 relative flex justify-center items-end lg:h-[435px]"
        >
          {/* progress card */}
          <div className="card bg-base-100 pt-8 w-72 h-[330px] shadow-xl">
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
          <div className="bg-base-100 text-center rounded-lg py-4 pl-2 pr-3 absolute lg:left-0 lg:top-1/2 md:top-20 md:left-24 top-0 left-2 shadow-2xl   md:shadow-md">
            <p className="text-gray-400">Impression</p>
            <div className="flex gap-1 items-center mt-2">
              <button className="text-5xl">
                <BiSolidPieChartAlt className="text-[#6c7bf7] " />
              </button>
              <h3 className="text-[30px] font-bold">32k</h3>
            </div>
          </div>
          {/* pi chart top 2 new client */}
          <div className="bg-base-100 flex items-center gap-3 absolute lg:top-0 lg:left-24 -top-[85px] rounded-xl shadow-md py-4 pl-4 pr-5">
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
           {/* Remote teams */}
           <section className="max-w-7xl mt-32 flex gap-12 flex-col lg:flex-row mx-auto px-2 lg:px-0">
        <div className="lg:flex-1 relative">
          <div className="flex flex-col border-2 w-full mx-auto md:w-[350px] h-[350px] text-center rounded-xl border-[#cacffa]">
            <div className="text-end p-4">
              <button className="bg-[#f3f6fe] p-3 rounded-md">
                <Audio
                  height="20"
                  width="20"
                  radius="9"
                  color="#4c47f6"
                  ariaLabel="three-dots-loading"
                  wrapperStyle
                  wrapperClass
                />
              </button>
            </div>
            <div className="space-y-3">
              <p className="text-[#bac3dd]">This month earnings</p>
              <h2 className="text-3xl font-bold">$682.5</h2>
              <div>
                <button className="bg-[#e5f9f5] px-3 py-1 text-green-500 font-bold rounded-full">
                  +2.45%
                </button>
              </div>
            </div>
            <div className=" mt-20 pb-2 ">
           {/*  */}
            </div>
          </div>
          {/* total client time tracker  */}
          <div className="flex gap-8 absolute  -top-24 left-10 bg-[#8397f8] py-4 rounded-xl pl-5 pr-3   ">
            <div className="">
              <p>
                <span className="font-medium block text-[#ace5dd]">Active</span>{" "}
                <span className="text-[#d4e1f8] font-medium ml-1">
                  $635.50%
                </span>{" "}
              </p>
            </div>
            <button className="text-3xl text-white px-3 rounded-xl">
              <LuChartSpline />
            </button>
          </div>
          <div className="grid gap-2 grid-cols-5 mt-4 md:mt-0">
            {/* pi chart 1 left */}
            <div className="bg-[#e0e4fc] col-span-2 border-2 box-border border-[#cacffa] text-center rounded-lg py-4 pl-2 pr-3 md:absolute lg:-left-1 lg:top-1/3 md:top-20 md:left-10 top-[10%] -left-[6%] shadow-2xl   md:shadow-md">
              <p className="">Impression</p>
              <div className="flex gap-1 items-center mt-2">
                <button className="text-5xl">
                  <BiSolidPieChartAlt className="text-[#6c7bf7] " />
                </button>
                <h3 className="text-[30px] font-bold">32k</h3>
              </div>
            </div>
            {/* pi chart top 2 new client */}
            {/* total client  */}
            <div className="flex col-span-3 items-center md:absolute -top-[100px] right-3  lg:top-32  lg:right-0  justify-between bg-[#e0e4fc] py-4 rounded-xl pl-5 pr-8 gap-10  border-2 box-border border-[#cacffa]">
              <div>
                <p className="text-sm">Total Client</p>
                <p>
                  {" "}
                  <span className="font-bold text-[#1d2130]">533+</span>{" "}
                  <span className="text-blue-500 font-medium ml-1">+55%</span>{" "}
                </p>
              </div>
              <button className="text-xl text-white bg-[#6c7bf7] py-3 px-3 rounded-xl">
                <FaFileAlt />
              </button>
            </div>
          </div>
        </div>
        {/* text content time tracker */}
        <div className="lg:flex-1 space-y-7">
          <h5 className="text-xl discover font-bold">Remote teams</h5>
          <h3 className="md:text-5xl text-4xl md:leading-[50px] lea font-bold">
          Real-time collaboration
          </h3>
          <p className="text-description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
          </p>
        </div>
      </section>
      {/* Features section*/}
      <Features/>
      {/* Ready section */}
      <Ready/>
    </main>
  );
};

export default DataDrivingClient;
