import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Skeleton from "../UI/Skeleton";

const LatestJob = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const latestJobPromise = fetch("https://freelance-app-server-snowy.vercel.app/latestJobs")
            .then(res => res.json())
            .then((data) => {
                setJobs(data);
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching jobs:", err));
    }, []);

    if (loading) {
        return <Skeleton></Skeleton>
    }
    // 
    return (
        <section className="bg-base-200 p-8 rounded-lg mt-4">
            <h2 className="text-2xl font-bold text-center mb-6">Latest Jobs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {jobs.map((job) => (
                    <Card key={job._id} job={job}></Card>
                ))}

            </div>
            <Button className="mt-6"><NavLink to={"/allJobs"}>View All Jobs</NavLink></Button>
        </section>
    );
};

export default LatestJob;
