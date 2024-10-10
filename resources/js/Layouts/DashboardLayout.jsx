import "../../css/dashboard.css";
import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import SidebarAdmin from "@/Components/Fragment/SidebarAdmin";
import HeaderAdmin from "@/Components/Fragment/HeaderAdmin";

const DashboardLayout = ({ user, metaTitle = "", children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(
        window.innerWidth >= 768
    );

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <Head>
                <title>{`${metaTitle} • Dashboard`}</title>
            </Head>

            <div className="font-Lato bg-backend-light">
                <SidebarAdmin
                    show={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                />

                <div
                    className={`w-full md:w-[calc(100%-256px)] text-backend-dark md:ml-64  min-h-screen transition-all main ${
                        isSidebarOpen ? "" : "active"
                    }`}
                >
                    <HeaderAdmin toggleSidebar={toggleSidebar} user={user} />

                    <main className="p-4 space-y-4">{children}</main>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
