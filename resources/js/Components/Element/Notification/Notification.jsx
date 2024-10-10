import { useEffect, useState } from "react";
import NotificationBody from "./NotificationBody";
import NotificationButton from "./NotificationButton";
import NotificationItem from "./NotificationItem";

const Notification = () => {
    const [type, setType] = useState(null);

    const toggleTab = (tab) => {
        if (type !== tab) setType(tab);
    };

    useEffect(() => {
        setType("notifications");
    }, []);

    return (
        <div className="dropdown-menu shadow-md shadow-black/5 z-30 max-w-xs w-full bg-backend-base-100 rounded-md border border-gray-100">
            <div className="flex items-center px-4 pt-4 border-b border-b-gray-100 notification-tab">
                <NotificationButton
                    dataTab="notification"
                    dataTabPage="notifications"
                    active={type === "notifications"}
                    onClick={() => toggleTab("notifications")}
                >
                    Notifications
                </NotificationButton>
                <NotificationButton
                    dataTab="message"
                    dataTabPage="messages"
                    active={type === "messages"}
                    onClick={() => toggleTab("messages")}
                >
                    Messages
                </NotificationButton>
            </div>
            <div className="my-2">
                {type === "notifications" && (
                    <NotificationBody
                        dataTab="notification"
                        dataTabPage="notifications"
                    >
                        <NotificationItem
                            icon="https://placehold.co/32x32"
                            to="#"
                            titleText="New order"
                            childrenText="from a user"
                        />
                    </NotificationBody>
                )}

                {type === "messages" && (
                    <NotificationBody dataTab="message" dataTabPage="messages">
                        <NotificationItem
                            icon="https://placehold.co/32x32"
                            to="#"
                            titleText="John Doe"
                            childrenText="Hello there!"
                        />
                    </NotificationBody>
                )}
            </div>
        </div>
    );
};

export default Notification;
