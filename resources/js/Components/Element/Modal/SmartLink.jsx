import { Link } from "@inertiajs/react";

const SmartLink = ({ href, children, ...props }) => {
    const isExternal =
        href.startsWith("http") && !href.includes(window.location.origin);
    if (isExternal) {
        return (
            <a href={href} rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    }
    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};
export default SmartLink;
