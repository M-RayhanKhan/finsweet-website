import { Link } from "react-router-dom";
import chartImg from "../assets/chart.png"
import Sponsor from "../components/Sponsor";
import DataDrivingClient from "../components/DataDrivingClient";
const Product = () => {
  return (
    <main>
      <section className="product-gradient pt-16 pb-10">
      <div className="flex   items-center gap-12 lg:flex-row flex-col    max-w-7xl mx-auto px-2 lg:px-0">
        <div className="lg:flex-1 md:pr-10 lg:pr-0  space-y-4 ">
          <h1 className="md:text-[56px] text-4xl font-bold leading-[60px]">
            Grow your Sales and Services
          </h1>
          <p className="text-description md:pr-[160px] lg:pr-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex  items-center gap-4">
            {/* get started */}
            <button className="Btn  font-bold md:px-12  py-4 w-full md:w-auto">Get Started</button>
            {/* contact button */}
            <button className="relative w-full md:w-auto py-4 md:px-12 rounded-xl font-bold  overflow-hidden  border-2 border-[#e0e4fc] shadow-inner group">
            <Link>
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Contact us
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div className="lg:flex-1">
            <img src={chartImg} alt="" />
        </div>
      </div>
      {/* sponsor  */}
       <div className="pb-5 pt-5">
       <Sponsor/>
       </div>
      </section>
       {/* get  the best out of your company with our service section */}
       <section
            className="mb-10 pt-[97px] bg-gradient-to-r from-[#d9f6ec] via-[#cfe9f4] to-[#dce9f9] md:text-start text-center">
            <div className="max-w-7xl mx-auto">
                <div className="md:w-[768px] mx-auto text-center">
                    <h2 className="md:text-5xl text-2xl font-bold ">Get the best out of your company with our service</h2>
                </div>
            </div>
          
            <div className="bg-[#f2fcf9] md:mr-10 lg:mr-0  lg:max-w-[1360px] mt-[48px] rounded-tr-[60px] pt-10 pb-16 px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 
                    <div className="max-w-[1050px] mx-auto space-y-4">
                        <img className="mx-auto md:mx-0" src="./image/tic.png" alt=""/>
                        <h2 className="text-2xl font-bold">Security and privacy</h2>
                        <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing <br /> elitr, sed diam nonumy
                            eirmod tempor.</p>
                    </div>
                  
                    <div className="max-w-[1050px] mx-auto space-y-4">
                        <img className="mx-auto md:mx-0" src="./image/five.png" alt=""/>
                        <h2 className="text-2xl font-bold">Built-in AI features
                        </h2>
                        <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing <br/> elitr, sed diam nonumy
                            eirmod tempor.</p>
                    </div>
                   
                    <div className="max-w-[1050px] mx-auto space-y-4">
                        <img className="mx-auto md:mx-0" src="./image/message.png" alt=""/>
                        <h2 className="text-2xl font-bold">Collaborate with others</h2>
                        <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing <br/> elitr, sed diam nonumy
                            eirmod tempor.</p>
                    </div>
              
                    <div className="max-w-[1050px] mx-auto space-y-4">
                        <img className="mx-auto md:mx-0" src="./image/card.png" alt=""/>
                        <h2 className="text-2xl font-bold">Real time sync
                        </h2>
                        <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing <br/> elitr, sed diam nonumy
                            eirmod tempor.</p>
                    </div>
                  
                    <div className="max-w-[1050px] mx-auto space-y-4">
                        <img className="mx-auto md:mx-0" src="./image/hel.png" alt=""/>
                        <h2 className="text-2xl font-bold">Built-in AI features</h2>
                        <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing <br/> elitr, sed diam nonumy
                            eirmod tempor.</p>
                    </div>
                   
                    <div className="max-w-[1050px] mx-auto space-y-4">
                        <img className="mx-auto md:mx-0" src="./image/grid.png" alt=""/>
                        <h2 className="text-2xl font-bold">Easy notes organization</h2>
                        <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing <br/> elitr, sed diam nonumy
                            eirmod tempor.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* Marketing insights */}
        <DataDrivingClient/>
    </main>
  );
};

export default Product;
