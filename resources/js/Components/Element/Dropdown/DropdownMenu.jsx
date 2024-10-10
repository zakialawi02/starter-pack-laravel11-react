const DropdownMenu = ({ className = "", children }) => {
    className = className
        ? className
        : "shadow-md shadow-black/5 py-1.5 rounded-md bg-white border border-gray-100 max-w-[200px] truncate";

    return (
        <ul className={`dropdown-menu z-30 pr-3 ${className}`}>{children}</ul>
    );
};

export default DropdownMenu;
