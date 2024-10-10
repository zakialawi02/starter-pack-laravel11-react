import { Link } from "@inertiajs/react";

const NotificationItem = ({
    icon = "",
    to = "#",
    titleText = "",
    childrenText = "",
    children,
}) => {
    return (
        <li>
            <Link
                preserveState
                href={to}
                className="flex items-center px-4 py-2 hover:bg-gray-50 group"
            >
                <img
                    src={icon}
                    alt="avatar"
                    className="block object-cover w-8 h-8 align-middle rounded"
                />
                <div className="ml-2">
                    <div className="text-[13px] text-backend-muted font-medium truncate group-hover:text-backend-primary">
                        {titleText}
                    </div>
                    <div className="text-[11px] text-gray-400">
                        {childrenText}
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default NotificationItem;
