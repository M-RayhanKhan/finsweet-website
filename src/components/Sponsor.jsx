import Marquee from "react-fast-marquee";






const Sponsor = () => {
    const sponsorImg = [
        {
          id: 1,
          img: "https://i.ibb.co.com/z6gjsbs/Logo-1.png",
        },
        {
          id: 2,
          img: "https://i.ibb.co.com/vwkGH6K/Logo-2.png",
        },
        {
          id: 3,
          img: "https://i.ibb.co.com/1RH4y7p/Logo-3.png",
        },
        {
          id: 4,
          img: "https://i.ibb.co.com/8gFq0ck/Logo-4.png",
        },
        {
          id: 5,
          img: "https://i.ibb.co.com/MMB6LnH/Logo-5.png",
        },
      ];
  return (
    <div className="my-12 max-w-7xl mx-auto">
      {/* sponsor img 1 */}
      <Marquee speed={100} pauseOnHover={true}>
            <div className="grid gap-10 grid-cols-5">
                {
                    sponsorImg.map(sp => <div className="mr-10" key={sp.id}>
                        <img className="w-[190px] object-cover" src={sp.img} alt="" />
                    </div>)
                }
            </div>
      </Marquee>

      <div className="flex justify-between">
        {/* <div className="w-[190px]">
                    <img className="w-full" src={sponsorLogo1} alt="" />
                </div> */}
        {/* sponsor img 2 */}
        {/* <div className="w-[190px]">
                    <img className="w-full" src={sponsorLogo2} alt="" />
                </div> */}
        {/* sponsor img 3 */}
        {/* <div className="w-[190px]">
                    <img className="w-full" src={sponsorLogo3} alt="" />
                </div> */}
        {/* sponsor img 4 */}
        {/* <div className="w-[190px]">
                    <img className="w-full" src={sponsorLogo4} alt="" />
                </div> */}
        {/* sponsor img 5 */}
        {/* <div className="w-[190px]">
                    <img className="w-full" src={sponsorLogo5} alt="" />
                </div> */}
      </div>
    </div>
  );
};



export default Sponsor;


 