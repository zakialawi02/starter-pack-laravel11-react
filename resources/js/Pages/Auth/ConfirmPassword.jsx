import { Head, Link, useForm } from "@inertiajs/react";
import ButtonBE from "@/Components/Element/Button/ButtonBE";

const ConfirmPassword = ({ status }) => {
    const { post, processing } = useForm({});

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    const handleLogout = (e) => {
        e.preventDefault();
        // alert("logout");
        post(route("logout"));
    };

    return (
        <>
            <Head title="Secure Page" />

            <div className="relative flex items-center justify-center min-h-screen bg-gray-400 ">
                <div className="p-4 rounded-md bg-backend-light min-w-80 mx-10 max-w-[30rem] text-backend-dark">
                    {" "}
                    <div className="mb-3">
                        <p className="p-2 bg-opacity-50 rounded-sm text-backend-dark">
                            Thanks for signing up! Before getting started, could
                            you verify your email address by clicking on the
                            link we just emailed to you? If you didn't receive
                            the email, we will gladly send you another.
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mb-4 text-sm font-medium text-green-600">
                                A new verification link has been sent to the
                                email address you provided during registration.
                            </div>
                        )}

                        <div className="flex items-center justify-between mt-4">
                            <form onSubmit={handleSubmit}>
                                <ButtonBE
                                    className="px-6 py-3"
                                    color={"bg-backend-primary"}
                                    disabled={processing}
                                >
                                    Resend Email Verification
                                </ButtonBE>
                            </form>

                            <form onSubmit={handleLogout}>
                                <ButtonBE
                                    className="px-6 py-3"
                                    color={"bg-backend-error"}
                                    disabled={processing}
                                >
                                    Log Out
                                </ButtonBE>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmPassword;
