import { Link } from "@inertiajs/react";

const ApplicationLogo = ({ className = "" }) => {
    return (
        <Link preserveState href="/" className={className}>
            <img
                src="https://laravel.com/img/notification-logo.png"
                alt="App Logo"
                className="w-auto h-12 mx-auto"
            />
        </Link>
    );
};

export default ApplicationLogo;
