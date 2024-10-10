import { useState } from "react";

const SearchPopup = ({ isSearchOpen = false, toggleSearch }) => {
    const [search, setSearch] = useState("");

    if (!isSearchOpen) {
        return null;
    }

    return (
        <>
            <div className="fixed top-0 left-0 z-[100] w-full h-screen bg-black/90 backdrop-blur-md">
                <div className="absolute top-0 right-0 p-4">
                    <button
                        type="button"
                        className="text-2xl text-white hover:text-frontend-primary"
                        onClick={toggleSearch}
                    >
                        <i className="ri-close-circle-line"></i>
                    </button>
                </div>

                <div className="absolute w-11/12 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:w-2/3 lg:w-1/2">
                    <div className="p-4 rounded-lg shadow-xl">
                        <form
                            action={`/blog?search=${search}`}
                            id="search-blog"
                        >
                            <div className="flex items-center px-1 overflow-hidden bg-white rounded-md shadow ">
                                <input
                                    type="search"
                                    placeholder="Search"
                                    className="px-3 py-3.5 text-frontend-dark w-full text-base border-0 ring-0 bg-frontend-light outline-none focus:ring-0"
                                    id="search"
                                    name="search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="px-3 py-2 font-semibold transition-all duration-500 rounded text-frontend-light bg-frontend-secondary hover:bg-frontend-primary"
                                >
                                    <i className="ri-search-line"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchPopup;
