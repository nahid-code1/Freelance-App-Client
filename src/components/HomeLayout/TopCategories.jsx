import React from "react";

const TopCategories = () => {
    return (
        <section className="py-16 bg-base-100">
            <div className="max-w-6xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-8">Top Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="card bg-base-200 shadow-md p-6 hover:scale-105 transition-transform">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Web Development" className="w-16 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold">Web Development</h3>
                    </div>

                    <div className="card bg-base-200 shadow-md p-6 hover:scale-105 transition-transform">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Graphics Design" className="w-16 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold">Graphics Design</h3>
                    </div>

                    <div className="card bg-base-200 shadow-md p-6 hover:scale-105 transition-transform">
                        <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Digital Marketing" className="w-16 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold">Digital Marketing</h3>
                    </div>

                    <div className="card bg-base-200 shadow-md p-6 hover:scale-105 transition-transform">
                        <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Content Writing" className="w-16 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold">Content Writing</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopCategories;
