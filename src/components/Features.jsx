import chomeIcon from "../assets/chromeIcon.png";
import messageIcon from "../assets/message.png";
import AiIcons from "../assets/Ai.png";

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto my-[66px] px-2 lg:px-0">
      <div className="text-center space-y-6 lieners">
        <h2 className="md:text-5xl text-4xl font-bold">Features</h2>
      </div>
      <div className="bg-[#f9f0fb] text-center md:text-start space-y-8 lg:space-y-0 gap-5 lg:px-12 rounded-3xl mt-10 px-4  py-16 lg:flex justify-between">
        {/* features content 1 */}
        <div className="pr-1">
          <img className="mx-auto md:mx-0" src={chomeIcon} alt="" />
          <h2 className="md:text-[34px] mt-6 mb-4 text-2xl font-bold leading-10 pt-2">
            Advanced 256-bit encryption
          </h2>
          <p className="md:text-[16px] text-sm opacity-[0.87]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
          </p>
        </div>
        <div className="border-r-[2px]  border-[#cdc7d2]"></div>
        {/* features content 2 */}
        <div className="">
          <img className="mx-auto md:mx-0" src={messageIcon} alt="" />
          <h2 className="md:text-[34px] mt-6 mb-4 text-2xl font-bold leading-10 pt-2">
            Simple collaboration tools
          </h2>
          <p className="md:text-[16px] text-sm opacity-[0.87]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
          </p>
        </div>
        <div className="border-r-[2px]  border-[#cdc7d2]"></div>
        {/* features content 3 */}
        <div className="pl-4">
          <img className="mx-auto md:mx-0" src={AiIcons} alt="" />
          <h2 className="md:text-[34px] mt-6 mb-4 text-2xl font-bold leading-10 pt-2">
            Customizable AI features
          </h2>
          <p className="md:text-[16px]  text-sm opacity-[0.87]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
