const TableHeading = ({
    width = "",
    name,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChanged = () => {},
    children,
}) => {
    return (
        <th onClick={(e) => sortChanged(name)}>
            <div
                className={`flex items-center justify-between gap-1 px-3 py-3 ${width} ${
                    sortable ? "cursor-pointer hover:bg-gray-100" : ""
                }`}
            >
                {children}
                {sortable && (
                    <div className="px-2 -m-1">
                        <i
                            className={`block ri-arrow-up-s-line ${
                                sort_field === name && sort_direction === "asc"
                                    ? "text-backend-primary"
                                    : ""
                            }`}
                        ></i>
                        <i
                            className={`block ri-arrow-down-s-line ${
                                sort_field === name && sort_direction === "desc"
                                    ? "text-backend-secondary"
                                    : ""
                            }`}
                        ></i>
                    </div>
                )}
            </div>
        </th>
    );
};

export default TableHeading;
