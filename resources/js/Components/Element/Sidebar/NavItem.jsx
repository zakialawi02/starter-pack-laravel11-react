import { Link, usePage } from "@inertiajs/react";

const NavItem = ({ to = "#", children }) => {
    const { url } = usePage();
    const isActive = url.split("?")[0] === to;

    return (
        <li
            className={` mb-1 py-2 px-1 rounded-lg group ${
                isActive ? "active" : ""
            }`}
        >
            <Link
                preserveState
                href={to}
                className={`text-backend-base-100 text-sm flex items-center hover:text-backend-neutral before:contents-[''] before:w-1 group-[.active]:text-gray-500`}
            >
                {children}
            </Link>
        </li>
    );
};

export default NavItem;
