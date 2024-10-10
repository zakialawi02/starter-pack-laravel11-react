import AuthLayout from "@/Layouts/AuthLayout";
import ApplicationLogo from "@/Components/Element/ApplicationLogo/ApplicationLogo";
import TextInputGroup from "@/Components/Element/Input/TextInputGroup";
import ButtonBE from "@/Components/Element/Button/ButtonBE";
import InputError from "@/Components/Element/Input/InputError";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        username: "",
        email: "",
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
        // alert("register");
        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />

            <AuthLayout>
                <div className="mb-3 text-center">
                    <ApplicationLogo></ApplicationLogo>
                    <h3 className="text-xl">Register account</h3>
                    <p className="text-backend-muted">
                        Get your free access account now.
                    </p>
                </div>

                <div className="mb-3">
                    <form onSubmit={handleSubmit}>
                        <TextInputGroup
                            id="name"
                            name="name"
                            icon="fa-regular fa-user"
                            label="Name"
                            type="text"
                            value={data.name}
                            placeholder="Enter your name"
                            isFocused="true"
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mb-3" />

                        <div className="flex gap-2">
                            <div className="w-1/2">
                                <TextInputGroup
                                    id="username"
                                    name="username"
                                    icon="fa-regular fa-user"
                                    label="Username"
                                    type="text"
                                    value={data.username}
                                    placeholder="Enter your username"
                                    onChange={(e) =>
                                        setData("username", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.username}
                                    className="mb-3"
                                />
                            </div>

                            <div className="w-1/2">
                                <TextInputGroup
                                    id="email"
                                    name="email"
                                    icon="fa-solid fa-envelope"
                                    label="Email"
                                    type="email"
                                    value={data.email}
                                    placeholder="Enter your email"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.email}
                                    className="mb-3"
                                />
                            </div>
                        </div>

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
                                Register
                            </ButtonBE>
                        </div>
                    </form>

                    <div className="p-1 mt-4 text-center">
                        <div className="mt-2">
                            By registering you agree to the
                            <Link
                                preserveState
                                href="#"
                                className="ml-1 text-backend-primary hover:text-backend-secondary"
                            >
                                Terms of Use
                            </Link>
                        </div>
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
                    </div>
                </div>
            </AuthLayout>
        </>
    );
};

export default Register;
