import Card from "@/Components/Element/Card/Card";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import DashboardLayout from "@/Layouts/DashboardLayout";

const Edit = ({ auth, mustVerifyEmail, status }) => {
    return (
        <>
            <DashboardLayout user={auth.user} metaTitle="Edit Profile">
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
                    <div className="">
                        <Card className="flex flex-col items-center justify-center w-full">
                            <img
                                className="w-24 h-24 border-2 border-gray-300 rounded-full"
                                src={auth.user.profile_photo_path}
                                alt="Profile Picture"
                            />
                            <div className="mt-4 text-center">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {auth.user.name}
                                </h2>
                                <p className="text-2xl font-bold text-gray-900">
                                    {auth.user.username}
                                </p>
                                <p className="text-gray-600">
                                    {auth.user.email}
                                </p>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-4 lg:col-span-2">
                        <Card>
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="w-full"
                            />
                        </Card>

                        <Card>
                            <UpdatePasswordForm className="w-full" />
                        </Card>

                        <Card>
                            <DeleteUserForm className="w-full" />
                        </Card>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
};

export default Edit;
