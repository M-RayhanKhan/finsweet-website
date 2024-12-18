import { FaArrowRight } from "react-icons/fa6";

const Business = () => {
    return (
        <section className="mt-10">
        <div className="md:py-16 text-center lg:text-start py-10 p-2">
            <div className="max-w-7xl mx-auto flex items-center flex-col lg:flex-row">
                <div className="space-y-6 flex-1">
                    <h2 className="md:text-2xl discover text-xl font-bold">Why should you work with us?</h2>
                    <h2 className="md:text-5xl text-2xl font-bold">To upscale your business to the next level</h2>
                    <p className="md:text-[16px] text-sm leading-6">Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua invidunt ut labore.</p>
                </div>
                <div className="flex-1 mt-5 space-y-8">
                   {/* <img src="./image/Image.png" alt="">  */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                       <button className="bg-[#ffacac] -rotate-45 hover:rotate-0 duration-500 py-2.5 px-2.5 rounded-full">
                       <FaArrowRight />
                       </button>
                        <p className="text-[20px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                    <button className="bg-[#ffacac] -rotate-45 hover:rotate-0 duration-500 py-2.5 px-2.5 rounded-full">
                       <FaArrowRight />
                       </button>
                        <p className="text-[20px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                    <button className="bg-[#ffacac] -rotate-45 hover:rotate-0 duration-500 py-2.5 px-2.5 rounded-full">
                       <FaArrowRight />
                       </button>
                        <p className="text-[20px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Business;