import { useEffect, useRef } from "react";

const TextInput = ({
    id = "",
    icon,
    type = "text",
    label = "...",
    isFocused = false,
    ...props
}) => {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);
    return (
        <>
            <div className="relative mb-3">
                <i
                    className={`${icon} absolute top-1/2 transform -translate-y-1/2 left-4 text-[24px] text-backend-primary`}
                ></i>

                <label
                    htmlFor={id}
                    className="absolute top-2 left-14 text-backend-dark"
                >
                    {label}
                </label>

                <input
                    id={id}
                    {...props}
                    type={type}
                    className={`w-full h-16 p-1 pl-14 pt-7 rounded-md`}
                    ref={input}
                />
            </div>
        </>
    );
};

export default TextInput;
