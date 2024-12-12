import Banner from "../components/Banner";
import Business from "../components/Business";
import Discover from "../components/Discover";
import Features from "../components/Features";
import HighQuality from "../components/HIghQuality";
import NewClient from "../components/NewClient";
import Sponsor from "../components/Sponsor";


const Home = () => {
    return (
        <div>
            <Banner/>
            <HighQuality/>
            <Business/>
            <NewClient/>
            <Sponsor/>
            <Discover/>
            <Features/>
        </div>
    );
};

export default Home;