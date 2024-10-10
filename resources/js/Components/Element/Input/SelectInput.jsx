const SelectInput = ({ className = "", children, ...props }) => {
    return (
        <select
            {...props}
            className={
                "w-full border-gray-300 focus:border-backend-primary focus:ring-backend-primary rounded-md shadow-sm " +
                className
            }
        >
            {children}
        </select>
    );
};

export default SelectInput;
