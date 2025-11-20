import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const HomeLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default HomeLayout;