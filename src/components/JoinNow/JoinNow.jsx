import { NavLink } from "react-router-dom";

const JoinNow = () => {
    return (
        <section className="bg-base-200 py-16 px-4 sm:px-8 md:px-16">
            <div className="max-w-5xl mx-auto text-center space-y-6">

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Join Our Freelance Marketplace Today
                </h2>

                <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                    Whether you’re looking to hire skilled professionals or find freelance
                    work, our platform makes collaboration simple, secure, and efficient.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                    <NavLink
                        to="/register"
                        className="px-6 py-3 bg-neutral text-white rounded-lg font-semibold hover:bg-neutral-focus transition"
                    >
                        Create an Account
                    </NavLink>

                    <NavLink
                        to="/login"
                        className="px-6 py-3 border border-neutral text-neutral rounded-lg font-semibold hover:bg-neutral hover:text-white transition"
                    >
                        Login
                    </NavLink>
                </div>

            </div>
        </section>
    );
};

export default JoinNow;
