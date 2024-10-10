import Card from "@/Components/Element/Card/Card";
import SkeletonCard from "@/Components/Element/Skeleton/SkeletonCard";
import DashboardLayout from "@/Layouts/DashboardLayout";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = ({ auth }) => {
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState([]);

    const getInfoDashboard = async () => {
        const res = await axios
            .get(route("admin.dashboard.getInfo"))
            .then((res) => {
                setInfo(res.data);
            })
            .catch((err) => {
                console.error(err);
                setInfo([]);
            });
    };

    const fetchData = async () => {
        getInfoDashboard()
            .then(() => setLoading(false))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <DashboardLayout user={auth.user}>
                <div className="p-1">
                    <h2 className="text-2xl">
                        Welcome {auth.user.name}, @{auth.user.username}
                    </h2>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-4">
                        {auth.user.role == "admin" && (
                            <>
                                <SkeletonCard reapeat="1" />
                                <SkeletonCard reapeat="1" />
                                <SkeletonCard reapeat="1" />
                                <SkeletonCard reapeat="1" />
                            </>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-4">
                        {auth.user.role == "admin" && (
                            <>
                                <Card className="">
                                    <div className="flex items-center justify-between p-2">
                                        <div>
                                            <h4 className="mb-0 text-lg">
                                                Total All Posts
                                            </h4>
                                            <p className="text-backend-muted">
                                                {info?.totalPosts} posts
                                            </p>
                                        </div>
                                        <div>
                                            <i className="text-5xl ri-archive-stack-fill text-backend-muted" />
                                        </div>
                                    </div>
                                </Card>
                                <Card className="">
                                    <div className="flex items-center justify-between p-2">
                                        <div>
                                            <h4 className="mb-0 text-lg">
                                                All Posts Published
                                            </h4>
                                            <p className="text-backend-muted">
                                                {info?.totalPublishedPosts}{" "}
                                                posts
                                            </p>
                                        </div>
                                        <div>
                                            <i className="text-5xl ri-mac-line text-backend-success" />
                                        </div>
                                    </div>
                                </Card>
                                <Card className="">
                                    <div className="flex items-center justify-between p-2">
                                        <div>
                                            <h4 className="mb-0 text-lg">
                                                Total All Comments
                                            </h4>
                                            <p className="text-backend-muted">
                                                {info?.totalComments} comments
                                            </p>
                                        </div>
                                        <div>
                                            <i className="text-5xl ri-message-2-fill text-backend-secondary" />
                                        </div>
                                    </div>
                                </Card>
                                <Card className="">
                                    <div className="flex items-center justify-between p-2">
                                        <div>
                                            <h4 className="mb-0 text-lg">
                                                Total User
                                            </h4>
                                            <p className="text-backend-muted">
                                                {info?.totalUsers} users
                                            </p>
                                        </div>
                                        <div>
                                            <i className="text-5xl ri-group-fill text-backend-error" />
                                        </div>
                                    </div>
                                </Card>
                            </>
                        )}
                    </div>
                )}

                <Card className="">
                    <div className="mb-3">
                        <h4 className="mb-0 text-2xl">Lorem Ipsum</h4>
                    </div>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur laudantium deleniti voluptatibus facere?
                    </p>
                </Card>

                {auth?.user?.role == "user" && (
                    <Card className="">
                        <div className="mb-3">
                            <h4 className="mb-0 text-2xl">Role User</h4>
                        </div>

                        <p className="mb-4">
                            This component is only displayed for the user role
                        </p>
                    </Card>
                )}

                <Card className="">
                    <div className="mb-3">
                        <h4 className="mb-0 text-2xl">Route List</h4>
                    </div>

                    <div className="my-3 description">
                        <p>
                            This table provides a complete list of all routes
                            defined in the Laravel application. Each route
                            specifies the HTTP method, the URL path, the
                            controller/action handling the request, middleware
                            applied to the route, and the route name if one is
                            defined. Routes are grouped by authentication roles
                            (admin, writer, user, guest) and specific
                            functionalities such as user management,
                            authentication, profile editing, and email
                            verification. The Laravel framework uses these
                            routes to manage the application’s navigation and
                            access control.
                        </p>
                    </div>

                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="border-b-2 border-backend-muted">
                                <tr>
                                    <th>HTTP Method</th>
                                    <th>Route Path</th>
                                    <th>Controller/Action</th>
                                    <th>Middleware</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody className="border-b border-gray-500 divide-y divide-gray-400">
                                <tr>
                                    <td>GET</td>
                                    <td>/</td>
                                    <td>Inertia::render('Welcome')</td>
                                    <td></td>
                                    <td className="description">
                                        Displays the welcome page for the
                                        application.
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>/dashboard</td>
                                    <td>DashboardController@index</td>
                                    <td>
                                        auth, verified, role:admin,writer,user
                                    </td>
                                    <td className="description">
                                        Shows the main dashboard for
                                        authenticated users with appropriate
                                        roles.
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>/dashboard/i/getInfo</td>
                                    <td>DashboardController@getInfo</td>
                                    <td>
                                        auth, verified, role:admin,writer,user
                                    </td>
                                    <td className="description">
                                        Fetches and returns dashboard
                                        information for the user.
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>/dashboard/profile</td>
                                    <td>ProfileController@edit</td>
                                    <td>
                                        auth, verified, role:admin,writer,user
                                    </td>
                                    <td className="description">
                                        Displays the user's profile edit form.
                                    </td>
                                </tr>
                                <tr>
                                    <td>PATCH</td>
                                    <td>/dashboard/profile</td>
                                    <td>ProfileController@update</td>
                                    <td>
                                        auth, verified, role:admin,writer,user
                                    </td>
                                    <td className="description">
                                        Updates the user's profile information.
                                    </td>
                                </tr>
                                <tr>
                                    <td>DELETE</td>
                                    <td>/dashboard/profile</td>
                                    <td>ProfileController@destroy</td>
                                    <td>
                                        auth, verified, role:admin,writer,user
                                    </td>
                                    <td className="description">
                                        Deletes the user's profile.
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>/dashboard/empty</td>
                                    <td>Inertia::render('Front/EmptyPage')</td>
                                    <td>
                                        auth, verified, role:admin,writer,user
                                    </td>
                                    <td className="description">
                                        Displays an empty page, typically for
                                        testing or placeholder purposes.
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>/dashboard/users</td>
                                    <td>UserController@index</td>
                                    <td>auth, verified, role:admin</td>
                                    <td className="description">
                                        Lists all users for admin management.
                                    </td>
                                </tr>
                                <tr>
                                    <td>POST</td>
                                    <td>/dashboard/users</td>
                                    <td>UserController@store</td>
                                    <td>auth, verified, role:admin</td>
                                    <td className="description">
                                        Creates a new user in the system.
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>
                                        /dashboard/users/{"{"}user{"}"}
                                    </td>
                                    <td>UserController@show</td>
                                    <td>auth, verified, role:admin</td>
                                    <td className="description">
                                        Displays the details of a specific user.
                                    </td>
                                </tr>
                                <tr>
                                    <td>PUT</td>
                                    <td>
                                        /dashboard/users/{"{"}user{"}"}
                                    </td>
                                    <td>UserController@update</td>
                                    <td>auth, verified, role:admin</td>
                                    <td className="description">
                                        Updates a user's information.
                                    </td>
                                </tr>
                                <tr>
                                    <td>DELETE</td>
                                    <td>
                                        /dashboard/users/{"{"}user{"}"}
                                    </td>
                                    <td>UserController@destroy</td>
                                    <td>auth, verified, role:admin</td>
                                    <td className="description">
                                        Deletes a user from the system.
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>
                                        /dashboard/user/{"{"}user:id{"}"}
                                    </td>
                                    <td>UserController@getUser</td>
                                    <td>auth, verified, role:admin</td>
                                    <td className="description">
                                        Fetches user data based on user ID.
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>/register</td>
                                    <td>RegisteredUserController@create</td>
                                    <td>guest</td>
                                    <td className="description">
                                        Displays the registration form for new
                                        users.
                                    </td>
                                </tr>
                                <tr>
                                    <td>POST</td>
                                    <td>/register</td>
                                    <td>RegisteredUserController@store</td>
                                    <td>guest</td>
                                    <td className="description">
                                        Processes registration of a new user.
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>/login</td>
                                    <td>
                                        AuthenticatedSessionController@create
                                    </td>
                                    <td>guest</td>
                                    <td className="description">
                                        Displays the login form for users.
                                    </td>
                                </tr>
                                <tr>
                                    <td>POST</td>
                                    <td>/login</td>
                                    <td>
                                        AuthenticatedSessionController@store
                                    </td>
                                    <td>guest</td>
                                    <td className="description">
                                        Authenticates users after they submit
                                        the login form.
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>/forgot-password</td>
                                    <td>PasswordResetLinkController@create</td>
                                    <td>guest</td>
                                    <td className="description">
                                        Displays the form to request a password
                                        reset link.
                                    </td>
                                </tr>
                                <tr>
                                    <td>POST</td>
                                    <td>/forgot-password</td>
                                    <td>PasswordResetLinkController@store</td>
                                    <td>guest</td>
                                    <td className="description">
                                        Sends a password reset link to the
                                        user's email.
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>
                                        /reset-password/{"{"}token{"}"}
                                    </td>
                                    <td>NewPasswordController@create</td>
                                    <td>guest</td>
                                    <td className="description">
                                        Displays the form to reset the password
                                        using the token.
                                    </td>
                                </tr>
                                <tr>
                                    <td>POST</td>
                                    <td>/reset-password</td>
                                    <td>NewPasswordController@store</td>
                                    <td>guest</td>
                                    <td className="description">
                                        Processes the password reset with the
                                        new password.
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>/verify-email</td>
                                    <td>EmailVerificationPromptController</td>
                                    <td>auth</td>
                                    <td className="description">
                                        Prompts users to verify their email
                                        address.
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>
                                        /verify-email/{"{"}id{"}"}/{"{"}hash
                                        {"}"}
                                    </td>
                                    <td>VerifyEmailController</td>
                                    <td>auth, signed, throttle:6,1</td>
                                    <td className="description">
                                        Verifies the user's email address using
                                        the provided token.
                                    </td>
                                </tr>
                                <tr>
                                    <td>POST</td>
                                    <td>/email/verification-notification</td>
                                    <td>
                                        EmailVerificationNotificationController@store
                                    </td>
                                    <td>auth, throttle:6,1</td>
                                    <td className="description">
                                        Sends a new email verification
                                        notification to the user.
                                    </td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>/confirm-password</td>
                                    <td>ConfirmablePasswordController@show</td>
                                    <td>auth</td>
                                    <td className="description">
                                        Displays the password confirmation form
                                        for the user.
                                    </td>
                                </tr>
                                <tr>
                                    <td>POST</td>
                                    <td>/confirm-password</td>
                                    <td>ConfirmablePasswordController@store</td>
                                    <td>auth</td>
                                    <td className="description">
                                        Confirms the user's password to proceed
                                        with sensitive actions.
                                    </td>
                                </tr>
                                <tr>
                                    <td>PUT</td>
                                    <td>/password</td>
                                    <td>PasswordController@update</td>
                                    <td>auth</td>
                                    <td className="description">
                                        Updates the user's password.
                                    </td>
                                </tr>
                                <tr>
                                    <td>POST</td>
                                    <td>/logout</td>
                                    <td>
                                        AuthenticatedSessionController@destroy
                                    </td>
                                    <td>auth</td>
                                    <td className="description">
                                        Logs out the authenticated user.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>
            </DashboardLayout>
        </>
    );
};

export default Dashboard;
