const NotificationButton = ({
    dataTab,
    dataTabPage,
    active = false,
    className = "",
    children,
    ...props
}) => {
    return (
        <button
            {...props}
            type="button"
            data-tab={dataTab}
            data-tab-page={dataTabPage}
            className={`text-backend-muted font-medium text-[13px] hover:text-backend-dark border-b-2 border-b-transparent mr-4 pb-1 ${className} ${
                active ? "active" : ""
            }`}
        >
            {children}
        </button>
    );
};

export default NotificationButton;
