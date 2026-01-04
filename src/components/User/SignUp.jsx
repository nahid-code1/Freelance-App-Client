import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Contexts/AuthContext";
import { auth } from "../../Firebase/firebase.init";
import Button from "../UI/Button";

const SignUp = () => {
    const { createUserByEmail, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSignup = (event) => {
        event.preventDefault();
        setError("");

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

        createUserByEmail(email, password)
            .then(async (result) => {
                const firebaseUser = result.user;

                await updateProfile(firebaseUser, {
                    displayName: name,
                    photoURL: photo,
                });

                await firebaseUser.reload();

                setUser({ ...auth.currentUser });

                const newUser = {
                    name,
                    email,
                    photo,
                };

                await fetch("https://freelance-app-server-snowy.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                });

                toast.success("Account created successfully!");
                form.reset();
                navigate("/");
            })
            .catch(() => {
                toast.error("Registration failed. Please try again.");
            });
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
