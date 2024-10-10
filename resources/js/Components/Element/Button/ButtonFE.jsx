const ButtonFE = ({
    className = "",
    color,
    icon = "",
    disabled = false,
    children,
    ...props
}) => {
    color = color ? color : "bg-frontend-primary";

    return (
        <button
            {...props}
            className={
                `px-4 py-2 font-semibold text-white rounded-lg ${color} hover:bg-frontend-primary/75 ${
                    disabled && "opacity-50"
                } ` + className
            }
            disabled={disabled}
        >
            {icon && <i className={icon}></i>} {children ? children : "Button"}
        </button>
    );
};

export default ButtonFE;
