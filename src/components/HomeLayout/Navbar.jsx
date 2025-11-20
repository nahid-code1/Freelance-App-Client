import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import toast from 'react-hot-toast';
// 
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const links = (
        <>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/allJobs'}>All Jobs</NavLink>
            <NavLink to={'/acceptedTask'}>My Accepted Tasks</NavLink>
            <NavLink to={'/myJobs'}>My Added Jobs</NavLink>
            {
                user && <NavLink to={'/addJob'}>Add a Job</NavLink>
            }
        </>
    )

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfully!");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Freelence.IO</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-3">
                {user && (
                    <div className="relative group">
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
                    <button onClick={handleLogout} className='btn btn-outline border-neutral text-neutral hover:bg-neutral hover:text-white'>
                        LogOut
                    </button>
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
