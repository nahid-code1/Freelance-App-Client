import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import Skeleton from "../UI/Skeleton";

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sortBy, setSortBy] = useState("recent");

    const jobsPerPage = 8;

    useEffect(() => {
        fetch("https://freelance-app-server-snowy.vercel.app/allJobs")
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        let updatedJobs = [...jobs];

        if (search) {
            updatedJobs = updatedJobs.filter(job =>
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.summary.toLowerCase().includes(search.toLowerCase()) ||
                job.category.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category !== "all") {
            updatedJobs = updatedJobs.filter(job => job.category === category);
        }

        if (sortBy === "recent") {
            updatedJobs.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
        }

        setFilteredJobs(updatedJobs);
        setCurrentPage(1);
    }, [search, category, sortBy, jobs]);

    if (loading) {
        return <Skeleton />;
    }

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

    const uniqueCategories = [...new Set(jobs.map(job => job.category))];

    return (
        <section className="bg-base-200 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">All Jobs</h2>

            <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
                <input
                    type="text"
                    placeholder="Search jobs..."
                    className="input input-bordered w-full md:w-1/3"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="select select-bordered w-full md:w-1/4"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="all">All Categories</option>
                    {uniqueCategories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>

                <select
                    className="select select-bordered w-full md:w-1/4"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="recent">Most Recent</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentJobs.map(job => (
                    <Card key={job._id} job={job} />
                ))}
            </div>

            {totalPages > 1 && (
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
            )}
        </section>
    );
};

export default AllJobs;
