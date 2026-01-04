import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import toast from 'react-hot-toast';
import Button from '../UI/Button';

const LogIn = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(() => {
                form.reset();
                toast.success("Logged In successfully!");
                navigate(location.state ? location.state : '/');
            })
            .catch((error) => {
                if (error.code === "auth/invalid-credential" || error.code === "auth/wrong-password") {
                    setError("Invalid email or password. Please try again.");
                } else if (error.code === "auth/user-not-found") {
                    setError("No account found with this email.");
                } else {
                    setError("Something went wrong. Please try again.");
                }
            });
    }
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                toast.success("Logged in with Google!");
                navigate(location.state ? location.state : '/');
            })
            .catch(() => {
                toast.error("Google login failed. Please try again.");
            });
    };
    return (
        <div className="min-h-[70vh] flex justify-center items-center bg-base-200 my-10">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <h2 className="text-2xl font-bold text-center mb-2">Login</h2>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                        <label className="label">
                            <NavLink
                                className="label-text-alt link link-hover text-blue-600"
                            >
                                Forgot password?
                            </NavLink>
                        </label>
                    </div>



                    <div className="form-control mt-4">
                        <Button type="submit">
                            Login
                        </Button>
                    </div>

                    <div className="divider">OR</div>

                    <Button
                        type="button"
                        onClick={handleGoogleLogin}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="24px"
                            height="24px"
                            className="mr-2"
                        >
                            <path
                                fill="#FFC107"
                                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.84 1.154 7.961 3.039l5.657-5.657C34.046 6.322 29.268 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20c0-1.341-.138-2.65-.389-3.917z"
                            />
                            <path
                                fill="#FF3D00"
                                d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.84 1.154 7.961 3.039l5.657-5.657C34.046 6.322 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                            />
                            <path
                                fill="#4CAF50"
                                d="M24 44c5.166 0 9.86-1.977 13.409-5.197l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                            />
                            <path
                                fill="#1976D2"
                                d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.565l.003-.002 6.19 5.238C39.073 35.337 42 29.999 42 24c0-1.341-.138-2.65-.389-3.917z"
                            />
                        </svg>
                        Login with Google
                    </Button>

                    <p className="text-sm text-center mt-3">
                        New here?{" "}
                        <NavLink
                            to="/register"
                            className="text-blue-500 hover:underline"
                        >
                            Sign up
                        </NavLink>
                    </p>
                </form>
            </div>
            {/* <Toaster position="top-center" reverseOrder={false} /> */}
        </div>
    );
};

export default LogIn;