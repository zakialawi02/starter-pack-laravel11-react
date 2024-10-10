import { Children } from "react";

const Card = ({ children, className = "", ...props }) => {
    return (
        <div
            {...props}
            className={`bg-backend-base-100 border border-gray-100 shadow-md shadow-black/5 p-4 rounded-md ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
