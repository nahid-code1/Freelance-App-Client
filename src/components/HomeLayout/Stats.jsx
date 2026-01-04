import React from 'react';

const Stats = () => {
    return (
        <section className="py-16 bg-base-200 mt-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-3xl font-bold">2K+</h3>
                        <p className="text-gray-600">Jobs Posted</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-3xl font-bold">1.5K+</h3>
                        <p className="text-gray-600">Freelancers</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-3xl font-bold">95%</h3>
                        <p className="text-gray-600">Success Rate</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-3xl font-bold">24/7</h3>
                        <p className="text-gray-600">Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;