const ButtonBE = ({
    className = "",
    color,
    disabled = false,
    children,
    ...props
}) => {
    color = color ? color : "bg-backend-primary";

    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 ${color} border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest  hover:bg-backend-primary/80 focus:bg-backend-secondary focus:outline-none focus:ring-2 focus:${color} focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && "opacity-50"
                } ` + className
            }
            disabled={disabled}
        >
            {children ? children : "Button"}
        </button>
    );
};

export default ButtonBE;
