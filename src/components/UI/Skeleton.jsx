const Skeleton = () => {
    return (
        <div className="bg-white rounded-xl shadow p-4 animate-pulse">
            <div className="h-40 bg-gray-300 rounded mb-4"></div>

            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>

            <div className="h-9 bg-gray-300 rounded"></div>
        </div>
    );
};

export default Skeleton;
