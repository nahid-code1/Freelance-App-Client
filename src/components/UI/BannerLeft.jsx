import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import Stats from "../UI/Stats";

const BannerLeft = ({ title, description }) => {
    return (
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">

            {/* Heading */}
            <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-bold text-gray-900 leading-tight">
                {title}
            </h1>

            {/* Description */}
            <p className="text-gray-700 text-[clamp(1rem,2.5vw,1.25rem)] max-w-xl mx-auto md:mx-0">
                {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button>
                    <NavLink to="/allJobs">Browse Jobs</NavLink>
                </Button>
                <Button>
                    <NavLink to="/addJob">Create a Job</NavLink>
                </Button>
            </div>

            {/* Stats */}
            <Stats />
        </div>
    );
};

export default BannerLeft;
