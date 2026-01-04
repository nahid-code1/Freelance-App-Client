import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import Skeleton from "../UI/Skeleton";

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const jobsPerPage = 8;

    useEffect(() => {
        fetch("https://freelance-app-server-snowy.vercel.app/allJobs")
            .then(res => res.json())
            .then(data => {
                const sorted = data.sort(
                    (a, b) => new Date(b.postedAt) - new Date(a.postedAt)
                );
                setJobs(sorted);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    if (loading) {
        return <Skeleton />;
    }

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    return (
        <section className="bg-base-200 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">
                All Jobs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentJobs.map(job => (
                    <Card key={job._id} job={job} />
                ))}
            </div>

            <div className="flex justify-center mt-10 gap-2 flex-wrap">
                <button
                    className="btn btn-sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => prev - 1)}
                >
                    Prev
                </button>

                {[...Array(totalPages).keys()].map(num => (
                    <button
                        key={num}
                        onClick={() => setCurrentPage(num + 1)}
                        className={`btn btn-sm ${currentPage === num + 1
                                ? "btn-neutral text-white"
                                : "btn-outline"
                            }`}
                    >
                        {num + 1}
                    </button>
                ))}

                <button
                    className="btn btn-sm"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => prev + 1)}
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default AllJobs;
