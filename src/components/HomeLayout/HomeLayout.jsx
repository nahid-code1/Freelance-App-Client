import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const HomeLayout = () => {
    return (
        <>
            <Navbar />

            {/* PAGE CONTENT */}
            <div className="max-w-11/12 mx-auto">
                <main>
                    <Outlet />
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>

            <Toaster position="top-center" reverseOrder={false} />
        </>
    );
};

export default HomeLayout;
