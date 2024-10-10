const NotificationBody = ({ dataTab, dataTabPage, hidden, children }) => {
    const noData = () => {
        return (
            <li
                className={`py-2 px-4 flex justify-center items-center text-gray-400 font-medium text-[13px] pb-1`}
            >
                No data
            </li>
        );
    };

    return (
        <ul
            className={`max-h-64 overflow-y-auto ${hidden ? "hidden" : ""}`}
            data-tab-for={dataTab}
            data-page={dataTabPage}
        >
            {children ? children : noData()}
        </ul>
    );
};

export default NotificationBody;
