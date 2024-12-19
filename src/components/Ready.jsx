import { Link } from "react-router";

const Ready = () => {
    return (
        <section className="ready-gradient pb-[150px]">
            <div className="space-y-4 max-w-[800px] mx-auto text-center">
                <h1 className="text-[50px] text-title leading-[60px] font-bold">Are you ready to grow your business with us?</h1>
                <p className="text-description font-normal">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                </p>
             
                <Link to="/pricing">
                <button className="Btn w-[171px] h-[56px] text-[16px] mt-4 font-bold">
                    View Pricing
                </button>
                </Link>
            </div>
            <div className="">

            </div>
        </section>
    );
};

export default Ready;