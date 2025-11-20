import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import Swal from 'sweetalert2';

const MyAddedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useContext(AuthContext);

    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/allJobs?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setJobs(data);
                });
        }
    }, [user?.email]);

    const handleDeleteJob = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/allJobs/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your job has been deleted.",
                                icon: "success"
                            });
                            const remainingJobs = jobs.filter(job => job._id !== _id)
                            setJobs(remainingJobs)
                        }
                    })
            }
        });
    }

    const handleUpdateJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedJob = {
            title: form.title.value,
            category: form.category.value,
            summary: form.summary.value,
            coverImage: form.coverImage.value
        }

        fetch(`http://localhost:3000/allJobs/${selectedJob._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Job updated successfully.",
                        icon: "success"
                    });

                    const refreshed = jobs.map(j =>
                        j._id === selectedJob._id ? { ...j, ...updatedJob } : j
                    )
                    setJobs(refreshed)

                }
            })
    }

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-neutral">
                My Added Jobs
            </h2>

            {jobs.length === 0 ? (
                <p className="text-center text-gray-500 mt-10">
                    You haven't added any jobs yet.
                </p>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {jobs.map(job => (
                        <div
                            key={job._id}
                            className="card bg-base-100 shadow-xl border border-gray-200"
                        >
                            <figure className="h-40 overflow-hidden">
                                <img
                                    src={job.coverImage}
                                    alt={job.title}
                                    className="w-full h-full object-cover"
                                />
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title">{job.title}</h2>

                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">Category:</span> {job.category}
                                </p>

                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">Posted By:</span> {job.postedBy}
                                </p>

                                <p className="text-gray-700 text-sm mt-2">
                                    {job.summary.slice(0, 70)}...
                                </p>

                                <div className="card-actions justify-between mt-4">
                                    <button
                                        onClick={() => setSelectedJob(job)}
                                        className="btn btn-sm btn-neutral"
                                    >
                                        Update
                                    </button>

                                    <button
                                        onClick={() => handleDeleteJob(job._id)}
                                        className="btn btn-sm btn-neutral text-white"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {selectedJob && (
                <>
                    <dialog id="update_modal" className="modal modal-open">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg mb-3">Update Job</h3>

                            <form onSubmit={handleUpdateJob} className="space-y-3">

                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={selectedJob.title}
                                    className="input input-bordered w-full"
                                    required
                                />

                                <select
                                    name="category"
                                    defaultValue={selectedJob.category}
                                    className="select select-bordered w-full"
                                    required
                                >
                                    <option>Web Development</option>
                                    <option>Digital Marketing</option>
                                    <option>Graphics Design</option>
                                    <option>SEO Optimization</option>
                                    <option>App Development</option>
                                    <option>Content Writing</option>
                                </select>

                                <textarea
                                    name="summary"
                                    defaultValue={selectedJob.summary}
                                    className="textarea textarea-bordered w-full"
                                    required
                                ></textarea>

                                <input
                                    type="text"
                                    name="coverImage"
                                    defaultValue={selectedJob.coverImage}
                                    className="input input-bordered w-full"
                                    required
                                />

                                <button type="submit" className="btn btn-neutral w-full">
                                    Update Job
                                </button>
                            </form>

                            <div className="modal-action">
                                <button
                                    className="btn"
                                    onClick={() => setSelectedJob(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </dialog>
                </>
            )}
        </div>
    );
};

export default MyAddedJobs;
