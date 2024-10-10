const SkeletonCardImage = ({ children, className = "" }) => {
    return (
        <div
            className={`max-w-64 bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md ${className}`}
        >
            <div className="space-y-4 animate-skeleton">
                <div className="w-full h-48 bg-gray-300 rounded-md"></div>
                <div className="space-y-2">
                    <div className="w-3/4 h-6 mx-auto bg-gray-300 rounded"></div>

                    {children}
                </div>
            </div>
        </div>
    );
};

export default SkeletonCardImage;
