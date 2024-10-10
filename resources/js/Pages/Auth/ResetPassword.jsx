import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import ApplicationLogo from "@/Components/Element/ApplicationLogo/ApplicationLogo";
import AuthLayout from "@/Layouts/AuthLayout";
import InputError from "@/Components/Element/Input/InputError";
import TextInputGroup from "@/Components/Element/Input/TextInputGroup";
import ButtonBE from "@/Components/Element/Button/ButtonBE";

const ResetPassword = ({ token, email }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert("reset password");
        post(route("password.store"));
    };
    return (
        <>
            <Head title="Reset Password" />

            <AuthLayout>
                <div className="mb-3 text-center">
                    <ApplicationLogo></ApplicationLogo>
                    <h3 className="text-xl">Reset Password</h3>
                    <p className="text-backend-muted">Reset your password.</p>
                </div>

                <div className="mb-3">
                    <form onSubmit={handleSubmit}>
                        <TextInputGroup
                            id="email"
                            name="email"
                            icon="fa-solid fa-envelope"
                            label="Email"
                            type="email"
                            value={data.email}
                            placeholder="Enter your email"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="mb-3" />

                        <TextInputGroup
                            id="password"
                            name="password"
                            icon="fa-solid fa-lock"
                            label="Password"
                            type="password"
                            value={data.password}
                            placeholder="Enter your password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.password}
                            className="mb-3"
                        />

                        <TextInputGroup
                            id="password_confirmation"
                            name="password_confirmation"
                            icon="fa-solid fa-lock"
                            label="Confirm Password"
                            type="password"
                            value={data.password_confirmation}
                            placeholder="Enter your confirm password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mb-3"
                        />

                        <div className="text-center">
                            <ButtonBE
                                className="px-6 py-3 mt-4"
                                color={"bg-backend-primary"}
                                disabled={processing}
                            >
                                Reset Password
                            </ButtonBE>
                        </div>
                    </form>

                    <div className="p-1 mt-4 text-center">
                        <div className="mt-2">
                            Already have an account?
                            <Link
                                preserveState
                                href={route("login")}
                                className="text-backend-primary hover:text-backend-secondary"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
};

export default ResetPassword;
