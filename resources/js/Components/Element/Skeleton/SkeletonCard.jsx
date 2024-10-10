const SkeletonCard = ({ reapeat = 2, children, className = "" }) => {
    return (
        <div
            className={`w-full bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md ${className}`}
        >
            <div className="flex space-x-4 animate-skeleton">
                <div className="flex-1 py-1 space-y-4">
                    <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
                    <div className="space-y-2">
                        {[...Array(reapeat)].map((_, index) => (
                            <>
                                <div
                                    key={index}
                                    className="h-4 bg-gray-300 rounded"
                                ></div>
                            </>
                        ))}
                    </div>
                </div>
            </div>

            {children}
        </div>
    );
};

export default SkeletonCard;
