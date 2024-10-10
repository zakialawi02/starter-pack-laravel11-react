import React from "react";
import { Link, usePage } from "@inertiajs/react";

const NavMenu = ({
    icon = "",
    text = "...",
    to = "#",
    onClick,
    selected = false,
    children,
}) => {
    const { url } = usePage();

    // Cek apakah salah satu anak aktif
    const isSelected = React.Children.toArray(children).some(
        (child) => React.isValidElement(child) && child.props.to === url
    );

    // Menentukan apakah menu ini aktif
    const isActive = url.split("?")[0] === to || isSelected;

    const singleMenu = () => {
        return (
            <li className={`mb-1 group ${isActive ? "active" : ""}`}>
                <Link
                    preserveState
                    replace
                    href={to}
                    className="flex items-center py-2 px-4 text-backend-base-100 hover:bg-gray-900 hover:text-backend-neutral rounded-md group-[.active]:bg-gray-700 group-[.active]:text-backend-neutral group-[.selected]:bg-gray-900 group-[.selected]:text-gray-100"
                >
                    <i className={`${icon} mr-3 text-lg`} />
                    <span className="text-sm">{text}</span>
                </Link>
            </li>
        );
    };

    const dropdownMenu = () => {
        return (
            <li
                className={`mb-1 group ${
                    selected || isActive ? "selected" : ""
                }`}
            >
                <a
                    href="#"
                    className="flex items-center py-2 px-4 text-backend-base-100 hover:bg-gray-900 hover:text-backend-neutral rounded-md group-[.active]:bg-gray-700 group-[.active]:text-backend-neutral group-[.selected]:bg-gray-900 group-[.selected]:text-backend-neutral sidebar-dropdown-toggle"
                    onClick={onClick}
                >
                    <i className={`${icon} mr-3 text-lg`} />
                    <span className="text-sm">{text}</span>
                    <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
                </a>
                <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                    {children}
                </ul>
            </li>
        );
    };

    return children ? dropdownMenu() : singleMenu();
};

export default NavMenu;
