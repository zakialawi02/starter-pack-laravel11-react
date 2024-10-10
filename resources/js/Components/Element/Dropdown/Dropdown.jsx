import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

const Dropdown = ({ options = [], label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative group" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="p-2 uppercase duration-300 cursor-pointer hover:text-frontend-accent"
            >
                {label}
            </button>
            {isOpen && options && (
                <div className="absolute py-1 mt-2 bg-white rounded shadow-lg min-w-48 left-2">
                    <ul className="py-1">
                        {options.map((option, index) => (
                            <>
                                {option.extern ? (
                                    <li key={index}>
                                        <a
                                            href={option.link}
                                            className="block px-4 py-2 text-gray-800 hover:bg-frontend-base-100 hover:text-frontend-accent"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {option.label}
                                        </a>
                                    </li>
                                ) : (
                                    <li key={index}>
                                        <Link
                                            href={option.link}
                                            className="block px-4 py-2 text-gray-800 hover:bg-frontend-base-100 hover:text-frontend-accent"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {option.label}
                                        </Link>
                                    </li>
                                )}
                            </>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
