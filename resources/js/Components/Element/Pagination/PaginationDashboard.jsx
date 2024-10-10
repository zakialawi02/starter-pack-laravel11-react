import { Link } from "@inertiajs/react";

const PaginationDashboard = ({ links }) => {
    return (
        <nav className="mt-4 space-x-1 text-center">
            {links.map((link) => (
                <Link
                    preserveState
                    preserveScroll
                    href={link.url || ""}
                    key={link.label}
                    className={
                        "inline-block py-2 px-3 rounded-lg bg-backend-primary text-backend-light text-xs " +
                        (link.active ? "bg-backend-secondary " : " ") +
                        (!link.url
                            ? "bg-backend-primary/60 cursor-not-allowed "
                            : "hover:bg-backend-secondary ")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
};

export default PaginationDashboard;
