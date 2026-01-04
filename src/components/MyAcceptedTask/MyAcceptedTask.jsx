import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";

const MyAcceptedTask = () => {
    const [tasks, setTasks] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://freelance-app-server-snowy.vercel.app/acceptedJobs`)
                .then(res => res.json())
                .then(data => {
                    const userTasks = data.filter(t => t.email === user.email);
                    setTasks(userTasks);
                });
        }
    }, [user?.email]);

    const handleRemove = (id) => {
        fetch(`https://freelance-app-server-snowy.vercel.app/acceptedJobs/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remaining = tasks.filter(t => t._id !== id);
                    setTasks(remaining);

                    Swal.fire({
                        icon: "success",
                        title: "Removed",
                        text: "Task removed successfully!",
                    });
                }
            });
    };

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-neutral">
                My Accepted Tasks
            </h2>

            {tasks.length === 0 ? (
                <p className="text-center text-gray-500 mt-10">
                    You haven't accepted any tasks yet.
                </p>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {tasks.map(task => (
                        <div
                            key={task._id}
                            className="card bg-base-100 shadow-xl border border-gray-200"
                        >
                            <figure className="h-40 overflow-hidden">
                                <img
                                    src={task.coverImage}
                                    alt={task.title}
                                    className="w-full h-full object-cover"
                                />
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title">{task.title}</h2>

                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">Category:</span> {task.category}
                                </p>

                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">Posted By:</span> {task.postedBy}
                                </p>

                                <p className="text-gray-700 text-sm mt-2">
                                    {task.summary.slice(0, 70)}...
                                </p>

                                <div className="card-actions justify-between mt-4">
                                    <button
                                        className="btn btn-sm btn-success"
                                        onClick={() => handleRemove(task._id)}
                                    >
                                        Done
                                    </button>

                                    <button
                                        className="btn btn-sm btn-error"
                                        onClick={() => handleRemove(task._id)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyAcceptedTask;
