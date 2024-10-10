import { Head, Link, useForm } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";
import TextInputGroup from "@/Components/Element/Input/TextInputGroup";
import ButtonBE from "@/Components/Element/Button/ButtonBE";
import InputError from "@/Components/Element/Input/InputError";
import ApplicationLogo from "@/Components/Element/ApplicationLogo/ApplicationLogo";

const ForgotPassword = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert("forgot password");
        post(route("password.email"));
    };
    return (
        <>
            <Head title="Forgot Password" />

            <AuthLayout>
                <div className="mb-3 text-center">
                    <ApplicationLogo></ApplicationLogo>
                    <h3 className="text-xl">Forgot Password</h3>
                    <p className="text-backend-muted">Reset your password.</p>
                </div>

                <div className="p-2 mb-4 bg-opacity-50 rounded-md bg-backend-success">
                    <p className="text-backend-dark">
                        Enter your Email and instructions will be sent to you!
                    </p>
                </div>

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

                    <div className="text-center">
                        <ButtonBE
                            className="px-6 py-3 mt-4"
                            color={"bg-backend-primary"}
                            disabled={processing}
                        >
                            Reset
                        </ButtonBE>
                    </div>
                </form>

                <div className="p-1 mt-4 text-center">
                    <div className="mt-2">
                        Already have an account?
                        <Link
                            preserveState
                            href={route("login")}
                            className="ml-1 text-backend-primary hover:text-backend-secondary"
                        >
                            Login
                        </Link>
                    </div>

                    <div className="mt-2">
                        Don't have an account?
                        <Link
                            preserveState
                            href={route("register")}
                            className="ml-1 text-backend-primary hover:text-backend-secondary"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
};

export default ForgotPassword;
