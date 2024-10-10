const InputError = ({ message, className = "", ...props }) => {
    return message ? (
        <p {...props} className={`text-sm text-backend-error ${className}`}>
            {message}
        </p>
    ) : null;
};

export default InputError;
