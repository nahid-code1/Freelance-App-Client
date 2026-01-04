import { NavLink } from "react-router";
import Button from "../UI/Button";

const CTA = () => {
    return (
        <section className="py-20 bg-base-200 text-center mt-4">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-neutral mb-4">
                    Ready to Get Started?
                </h2>

                <p className="text-gray-600 mb-6">
                    Post a job or start working as a freelancer today.
                </p>

                <Button><NavLink
                    to="/allJobs"

                >
                    Explore Jobs
                </NavLink></Button>
            </div>
        </section>
    );
};

export default CTA;
