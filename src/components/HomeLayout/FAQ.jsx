import React from 'react';

const FAQ = () => {
    return (
        <section className="py-16 bg-base-200">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="font-semibold">How do I post a job?</h4>
                        <p className="text-gray-600 text-sm">
                            Simply sign up, go to the dashboard, and click “Add Job”.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="font-semibold">Is this platform free?</h4>
                        <p className="text-gray-600 text-sm">
                            Yes, creating an account and browsing jobs is free.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="font-semibold">How do payments work?</h4>
                        <p className="text-gray-600 text-sm">
                            Payments are handled securely after job acceptance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;