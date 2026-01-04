import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import image1 from '../../assets/GettyImages-1276389782.png';
import image2 from '../../assets/becoming-a-freelancer---Elorus-Blog.jpg';
import image3 from '../../assets/How-to-Find-Freelance-Work-Tips-Red-Flags-and-More.avif';
import image4 from '../../assets/images.jfif';
import Button from "../UI/Button";

const Banner = () => {
    return (
        <section className="mt-4 flex justify-center items-center lg:min-h-[60vh] max-h-[70vh] px-4 sm:px-8 md:px-16">

            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                effect="fade"
                loop
                className="w-full max-w-6xl"
            >

                {/* SLIDE 1 */}
                <SwiperSlide className="relative flex justify-center items-center">
                    <img
                        className="w-full h-[60vh] brightness-60 max-h-[70vh] object-cover rounded-lg"
                        src={image1}
                        alt="Find Freelance Jobs"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 rounded-lg px-4">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                            Find Freelance Jobs Easily
                        </h1>
                        <p className="text-base sm:text-lg mb-5">
                            Explore thousands of freelance opportunities from trusted clients.
                        </p>
                        <Button>
                            <NavLink
                                to="/allJobs">
                                Browse All Jobs
                            </NavLink>
                        </Button>
                    </div>
                </SwiperSlide>

                {/* SLIDE 2 */}
                <SwiperSlide className="relative flex justify-center items-center">
                    <img
                        className="w-full h-[60vh]  brightness-60 max-h-[70vh] object-cover rounded-lg"
                        src={image2}
                        alt="Hire Skilled Freelancers"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 rounded-lg px-4">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                            Hire Skilled Freelancers
                        </h1>
                        <p className="text-base sm:text-lg mb-5">
                            Connect with verified professionals ready to deliver quality work.
                        </p>
                        <Button>
                            <NavLink
                                to="/allJobs">
                                Browse All Jobs
                            </NavLink>
                        </Button>
                    </div>
                </SwiperSlide>

                {/* SLIDE 3 */}
                <SwiperSlide className="relative flex justify-center items-center">
                    <img
                        className="w-full h-[60vh] brightness-60 max-h-[70vh] object-cover rounded-lg"
                        src={image3}
                        alt="Post Jobs & Get Proposals"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 rounded-lg px-4">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                            Post Jobs & Receive Proposals
                        </h1>
                        <p className="text-base sm:text-lg mb-5">
                            Share your project and get bids from talented freelancers.
                        </p>
                        <Button>
                            <NavLink
                                to="/allJobs">
                                Browse All Jobs
                            </NavLink>
                        </Button>
                    </div>
                </SwiperSlide>

                {/* SLIDE 4 */}
                <SwiperSlide className="relative flex justify-center items-center">
                    <img
                        className="w-full h-[60vh] brightness-60 max-h-[70vh] object-cover rounded-lg"
                        src={image4}
                        alt="Work Securely & Get Paid"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 rounded-lg px-4">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                            Work Securely & Get Paid On Time
                        </h1>
                        <p className="text-base sm:text-lg mb-5">
                            Safe payments, clear milestones, and transparent workflows.
                        </p>
                        <Button>
                            <NavLink
                                to="/allJobs">
                                Browse All Jobs
                            </NavLink>
                        </Button>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Banner;
