
import salesImg from '../assets/sales.png'
import managerImg from '../assets/projectManager.png'
import activeImg from '../assets/active.png'

const Discover = () => {
    return (
      <section className="lg:flex gap-16 my-10 px-2 lg:px-0 max-w-7xl mx-auto">
        <div className="lg:w-1/2">
        <h5 className="text-2xl font-bold discover ">Discover More</h5>
        <h1 className="lg:text-[48px] text-3xl font-bold lg:leading-[55px] mt-6 mb-7">Analyze your sales and marketing leads</h1>
        <p className="text-description lg:pr-10">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</p>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 space-y-7">
        {/* sales manager text content */}
            <div className='flex items-center gap-6'>
                <figure className='md:w-16 md:h-16 w-[60px]'>
                    <img className='w-full h-full' src={salesImg} alt="" />
                </figure>
                <div>
                    <h1 className='text-[20px] font-[700]'>Sales Tracking</h1>
                    <p className='text-description text-[18px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
            </div>
        {/* project manager text content */}
            <div className='flex items-center gap-6'>
                <figure className='md:w-16 md:h-16 w-[60px]'>
                    <img className='w-full h-full' src={managerImg} alt="" />
                </figure>
                <div>
                    <h1 className='text-[20px] font-[700]'>Project Management</h1>
                    <p className='text-description text-[18px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
            </div>
        {/* active report text content */}
            <div className='flex items-center gap-6'>
                <figure className='md:w-16 md:h-16 w-[60px]'>
                    <img className='w-full h-full' src={activeImg} alt="" />
                </figure>
                <div>
                    <h1 className='text-[20px] font-[700]'>Activity Report</h1>
                    <p className='text-description text-[18px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
            </div>
        </div>
      </section>
    );
};

export default Discover;