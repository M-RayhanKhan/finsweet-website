import { useState } from "react";
import Ready from "../components/Ready.jsx";
import { RiApps2Fill } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { SiCoffeescript } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Pricing = () => {
  const [isActive, setIsActive] = useState({
    stutas: "cart",
    cart: true,
  });
  const handleActiveButton = (stutas = "cart") => {
    if (stutas === "cart") {
      setIsActive({
        stutas: "cart",
        cart: true,
      });
    } else {
      setIsActive({
        stutas: "disCart",
        cart: false,
      });
    }
  };

  return (
    <main className="">
      <section>
        <div className="text-center mx-auto lg:mt-[80px] pt-10 lg:w-[529px]">
          <h2 className="lg:text-[56px] md:text-4xl text-[20px] font-bold md:leading-[70px] fontFamily">
            Pricing plans that suit you
          </h2>
          <p className="md:text-lg text-gray-500 md:mt-[32px] md:mb-[48px]">
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor.
          </p>
          <div className=" bg-[#e0e4fc]  rounded-2xl py-4 px-3 lg:w-[312px] h-[78px] mx-auto flex gap-1 items-center">
            <button
              onClick={() => handleActiveButton("cart")}
              className={
                isActive.cart
                  ? "bg-[#1d2130] rounded-2xl w-full text-white font-medium h-[56px] "
                  : "text-black font-medium w-full"
              }
            >
              Monthly
            </button>

            <button
              onClick={() => handleActiveButton("disCart")}
              className={
                isActive.cart
                  ? "text-black font-medium w-full"
                  : " bg-[#1d2130] rounded-2xl w-full text-white font-medium h-[56px] "
              }
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="lg:w-[1140px] mx-auto p-4 mt-16">
          <img className="mx-auto" src="./image/Dashboard image.png" alt="" />
        </div>
      </section>
      {/* Phone section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* card one */}
        <div className="md:w-[411px] boxShadow group md:h-[714px] rounded-3xl bg-white hover:border-[2px] border-2 hover:border-[#6b7cff] border-white  hover:bg-gradient-to-t from-[#d5f1ef] to-[#d7e8f8] ">
          <div className="flex items-center gap-6 px-10 pt-5">
            <div className="flex items-center gap-4">
              <button className="bg-[#efefef] group-hover:text-[#6c7bf7] w-12 h-12 flex items-center justify-center rounded-full">
                <RiApps2Fill />
              </button>
              <div>
                <h2 className="text-4xl font-bold">Regular </h2>
                <p className="text-base mt-1 text-gray-400">Starter Plan</p>
              </div>
            </div>
          </div>
          <hr className="mt-9" />
          <div className="px-10 space-y-[25px] pt-5">
            {/* items card one */}
            <div className="flex items-center gap-4">
              {/* <i className="fa-solid text-2xl  fa-check"></i> */}
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">Limited Projects</h2>
            </div>
            {/* items card two */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">Regular Support Business</h2>
            </div>
            {/* items card three */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">1 month Free Trial</h2>
            </div>
            {/* items card four */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">3GB storage</h2>
            </div>
            {/* items card five */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">Ads Preview</h2>
            </div>
            {/* text area */}
            <div className="text-center space-y-5">
              <h2 className="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </h2>
              <div>
                <h2 className="text-4xl font-bold">Free </h2>
                <p className="text-xs">For Limited Period</p>
              </div>
              <div>
              <NavLink>
            <button className="text-base font-bold py-4 px-10 bg-black text-white rounded-xl">
                  Get started
                </button>
            </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* card two */}
        <div className="md:w-[411px] group md:h-[714px] rounded-3xl bg-white hover:border-[2px] hover:border-[#6b7cff] border-2 border-white boxShadow hover:bg-gradient-to-t from-[#d5f1ef] to-[#d7e8f8]">
          <div className="flex items-center gap-6 px-10 pt-5">
            <div className="flex items-center gap-4">
              <button className="bg-[#efefef] group-hover:text-[#6c7bf7] w-12 h-12 flex items-center justify-center rounded-full">
                <SiCoffeescript />
              </button>
              <div>
                <h2 className="text-4xl font-bold">Plantinum</h2>
                <p className="text-base mt-1 text-gray-400">
                  For the best results
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-9" />
          <div className="px-10 space-y-[25px] pt-5">
            {/* items card one */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">Limited Projects</h2>
            </div>
            {/* items card two */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">Regular Support Business</h2>
            </div>
            {/* items card three */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">1 month Free Trial</h2>
            </div>
            {/* items card four */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">3GB storage</h2>
            </div>
            {/* items card five */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">Ads Preview</h2>
            </div>
            {/* text area */}
            <div className="text-center space-y-5">
              <h2 className="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </h2>
              <div>
                <h2 className="text-4xl font-bold">$342 </h2>
                <p className="text-xs">For Limited Period</p>
              </div>
              <div>
            <NavLink>
            <button className="text-base font-bold py-4 px-10 bg-black text-white rounded-xl">
                  Get started
                </button>
            </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* card three */}
        <div className="md:w-[411px] group md:h-[714px] rounded-3xl bg-white hover:border-[2px] hover:border-[#6b7cff] border-2 border-white boxShadow hover:bg-gradient-to-t from-[#d5f1ef] to-[#d7e8f8]">
          <div className="flex items-center gap-6 px-10 pt-5">
            <div className="flex items-center gap-4">
              <button className="bg-[#efefef] group-hover:text-[#6c7bf7] w-12 h-12 flex items-center justify-center rounded-full">
                <RiApps2Fill />
              </button>
              <div>
                <h2 className="text-4xl font-bold">Standard</h2>
                <p className="text-base mt-1 text-gray-400">Most popular</p>
              </div>
            </div>
          </div>
          <hr className="mt-9" />
          <div className="px-10 space-y-[25px] pt-5">
            {/* items card one */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">Limited Projects</h2>
            </div>
            {/* items card two */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">Regular Support Business</h2>
            </div>
            {/* items card three */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">1 month Free Trial</h2>
            </div>
            {/* items card four */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">3GB storage</h2>
            </div>
            {/* items card five  */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-xl rounded-full bg-[#d5f5ea]">
                <IoMdCheckmark />
              </button>
              <h2 className="text-base font-bold">Ads Preview</h2>
            </div>
            {/* text area */}
            <div className="text-center space-y-5">
              <h2 className="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </h2>
              <div>
                <h2 className="text-4xl font-bold">$234</h2>
                <p className="text-xs">Billing Monthly</p>
              </div>
              <div>
              <NavLink>
            <button className="text-base font-bold py-4 px-10 bg-black text-white rounded-xl">
                  Get started
                </button>
            </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Frequestly Asked Questions */}
      <section className="max-w-7xl mx-auto mt-32 rounded-3xl  bg-[#f0f2fe]">
        <div className="md:px-16 md:py-16 flex flex-col md:flex-row">
          <div className="flex-1">
            <h2 className="text-5xl font-bold">Frequestly Asked Questions</h2>
            <p className="text-base mt-7">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt.
            </p>
          </div>
          {/* faqs */}
          <div className="flex-1">
            <div className="collapse collapse-plus bg-white mt-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl font-medium">
                How do I grow my business?
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-white mt-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl font-medium">
                Can I cancel my subscription?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, you can cancel your subscription. The process to do so
                  depends on the service or platform you're subscribed to.
                  Generally, you can: Log in to your account on the platform
                  where you purchased the subscription. Navigate to the
                  subscription or billing section. Select the option to cancel
                  or manage your subscription. Follow the on-screen instructions
                  to confirm the cancellation.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-white mt-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl font-medium">
                How do I contact the support?
              </div>
              <div className="collapse-content">
                <p>
                  I hope this message finds you well. I would like to cancel my
                  subscription for [mention the service or product name]. Could
                  you please assist me with the cancellation process? Here are
                  my account details for your reference: Name: [Your Name]
                  Email: [Your Email Address] Subscription ID: [Your
                  Subscription ID, if applicable] Please let me know if you
                  require any additional information. I would appreciate
                  confirmation once the cancellation is processed. Thank you for
                  your help. Best regards, [Your Name]
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-white mt-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Is a credit card required?
              </div>
              <div className="collapse-content">
                <p>Most services offering free trials ask for a credit card to ensure a smooth transition to a paid subscription if the trial isn’t canceled. This allows them to charge users automatically once the trial period ends.   Credit cards are commonly required for ongoing subscriptions, as they enable recurring billing. However, some platforms also accept alternatives like PayPal, digital wallets (e.g., Google Pay, Apple Pay), or direct bank transfers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Are you ready to grow your business with us? */}
      <Ready />
    </main>
  );
};

export default Pricing;
