import { MdOutlineLocalPhone } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import Ready from "../components/Ready";
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
     <main>
           <main className="contact-gradient pt-20">
            <h1 className="md:text-4xl mb-10 text-[#1d2130] text-3xl text-center font-bold">Get in touch with us</h1>
          <section className=" max-w-7xl mx-auto pb-10">
          <div className=" flex justify-between mx-3 lg:mx-0  rounded-xl lg:flex-row flex-col bg-[#f0f2fe]  lg:p-12 p-5">
                <div className="lg:w-[60%]">
                    <h1 className="text-title font-bold text-3xl">Drop us a message</h1>
                    <p className="text-title text-[18px] mt-1">We will get back to you as soon as possible.</p>
                <form onSubmit={handleSubmit}>
                <div className="grid mt-8 gap-4 grid-cols-2">
                        {/* full name */}
                      <div>
                        <input type="text" className="h-[64px] px-6 outline-none w-full bg-[#ffffff] rounded-lg" placeholder="Full Name "/>
                      </div>
                        {/* company name */}
                      <div>
                        <input type="text" className="h-[64px] px-6 outline-none w-full bg-[#ffffff] rounded-lg" placeholder="Company name "/>
                      </div>
                      {/* Work Email */}
                      <div className="col-span-2">
                        <input type="email" className="h-[64px] px-6 outline-none w-full bg-[#ffffff] rounded-lg" placeholder="Work Email"/>
                      </div>
                      {/* Subject */}
                      <div className="col-span-2">
                        <input type="email" className="h-[64px] px-6 outline-none w-full bg-[#ffffff] rounded-lg" placeholder="Subject"/>
                      </div>
                        {/* messate textarea */}
                        <div className="col-span-2 ">
                            <textarea name=""  id="" cols="20" rows="5"  className=" px-6 outline-none pt-4 w-full bg-[#ffffff] rounded-lg" placeholder="Subject"></textarea>
                        </div>
                        <button type="submit" className="bg-[#1d2130] py-3.5 rounded-xl col-span-2 text-white/90 font-medium w-full">Send</button>
                    </div>
                </form>
                </div>
                <div className="lg:pr-16 mt-4 lg:mt-[100px] space-y-5">
                    {/* 1 */}
                    <div className="flex items-center gap-4">
                        <button className="text-2xl text-white bg-[#6c7bf7] p-2 rounded-full">
                            <MdOutlineLocalPhone/>
                        </button>
                        <div >
                           <h3 className="text-xl font-bold">+ 1800 145 276</h3>
                           <p className="text-[#727582]">Free support</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="flex items-center gap-4">
                        <button className="text-2xl -rotate-90 text-white bg-[#6c7bf7] p-2 rounded-full">
                            <AiOutlineSend/>
                        </button>
                        <div >
                           <h3 className="text-xl font-bold">finsweet@gmail.com</h3>
                           <p className="text-[#727582]">Help Email support</p>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="flex items-center gap-4">
                        <button className="text-2xl text-white bg-[#6c7bf7] p-2 rounded-full">
                            <MdOutlineMailOutline/>
                        </button>
                        <div >
                           <h3 className="text-xl font-bold">sales@finsweet.com</h3>
                           <p className="text-[#727582]">Sales Enquiry</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>
      
        </main>
            {/* Ready section */}
            <div className="mt-12">
        <Ready/>
        </div>
     </main>
    );
};

export default Contact;