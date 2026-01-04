import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-4 footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">

                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.5 11.24H14.4l-5.085-6.646L3.48 21.75H.17l7.73-8.83L-.25 2.25H9.85l4.563 6.023L18.244 2.25Zm-1.162 17.52h1.833L7.054 4.126H5.083l12 15.644Z" />
                        </svg>
                    </a>


                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    {/*  */}

                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </div>
            </nav>
            <aside>
                <p>
                    Copyright © {new Date().getFullYear()} - All rights reserved by Freelance.IO Ltd
                </p>
            </aside>
        </footer>

    );
};

export default Footer;