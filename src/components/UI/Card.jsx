import { Link } from "react-router-dom";
import Button from "./Button";

const Card = ({ job }) => {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full">

            {/* Image */}
            <img
                src={job.coverImage}
                alt={job.title}
                className="h-44 w-full object-cover rounded-t-xl"
            />

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-1">

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {job.title}
                </h3>

                {/* Category / Meta */}
                <p className="text-sm text-gray-600 mt-1">
                    {job.category}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-700 mt-2 line-clamp-3 flex-1">
                    {job.description}
                </p>

                {/* Extra Meta Info */}
                <div className="mt-2 text-xs text-gray-600">
                    <p className="my-1">{job.summary}</p>
                    <p className="my-2">Job offer by: {job.postedBy}</p>
                </div>

                {/* Button */}
                <Button><Link
                    to={`/allJobs/${job._id}`}
                >
                    View Details
                </Link></Button>

            </div>
        </div>
    );
};

export default Card;
