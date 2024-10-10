import AuthLayout from "@/Layouts/AuthLayout";
import ApplicationLogo from "@/Components/Element/ApplicationLogo/ApplicationLogo";
import InputError from "@/Components/Element/Input/InputError";
import TextInputGroup from "@/Components/Element/Input/TextInputGroup";
import ButtonBE from "@/Components/Element/Button/ButtonBE";
import Checkbox from "@/Components/Element/Checkbox/Checkbox";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

const Login = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        id_user: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert("login");
        post(route("login"));
    };

    return (
        <>
            <Head title="Login" />

            <AuthLayout>
                <div className="mb-3 text-center">
                    <ApplicationLogo></ApplicationLogo>
                    <h3 className="text-xl">Welcome back !</h3>
                    <p className="text-backend-muted">
                        Sign in to your account
                    </p>
                </div>

                <div className="mb-3">
                    <form onSubmit={handleSubmit}>
                        <TextInputGroup
                            id="id_user"
                            name="id_user"
                            icon="fa-regular fa-user"
                            label="Email/Username"
                            type="text"
                            value={data.id_user}
                            placeholder="Email/Username"
                            onChange={(e) => setData("id_user", e.target.value)}
                            autoComplete="username"
                            isFocused="true"
                        />
                        <InputError message={errors.id_user} className="mb-2" />

                        <TextInputGroup
                            id="password"
                            name="password"
                            icon="fa-solid fa-lock"
                            label="Password"
                            type="password"
                            value={data.password}
                            placeholder="Password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.password}
                            className="mb-2"
                        />

                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="text-sm text-gray-600 ms-2">
                                Remember me
                            </span>
                        </label>

                        <div className="text-center">
                            <ButtonBE
                                className="px-6 py-3 mt-4"
                                color={"bg-backend-primary"}
                                disabled={processing}
                            >
                                Login
                            </ButtonBE>
                        </div>
                    </form>

                    <div className="p-1 mt-4 text-center">
                        <div className="ml-1 text-backend-muted hover:underline">
                            <Link
                                preserveState
                                href={route("password.request")}
                            >
                                Forgot your password?
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
                </div>
            </AuthLayout>
        </>
    );
};

export default Login;
