import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import toast from 'react-hot-toast';
import Button from '../UI/Button';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const handleToggle = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const links = (
        <>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/allJobs'}>All Jobs</NavLink>
            {!user && <NavLink to={'/join'}>Join As Freelancer or Client</NavLink>}
            {user && <NavLink to={'/acceptedTask'}>My Accepted Tasks</NavLink>}
            {user && <NavLink to={'/myJobs'}>My Added Jobs</NavLink>}
            {user && <NavLink to={'/addJob'}>Add a Job</NavLink>}
        </>
    );

    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Logged out successfully!"))
            .catch((error) => console.log(error));
    };

    return (
        <div className="max-w-11/12 mx-auto navbar sticky top-0 z-50 bg-base-100 shadow-sm">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-secondary">Freelance.IO</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-3">

                <label className="swap swap-rotate cursor-pointer">
                    <input type="checkbox"
                        checked={theme === "dark"}
                        onChange={handleToggle}
                    />

                    <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M5.64 17l-.71.71M12 4V2m7.36 3.64l.71-.71M22 12h2m-3.64 7.36l.71.71M12 22v2m-7.36-3.64l-.71.71M2 12H0" />
                    </svg>

                    <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M21.64 13A9 9 0 0111 2a9 9 0 100 18 9 9 0 0010.64-7z" />
                    </svg>
                </label>

                {user && (
                    <div className="relative group hidden md:block">
                        <img
                            src={user.photoURL}
                            alt="User"
                            className="w-10 h-10 rounded-full border cursor-pointer"
                        />

                        <div className="absolute right-0 mt-2 hidden group-hover:block bg-base-100 shadow-lg p-3 rounded-lg text-sm">
                            <p className="font-semibold">{user.displayName}</p>
                        </div>
                    </div>
                )}

                {user ? (
                    <Button
                        onClick={handleLogout}>
                        LogOut
                    </Button>
                ) : (
                    <NavLink to={"/login"} className='btn btn-outline border-neutral text-neutral hover:bg-neutral hover:text-white'>
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;
