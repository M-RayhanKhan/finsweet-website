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
    </div>
  );
};



export default Sponsor;


 