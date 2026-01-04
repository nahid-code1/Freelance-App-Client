import JobPreviewCard from "../UI/JobPreviewCard";

const BannerRight = () => {
    return (
        <div className="w-full md:w-1/2 max-w-md space-y-4">

            <JobPreviewCard
                title="Frontend Developer"
                category="Web Development"
                budget="1200"
            />

            <JobPreviewCard
                title="UI/UX Designer"
                category="Design"
                budget="900"
            />

            <JobPreviewCard
                title="React Freelancer"
                category="JavaScript"
                budget="1500"
            />

        </div>
    );
};

export default BannerRight;
