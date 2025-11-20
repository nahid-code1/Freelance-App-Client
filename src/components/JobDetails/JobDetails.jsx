import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthContext";

const JobDetails = () => {
    const job = useLoaderData();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleAcceptJob = () => {
        if (job.userEmail === user?.email) {
            toast.error("You cannot accept your own job!");
            return;
        }

        const acceptedJob = {
            jobId: job._id,
            title: job.title,
            email: user.email,
            postedBy: job.postedBy,
            category: job.category,
            coverImage: job.coverImage,
            summary: job.summary,
            acceptedAt: new Date()
        };

        fetch("http://localhost:3000/acceptedJobs", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(acceptedJob)
        })
            .then(res => res.json())
            .then(() => {
                toast.success("Job accepted successfully!");
                navigate("/acceptedTask");
            })
            .catch(() => toast.error("Failed to accept job"));
    };

    return (
        <div className="min-h-[80vh] flex justify-center items-center bg-base-200 p-6 my-6">

            <div className="card w-full max-w-2xl bg-base-100 shadow-xl">

                <figure className="w-full h-60 overflow-hidden">
                    <img
                        src={job.coverImage}
                        alt={job.title}
                        className="w-full h-full object-cover"
                    />
                </figure>

                <div className="card-body space-y-2">
                    <h1 className="card-title text-3xl font-bold">
                        {job.title}
                    </h1>

                    <p className="text-gray-600"><strong>Category:</strong> {job.category}</p>

                    <p className="text-gray-600"><strong>Posted By:</strong> {job.postedBy}</p>

                    <p className="text-gray-600"><strong>Posted Email:</strong> {job.userEmail}</p>

                    <p className="text-gray-700 leading-relaxed">{job.summary}</p>

                    <div className="card-actions justify-end mt-4">
                        <button
                            onClick={handleAcceptJob}
                            className="btn btn-neutral px-6"
                        >
                            Accept Job
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
