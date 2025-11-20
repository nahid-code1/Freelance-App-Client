import AboutPlatform from "./AboutPlatform";
import Banner from "./Banner";
import LatestJob from "./LatestJob";
import TopCategories from "./TopCategories";

const Home = () => {
    return (
        <div>
            <Banner />
            <LatestJob />
            <TopCategories />
            <AboutPlatform />
        </div>
    );
};

export default Home;
