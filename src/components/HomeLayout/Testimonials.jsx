import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What Users Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-base-200 p-6 rounded-xl shadow">
                        <p className="text-gray-600 mb-4">
                            “This platform helped me find quality freelancers very quickly.”
                        </p>
                        <h4 className="font-semibold">— Client</h4>
                    </div>

                    <div className="bg-base-200 p-6 rounded-xl shadow">
                        <p className="text-gray-600 mb-4">
                            “I got consistent freelance work and timely payments.”
                        </p>
                        <h4 className="font-semibold">— Freelancer</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;