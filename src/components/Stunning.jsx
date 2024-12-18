import Carousel from 'react-grid-carousel'
const Stunning = () => {
    return (
        <section className="max-w-[1320px] mx-auto my-[66px]">
        <h2 className="md:text-5xl text-xl font-bold text-center md:w-[628px] mx-auto">The stunning results our
            customers have
            experienced</h2>
            {/* lg device  */}
    <div className='hidden lg:block mt-10'>
    <Carousel  cols={3} autoplay={2000}    rows={1} hideArrow={true} gap={20} loop={true}>
      <Carousel.Item>
        {/* card 1 */}
      <div className=" border rounded-3xl p-12">
                <div className="text-center space-y-6 ">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://img.freepik.com/free-photo/business-man-black-suit-glasses-looking-front-with-confident-expression-smiling-showing-thumbs-up-standing-white-wall-2_141793-50834.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">Ron Wood</h1>
                        <p className="text-sm mt-1">CEO</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 2 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://img.freepik.com/free-photo/agree-hand-shake-business-concept_1194-617117.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">Mark Mason</h1>
                        <p className="text-sm mt-1">Marketing Manager</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 3 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://img.freepik.com/free-photo/pleased-young-call-center-man-wearing-headset-showing-peace-gestures-isolated-white-background_141793-63597.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">Sam Preston</h1>
                        <p className="text-sm mt-1">CEO</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 4 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://img.freepik.com/free-photo/handsome-man-making-ok-sign_1368-6336.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">MD: Nasir</h1>
                        <p className="text-sm mt-1">Backend Developer</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 5 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://img.freepik.com/free-photo/medium-shot-smiley-man-desk_23-2148924776.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">IBE Riyad</h1>
                        <p className="text-sm mt-1">UI/UX Designer</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 6 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://scontent.fcgp32-1.fna.fbcdn.net/v/t1.6435-1/140871443_102339051869089_8096564276955688104_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=Pr5ptTNEwzwQ7kNvgFf9hUJ&_nc_zt=24&_nc_ht=scontent.fcgp32-1.fna&_nc_gid=A4vaXqeiEQ3JNxASfceI-jG&oh=00_AYBFXJZHhoTcf07IXuDEPollKlwdxVokkMbj8KaD55jQxA&oe=678498DB" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">Fohad</h1>
                        <p className="text-sm mt-1">Web Developer</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 7 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://scontent.fcgp32-1.fna.fbcdn.net/v/t39.30808-6/262700089_2670005476627080_1937946089761017165_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=sZ1228qSt8UQ7kNvgFHyI6K&_nc_zt=23&_nc_ht=scontent.fcgp32-1.fna&_nc_gid=A6uBtgEbqQ_8tlJ0Z256au5&oh=00_AYDooqNLVIZZasdARA9yzvY4L_i9QSGwwuMGc-jP5l1XKw&oe=6762FD2D" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">Joinal Abden</h1>
                        <p className="text-sm mt-1">Backend Developer est...</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 8 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://scontent.fcgp32-1.fna.fbcdn.net/v/t39.30808-6/464416865_1030560205420403_96218156290751310_n.jpg?stp=dst-jpg_s417x417_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7a06f5&_nc_ohc=1MWr-nhHNBIQ7kNvgGXR_Ph&_nc_zt=23&_nc_ht=scontent.fcgp32-1.fna&_nc_gid=AHt7UqBZaLbysWyZHrq8qUK&oh=00_AYDD-pbot57ed8ELXZTNo2crpqw98Z5lzRKLPWfcWXtg3g&oe=6762F45D" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">Rayhan Khan</h1>
                        <p className="text-sm mt-1">FrontEnd Developer</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 9 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://scontent.fcgp32-1.fna.fbcdn.net/v/t39.30808-6/395230680_305229198924039_7735467105660482241_n.jpg?stp=c0.106.960.960a_dst-jpg_s552x414_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_ohc=1oSMmm-z9rAQ7kNvgH894m9&_nc_zt=23&_nc_ht=scontent.fcgp32-1.fna&_nc_gid=AGEOsF5nLL0gQZ-J6AvEEKW&oh=00_AYDJVFIWO86n-6QlPwMbRTIJ5aIn7Ki-VyzoJeZysZrn2A&oe=67630722" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">Jobayer </h1>
                        <p className="text-sm mt-1">Hafej est.</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>   
      {/* ... */}
    </Carousel>
    </div>
            {/* medium device  */}
    <div className='lg:hidden mt-10'>
    <Carousel  cols={2} autoplay={2000}   rows={1} hideArrow={true} gap={15} loop={true}>
      <Carousel.Item>
        {/* card 1 */}
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://img.freepik.com/free-photo/business-man-black-suit-glasses-looking-front-with-confident-expression-smiling-showing-thumbs-up-standing-white-wall-2_141793-50834.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">Ron Wood</h1>
                        <p className="text-sm mt-1">CEO</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 2 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://img.freepik.com/free-photo/agree-hand-shake-business-concept_1194-617117.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">Mark Mason</h1>
                        <p className="text-sm mt-1">Marketing Manager</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 3 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://img.freepik.com/free-photo/pleased-young-call-center-man-wearing-headset-showing-peace-gestures-isolated-white-background_141793-63597.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">Sam Preston</h1>
                        <p className="text-sm mt-1">CEO</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 4 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://img.freepik.com/free-photo/handsome-man-making-ok-sign_1368-6336.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">MD: Nasir</h1>
                        <p className="text-sm mt-1">Backend Developer</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 5 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://img.freepik.com/free-photo/medium-shot-smiley-man-desk_23-2148924776.jpg?ga=GA1.1.90538231.1733130023&semt=ais_hybrid" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">IBE Riyad</h1>
                        <p className="text-sm mt-1">UI/UX Designer</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 6 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://scontent.fcgp32-1.fna.fbcdn.net/v/t1.6435-1/140871443_102339051869089_8096564276955688104_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=Pr5ptTNEwzwQ7kNvgFf9hUJ&_nc_zt=24&_nc_ht=scontent.fcgp32-1.fna&_nc_gid=A4vaXqeiEQ3JNxASfceI-jG&oh=00_AYBFXJZHhoTcf07IXuDEPollKlwdxVokkMbj8KaD55jQxA&oe=678498DB" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">Fohad</h1>
                        <p className="text-sm mt-1">Web Developer</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 7 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://scontent.fcgp32-1.fna.fbcdn.net/v/t39.30808-6/262700089_2670005476627080_1937946089761017165_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=sZ1228qSt8UQ7kNvgFHyI6K&_nc_zt=23&_nc_ht=scontent.fcgp32-1.fna&_nc_gid=A6uBtgEbqQ_8tlJ0Z256au5&oh=00_AYDooqNLVIZZasdARA9yzvY4L_i9QSGwwuMGc-jP5l1XKw&oe=6762FD2D" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">Joinal Abden</h1>
                        <p className="text-sm mt-1">Backend Developer est...</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 8 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://scontent.fcgp32-1.fna.fbcdn.net/v/t39.30808-6/464416865_1030560205420403_96218156290751310_n.jpg?stp=dst-jpg_s417x417_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7a06f5&_nc_ohc=1MWr-nhHNBIQ7kNvgGXR_Ph&_nc_zt=23&_nc_ht=scontent.fcgp32-1.fna&_nc_gid=AHt7UqBZaLbysWyZHrq8qUK&oh=00_AYDD-pbot57ed8ELXZTNo2crpqw98Z5lzRKLPWfcWXtg3g&oe=6762F45D" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">Rayhan Khan</h1>
                        <p className="text-sm mt-1">FrontEnd Developer</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>
        {/* card 9 */}
      <Carousel.Item>
      <div className=" border rounded-3xl ">
                <div className="text-center space-y-6 p-12">
                    <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <img className="w-16 h-16 object-cover mx-auto rounded-full" src="https://scontent.fcgp32-1.fna.fbcdn.net/v/t39.30808-6/395230680_305229198924039_7735467105660482241_n.jpg?stp=c0.106.960.960a_dst-jpg_s552x414_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_ohc=1oSMmm-z9rAQ7kNvgH894m9&_nc_zt=23&_nc_ht=scontent.fcgp32-1.fna&_nc_gid=AGEOsF5nLL0gQZ-J6AvEEKW&oh=00_AYDJVFIWO86n-6QlPwMbRTIJ5aIn7Ki-VyzoJeZysZrn2A&oe=67630722" alt="" />
                    <div>
                        <h1 className="text-xl font-medium">Jobayer </h1>
                        <p className="text-sm mt-1">Hafej est.</p>
                    </div>
                </div>
            </div>
      </Carousel.Item>   
      {/* ... */}
    </Carousel>
    </div>

      
    </section>
    );
};

export default Stunning;