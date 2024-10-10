import { useState, useEffect, useRef } from "react";
import { Link, usePage } from "@inertiajs/react";
import DropdownMenu from "../Element/Dropdown/DropdownMenu";
import Search from "../Element/Search/Search";
import Notification from "../Element/Notification/Notification";
import DropdownItem from "../Element/Dropdown/DropdownItem";

const HeaderAdmin = ({ user, toggleSidebar }) => {
    const { auth } = usePage().props;
    const pathname = window.location.pathname;
    const url2 = pathname
        .split("/")[2]
        ?.split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
        .trim();
    const url3 = pathname
        .split("/")[3]
        ?.split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
        .trim();

    const [isOpenDropdownUser, setIsOpenDropdownUser] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isOpenNotification, setIsOpenNotification] = useState(false);

    const dropdownUserRef = useRef(null);
    const searchRef = useRef(null);
    const notificationRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            dropdownUserRef.current &&
            !dropdownUserRef.current.contains(event.target)
        ) {
            setIsOpenDropdownUser(false);
        }
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setIsOpenSearch(false);
        }
        if (
            notificationRef.current &&
            !notificationRef.current.contains(event.target)
        ) {
            setIsOpenNotification(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="sticky top-0 left-0 z-30 flex items-center px-6 py-2 shadow-md bg-backend-base-100 shadow-black/5">
            <button
                type="button"
                className="w-8 h-8 text-lg text-backend-dark hover:bg-gray-200 hover:text-backend-accent sidebar-toggle"
                onClick={() => toggleSidebar()}
            >
                <i className="ri-menu-line" />
            </button>
            <ul className="flex items-center ml-4 text-sm">
                <li className="mr-1">
                    <Link
                        preserveState
                        href="/dashboard"
                        className="font-medium text-backend-muted hover:text-backend-accent"
                    >
                        Dashboard
                    </Link>
                </li>
                <li className="mr-1 font-medium text-backend-dark">
                    {url2 && "/"}
                </li>
                <li className="mr-1 font-medium truncate text-backend-dark max-w-20 sm:max-w-40">
                    {url2}
                </li>
                <li className="mr-1 font-medium text-backend-dark">
                    {url3 && "/"}
                </li>
                <li className="mr-1 font-medium truncate max-w-20 sm:max-w-40 text-backend-dark">
                    {url3}
                </li>
            </ul>
            <ul className="flex items-center ml-auto">
                <li className="mr-1 dropdown" ref={searchRef}>
                    <button
                        type="button"
                        className="flex items-center justify-center w-8 h-8 rounded text-backend-dark dropdown-toggle hover:bg-gray-200 hover:text-backend-accent"
                        onClick={() => setIsOpenSearch(!isOpenSearch)}
                    >
                        <i className="ri-search-line" />
                    </button>
                    {isOpenSearch && (
                        <DropdownMenu className="shadow-md shadow-black/5 py-1.5 rounded-md bg-backend-base-100 border border-gray-100">
                            <Search />
                        </DropdownMenu>
                    )}
                </li>
                <li className="dropdown" ref={notificationRef}>
                    <button
                        type="button"
                        className="flex items-center justify-center w-8 h-8 rounded text-backend-dark dropdown-toggle hover:bg-gray-200 hover:text-backend-accent"
                        onClick={() =>
                            setIsOpenNotification(!isOpenNotification)
                        }
                    >
                        <i className="ri-notification-3-line" />
                    </button>
                    {isOpenNotification && <Notification />}
                </li>
                <li className="ml-3 dropdown" ref={dropdownUserRef}>
                    <button
                        type="button"
                        className="flex items-center dropdown-toggle"
                        onClick={() =>
                            setIsOpenDropdownUser(!isOpenDropdownUser)
                        }
                    >
                        <img
                            src={auth.user.profile_photo_path}
                            alt="Profile"
                            className="block object-cover w-8 h-8 align-middle rounded"
                            onError={(e) => {
                                e.target.src = "https://placehold.co/32x32";
                            }}
                        />
                    </button>
                    {isOpenDropdownUser && (
                        <DropdownMenu>
                            <div className="text-[13px] py-1.5 px-4 text-gray-600">
                                <p>{user.email}</p>
                                <p>{user.username}</p>
                            </div>
                            <hr />
                            <DropdownItem
                                icon="ri-user-line"
                                text="Profile"
                                to={route("admin.profile.edit")}
                            />
                            <DropdownItem
                                icon="ri-logout-box-line"
                                text="Logout"
                                to={route("logout")}
                                method="post"
                                as="button"
                            />
                        </DropdownMenu>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default HeaderAdmin;
