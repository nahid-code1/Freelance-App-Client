import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Contexts/AuthContext";
import { auth } from "../../Firebase/firebase.init";
import Button from "../UI/Button";

const SignUp = () => {
    const {
        createUserByEmail,
        googleSignIn,
        setUser
    } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoUrl.value;
        const password = form.password.value;

        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }

        try {
            const result = await createUserByEmail(email, password);
            const firebaseUser = result.user;

            await updateProfile(firebaseUser, {
                displayName: name,
                photoURL: photo,
            });

            await firebaseUser.reload();
            setUser({ ...auth.currentUser });

            await fetch("https://freelance-app-server-snowy.vercel.app/users", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    photo,
                }),
            });

            toast.success("Account created successfully!");
            form.reset();
            navigate("/");
        } catch {
            toast.error("Registration failed. Please try again.");
        }
    };

    const handleGoogleSignup = async () => {
        try {
            const result = await googleSignIn();
            const user = result.user;

            setUser(user);

            await fetch("https://freelance-app-server-snowy.vercel.app/users", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }),
            });

            toast.success("Logged in with Google!");
            navigate("/");
        } catch {
            toast.error("Google login failed.");
        }
    };

    return (
        <div className="min-h-[70vh] flex justify-center items-center bg-base-200">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <form onSubmit={handleSignup} className="card-body">
                    <h2 className="text-2xl font-bold text-center mb-2">
                        Register
                    </h2>

                    <div className="form-control">
                        <label className="label">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Photo URL</label>
                        <input
                            type="text"
                            name="photoUrl"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control mt-4">
                        <Button type="submit">Register</Button>
                    </div>

                    <div className="divider">OR</div>

                    <Button type="button" onClick={handleGoogleSignup}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="22"
                            height="22"
                            className="mr-2"
                        >
                            <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.3 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
                            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.3 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z" />
                            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                            <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C39.1 35.3 42 30 42 24c0-1.3-.1-2.6-.4-3.9z" />
                        </svg>
                        Sign up with Google
                    </Button>

                    <p className="text-sm text-center mt-3">
                        Already have an account?{" "}
                        <NavLink to="/login" className="text-blue-500">
                            Login
                        </NavLink>
                    </p>
                </form>
            </div>

            <Toaster position="top-center" />
        </div>
    );
};

export default SignUp;
