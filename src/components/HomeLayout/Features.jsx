import React from 'react';

const Features = () => {
    const Features = () => {
        const features = [
            "Verified Freelancers",
            "Secure Payments",
            "Easy Job Management",
            "Fast Hiring Process",
            "Real-Time Updates",
            "Trusted Platform",
        ];
        return (
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Platform Features
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-base-200 p-6 rounded-xl shadow text-center"
                            >
                                <p className="font-semibold">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };
}
export default Features;