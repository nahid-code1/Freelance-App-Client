import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const AddJob = () => {
    const { user } = useContext(AuthContext);

    const handleAddJob = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const summary = form.summary.value;
        const coverImage = form.coverImage.value;

        const newJob = {
            title,
            postedBy: user?.displayName || "Unknown User",
            category,
            summary,
            coverImage,
            userEmail: user?.email || "No Email",
            postedAt: new Date().toISOString()
        };

        fetch("http://localhost:3000/allJobs", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newJob),
        })
            .then((res) => res.json())
            .then(() => {
                toast.success("Job posted successfully!");
                form.reset();
            })
            .catch(() => toast.error("Failed to submit job."));
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200 py-10">
            <div className="card w-full max-w-lg bg-base-100 shadow-xl p-6">
                <h2 className="text-2xl font-bold text-center mb-4">
                    Add a New Job
                </h2>

                <form onSubmit={handleAddJob} className="space-y-4">

                    {/* Title */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Job Title</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            className="input input-bordered w-full"
                            placeholder="Job Title"
                            required
                        />
                    </div>

                    {/* Posted By */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Posted By</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered bg-gray-100 w-full"
                            value={user?.displayName || ""}
                            disabled
                        />
                    </div>

                    {/* Category */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Category</span>
                        </label>
                        <select
                            name="category"
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="">Select Category</option>
                            <option>Web Development</option>
                            <option>Digital Marketing</option>
                            <option>Graphics Design</option>
                            <option>SEO Optimization</option>
                            <option>App Development</option>
                            <option>Content Writing</option>
                        </select>
                    </div>

                    {/* Summary */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Summary</span>
                        </label>
                        <textarea
                            name="summary"
                            className="textarea textarea-bordered w-full"
                            placeholder="Short job description"
                            required
                        ></textarea>
                    </div>

                    {/* Cover Image */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Cover Image URL</span>
                        </label>
                        <input
                            type="text"
                            name="coverImage"
                            className="input input-bordered w-full"
                            placeholder="Image URL"
                            required
                        />
                    </div>

                    {/* User Email */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">User Email</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered bg-gray-100 w-full"
                            value={user?.email || ""}
                            disabled
                        />
                    </div>

                    <button type="submit" className="btn btn-neutral w-full">
                        Submit Job
                    </button>
                </form>
            </div>

            <Toaster position="top-center" />
        </div>

    );
};

export default AddJob;
