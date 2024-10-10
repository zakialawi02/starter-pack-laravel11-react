import { Link } from "@inertiajs/react";

const DropdownItem = ({
    icon = "",
    text = "...",
    to = "#",
    method = "get",
    className = "",
}) => {
    return (
        <li>
            <Link
                href={to}
                className={`flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-backend-secondary hover:bg-gray-50 ${className}`}
                method={method}
            >
                {icon && <i className={`${icon} mr-3`}></i>}
                {text}
            </Link>
        </li>
    );
};

export default DropdownItem;
