import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { NavLink } from "react-router";

gsap.registerPlugin(Draggable, InertiaPlugin, Physics2DPlugin);

const Banner = () => {
    const stageRef = useRef(null);

    useEffect(() => {
        const $stage = stageRef.current;
        const stageSize = { w: $stage.clientWidth, h: $stage.clientHeight };

        const resizeObserver = new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            stageSize.w = Math.round(width);
            stageSize.h = Math.round(height);
        });
        resizeObserver.observe($stage);

        // Spawn a simple bouncing circle creature
        const circle = document.createElement("div");
        circle.classList.add("creature");
        $stage.appendChild(circle);

        gsap.set(circle, {
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "#f4b400",
            position: "absolute",
            left: "50%",
            top: "60%",
            xPercent: -50,
            yPercent: -50,
        });

        const animate = () => {
            gsap.to(circle, {
                duration: 2,
                y: stageSize.h / 2 - 50,
                repeat: -1,
                yoyo: true,
                ease: "bounce.out",
            });
        };
        animate();

        Draggable.create(circle, {
            bounds: $stage,
            inertia: true,
            onPress() {
                gsap.to(circle, { scale: 0.9, duration: 0.1 });
            },
            onRelease() {
                gsap.to(circle, { scale: 1, duration: 0.2, ease: "elastic.out(1, 0.4)" });
            },
        });

        return () => {
            resizeObserver.disconnect();
            circle.remove();
        };
    }, []);

    return (
        <section className="flex flex-col md:flex-row justify-between items-center min-h-[80vh] px-6 md:px-16 bg-transparent">
            {/* LEFT SIDE - TEXT */}
            <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                    Reliable Marketplace for Every Need
                </h1>
                <p className="text-gray-700 text-lg sm:text-xl">
                    Trusted professionals, verified payments, and safe collaborations — your
                    reliable freelance hub built for success.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <button className="btn bg-neutral text-white hover:bg-neutral-focus border-none">
                        <NavLink to={'/allJobs'}>Browse Jobs</NavLink>
                    </button>
                    <button className="btn btn-outline border-neutral text-neutral hover:bg-neutral hover:text-white">
                        <NavLink to={'/addJob'}>Create a Job</NavLink>
                    </button>
                </div>
            </div>

            {/* RIGHT SIDE - ANIMATION */}
            <div
                ref={stageRef}
                className="stage relative w-full md:w-1/2 h-[300px] md:h-[400px] mt-10 md:mt-0 overflow-hidden bg-[#FAEED8] rounded-4xl"
            ></div>
        </section>
    );
};

export default Banner;
