import { Link } from "@inertiajs/react";

const PaginationPost = ({ links, current, last }) => {
    if (links.length <= 1) return null;

    // Find the first and last active page links
    const firstActivePage = links.findIndex((link) => link.active);
    const lastActivePage = links
        .slice()
        .reverse()
        .findIndex((link) => link.active);
    const lastPageIndex = links.length - 1 - lastActivePage;

    const visibleLinks = links.slice(
        Math.max(firstActivePage - 4, 1),
        Math.min(lastPageIndex + 5, links.length - 1)
    );

    const renderPageNumbers = () => {
        return visibleLinks.map((link, index) => {
            if (link.url) {
                return (
                    <Link
                        preserveState
                        key={index}
                        href={link.url || ""}
                        className={`px-3 py-1 mx-1 text-sm font-medium rounded-md ${
                            link.active
                                ? "bg-frontend-accent text-white"
                                : "bg-frontend-light text-frontend-dark hover:bg-frontend-accent hover:text-frontend-light"
                        }`}
                    >
                        {link.label}
                    </Link>
                );
            } else {
                return (
                    <span
                        key={index}
                        className="px-3 py-1 mx-1 text-sm font-medium text-gray-500 rounded-md cursor-not-allowed bg-frontend-light"
                    >
                        {link.label}
                    </span>
                );
            }
        });
    };

    return (
        <div className="px-3 py-5 mt-4 space-y-5">
            <Link
                preserveState
                preserveScroll={links[0].url ? false : true}
                href={links[0].url ?? " "}
                as="button"
                className={`px-3 py-1 mx-1 text-sm font-medium rounded-md ${
                    links[0].url
                        ? "bg-frontend-light text-frontend-dark hover:bg-frontend-accent hover:text-frontend-light"
                        : "bg-frontend-light text-gray-500 cursor-not-allowed"
                }`}
                disabled={!links[0].url}
            >
                Previous
            </Link>

            {renderPageNumbers()}

            <Link
                preserveState
                preserveScroll={links[links.length - 1].url ? false : true}
                href={links[links.length - 1].url}
                as="button"
                className={`px-3 py-1 mx-1 text-sm font-medium rounded-md ${
                    links[links.length - 1].url
                        ? "bg-frontend-light text-frontend-dark hover:bg-frontend-accent hover:text-frontend-light"
                        : "bg-frontend-light text-gray-500 cursor-not-allowed"
                }`}
                disabled={!links[links.length - 1].url}
            >
                Next
            </Link>

            <div className="flex justify-end">
                <p className="text-sm text-frontend-muted">
                    Page {current} of {last}
                </p>
            </div>
        </div>
    );
};

export default PaginationPost;
