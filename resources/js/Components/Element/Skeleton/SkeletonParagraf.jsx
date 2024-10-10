const SkeletonParagraf = () => {
    return (
        <div className="flex space-x-4 animate-skeleton">
            <div className="flex-1 py-1 space-y-4">
                <div className="w-full h-4 bg-gray-300 rounded"></div>
                <div className="w-5/6 h-4 bg-gray-300 rounded"></div>
                <div className="w-11/12 h-4 bg-gray-300 rounded"></div>
                <div className="w-full h-4 bg-gray-300 rounded"></div>
                <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
            </div>
        </div>
    );
};

export default SkeletonParagraf;
