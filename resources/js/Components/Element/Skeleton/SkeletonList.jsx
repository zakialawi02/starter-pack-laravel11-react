const SkeletonList = () => {
    return (
        <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="w-full p-2">
                    <div className="flex space-x-2 animate-skeleton">
                        <div className="flex-1 py-1 space-y-2">
                            <div className="h-6 bg-gray-300 rounded"></div>
                            <div className="w-11/12 h-4 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkeletonList;
