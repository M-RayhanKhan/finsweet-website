import Banner from "../components/Banner";
import Business from "../components/Business";
import Discover from "../components/Discover";
import Features from "../components/Features";
import HighQuality from "../components/HIghQuality";
import NewClient from "../components/NewClient";
import Ready from "../components/Ready";
import Sponsor from "../components/Sponsor";
import Stunning from "../components/Stunning";


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
            <Stunning/>
            <Ready/>
        </div>
    );
};

export default Home;