import AboutPlatform from "./AboutPlatform";
import Banner from "./Banner";
import CTA from "./CTA";
import FAQ from "./FAQ";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import LatestJob from "./LatestJob";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import TopCategories from "./TopCategories";

const Home = () => {
    return (
        <div>
            <Banner />
            <LatestJob />
            <TopCategories />
            <HowItWorks />
            <Features />
            <Stats />
            <Testimonials />
            <AboutPlatform />
            <FAQ />
            <CTA />
        </div>
    );
};

export default Home;
