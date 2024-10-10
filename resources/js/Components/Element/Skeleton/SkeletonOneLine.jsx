const SkeletonOneLine = ({ height = 4 }) => {
    return (
        <div className="flex space-x-4 animate-skeleton">
            <div className="flex-1 py-1 space-y-4">
                <div className={`w-full h-${height} bg-gray-300 rounded`}></div>
            </div>
        </div>
    );
};

export default SkeletonOneLine;
