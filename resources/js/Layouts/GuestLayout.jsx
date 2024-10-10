import Footer from "@/Components/Fragment/Footer";
import HeaderBlog from "@/Components/Fragment/HeaderBlog";

const GuestLayout = ({ className = "", children }) => {
    className = className ? className : "w-full";

    return (
        <>
            <div className="font-Lato bg-frontend-base-100">
                <HeaderBlog />

                <main className={className}>{children}</main>

                <Footer />
            </div>
        </>
    );
};

export default GuestLayout;
