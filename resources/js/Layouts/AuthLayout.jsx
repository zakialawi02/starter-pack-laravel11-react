import { Link } from "@inertiajs/react";

const AuthLayout = ({ children }) => {
    return (
        <>
            <div className="relative flex items-center justify-center min-h-screen bg-gray-400 ">
                <Link
                    preserveState
                    href="/"
                    className="absolute m-2 text-xl top-1 right-1 md:top-3 md:right-3 text-backend-light hover:text-backend-primary"
                >
                    <i className="fa-solid fa-house"></i>
                </Link>

                <div className="mx-10 p-4 rounded-md bg-backend-light min-w-80 max-w-[30rem] text-backend-dark">
                    {children}
                </div>
            </div>
        </>
    );
};

export default AuthLayout;
