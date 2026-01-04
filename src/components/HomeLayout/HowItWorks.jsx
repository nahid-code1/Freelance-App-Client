import React from 'react';

const HowItWorks = () => {
    return (
        <div>
            <section className="py-16 bg-base-200">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        How It Works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-3">Post a Job</h3>
                            <p className="text-gray-600">
                                Create a job post with your requirements and budget in minutes.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-3">Hire Talent</h3>
                            <p className="text-gray-600">
                                Browse freelancers, review profiles, and choose the best match.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-3">Get Work Done</h3>
                            <p className="text-gray-600">
                                Collaborate, track progress, and complete your project smoothly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;