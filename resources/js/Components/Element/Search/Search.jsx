const Search = ({ className = "" }) => {
    className = className
        ? className
        : "py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-backend-primary focus:ring-backend-primary";

    return (
        <form action="" className="p-4">
            <div className="relative w-full">
                <input
                    type="text"
                    className={`${className}`}
                    placeholder="Search..."
                />
                <i className="absolute text-gray-400 -translate-y-1/2 ri-search-line top-1/2 left-4" />
            </div>
        </form>
    );
};

export default Search;
