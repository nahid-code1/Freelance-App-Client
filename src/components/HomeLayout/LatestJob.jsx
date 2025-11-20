import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LatestJob = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const latestJobPromise = fetch("http://localhost:3000/latestJobs")
            .then(res => res.json())
            .then((data) => {
                setJobs(data);
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching jobs:", err));
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-10">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );
    }
    // 
    return (
        <section className="bg-base-200 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">🔥 Latest Jobs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <div
                        key={job._id}
                        className="card bg-white shadow-md p-4 border border-gray-100"
                    >
                        <img
                            src={job.coverImage}
                            alt={job.title}
                            className="rounded-lg mb-4 h-40 w-full object-cover"
                        />
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{job.category}</p>
                        <p className="text-gray-600 text-sm">{job.summary}</p>
                        <p className="text-xs text-gray-400 mt-3">
                            Posted by {job.postedBy}
                        </p>
                    </div>
                ))}

            </div>
            <NavLink to={"/allJobs"} className='mt-10 items-center btn btn-outline border-neutral text-neutral hover:bg-neutral hover:text-white'>View All Jobs</NavLink>
        </section>
    );
};

export default LatestJob;
