import ButtonBE from "@/Components/Element/Button/ButtonBE";
import Card from "@/Components/Element/Card/Card";
import InputError from "@/Components/Element/Input/InputError";
import InputLabel from "@/Components/Element/Input/InputLabel";
import SelectInput from "@/Components/Element/Input/SelectInput";
import TextInput from "@/Components/Element/Input/TextInput";
import TextInputGroup from "@/Components/Element/Input/TextInputGroup";
import Modal from "@/Components/Element/Modal/Modal";
import PaginationDashboard from "@/Components/Element/Pagination/PaginationDashboard";
import TableHeading from "@/Components/Element/Table/TableHeading";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { router, useForm } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Index = ({ auth, meta, users, queryParams = null }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [processing, setProcessing] = useState(false);
    const { data, setData, errors, setError, clearErrors, reset } = useForm({
        id: "",
        name: "",
        username: "",
        email: "",
        role: "",
        password: "",
    });
    queryParams = queryParams || {};

    const onKeyPress = (name, e) => {
        if (e.key === "Enter") {
            searchFieldChanged(name, e.target.value);
        }
    };

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route("admin.users.index"), queryParams);
    };

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("admin.users.index"), queryParams);
    };

    const filterChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route("admin.users.index"), queryParams);
    };

    const openModal = (param = "") => {
        if (typeof param == "string") {
            window.history.pushState({}, "", "?modal=open&edit=" + param);
        } else {
            window.history.pushState({}, "", "?modal=open");
        }
        setModalOpen(true);
    };

    const closeModal = () => {
        window.history.pushState({}, "", "/dashboard/users");
        setModalOpen(false);
    };

    const handleAddUser = (e) => {
        e.preventDefault();
        clearErrors();
        setProcessing(true);
        axios
            .post(route("admin.users.store"), data)
            .then((res) => {
                closeModal();
                setProcessing(false);
                router.reload();
                reset();
            })
            .catch((error) => {
                setError(error.response.data.errors);
                setProcessing(false);
            });
    };

    const editUser = (user) => {
        setEditMode(true);
        setData({ ...user });
        openModal(`${user.id}`);
    };

    const handleUpdateUser = (e) => {
        e.preventDefault();
        clearErrors();
        axios
            .put(route("admin.users.update", data.id), data)
            .then((res) => {
                closeModal();
                setProcessing(false);
                router.reload();
                setEditMode(false);
                reset();
            })
            .catch((error) => {
                setError(error.response.data.errors);
                setProcessing(false);
                setEditMode(false);
            });
    };

    const deleteUser = (user) => {
        if (!confirm("Are you sure you want to delete this user?")) {
            return;
        }
        axios
            .delete(route("admin.users.destroy", user))
            .then((res) => {
                router.reload();
            })
            .catch((error) => {
                console.error(error);
                alert(error.response.data.message);
            });
    };

    const fetchData = async (id) => {
        setError(null);
        try {
            const response = await axios.get(route("admin.getUser", id));
            const user = response.data.user;
            setData({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                role: user.role,
            });
        } catch (err) {
            setError("Failed to fetch data");
        }
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const modalParam = queryParams.get("modal");
        const editParam = queryParams.get("edit");
        if (editParam) {
            setEditMode(true);
            fetchData(editParam);
        } else {
            setEditMode(false);
        }

        setModalOpen(modalParam === "open");

        return () => {
            clearErrors();
            reset();
        };
    }, []);

    return (
        <>
            <DashboardLayout user={auth.user} metaTitle={meta.title}>
                <Card>
                    <div className="">
                        <div className="flex justify-end py-2">
                            <ButtonBE onClick={openModal}>Add User</ButtonBE>
                        </div>

                        <Modal show={modalOpen}>
                            <div className="p-4">
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold">
                                        {editMode ? "Edit User" : "Add User"}
                                    </h3>
                                </div>

                                <form
                                    onSubmit={
                                        editMode
                                            ? handleUpdateUser
                                            : handleAddUser
                                    }
                                >
                                    <input
                                        type="hidden"
                                        name="id"
                                        value={data.id}
                                        defaultValue=""
                                    />

                                    <TextInputGroup
                                        id="name"
                                        name="name"
                                        icon="fa-regular fa-user"
                                        label="Name"
                                        type="text"
                                        value={data.name}
                                        placeholder="Enter name"
                                        isFocused="true"
                                        onBlur={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mb-3"
                                    />

                                    <div className="flex gap-2">
                                        <div className="w-1/2">
                                            <TextInputGroup
                                                id="username"
                                                name="username"
                                                icon="fa-regular fa-user"
                                                label="Username"
                                                type="text"
                                                value={data.username}
                                                placeholder="Enter username"
                                                onBlur={(e) =>
                                                    setData(
                                                        "username",
                                                        e.target.value
                                                    )
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "username",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                            <InputError
                                                message={errors.username}
                                                className="mb-3"
                                            />
                                        </div>

                                        <div className="w-1/2">
                                            <div className="relative mb-3">
                                                <i
                                                    className={`fa-regular fa-user absolute top-1/2 transform -translate-y-1/2 left-4 text-[24px] text-backend-primary`}
                                                ></i>

                                                <label
                                                    htmlFor="role"
                                                    className="absolute top-2 left-14 text-backend-dark"
                                                >
                                                    Role
                                                </label>

                                                <select
                                                    id="role"
                                                    name="role"
                                                    className="w-full h-16 p-1 border rounded-md outline-none pl-14 pt-7"
                                                    value={data.role}
                                                    onBlur={(e) =>
                                                        setData(
                                                            "role",
                                                            e.target.value
                                                        )
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "role",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Select Role
                                                    </option>
                                                    <option value="admin">
                                                        Admin
                                                    </option>
                                                    <option value="writer">
                                                        Writer
                                                    </option>
                                                    <option value="user">
                                                        User
                                                    </option>
                                                </select>
                                            </div>

                                            <InputError
                                                message={errors.role}
                                                className="mb-3"
                                            />
                                        </div>
                                    </div>

                                    <TextInputGroup
                                        id="email"
                                        name="email"
                                        icon="fa-solid fa-envelope"
                                        label="Email"
                                        type="email"
                                        value={data.email}
                                        placeholder="Enter email"
                                        onBlur={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mb-3"
                                    />

                                    <TextInputGroup
                                        id="password"
                                        name="password"
                                        icon="fa-solid fa-lock"
                                        label="Password"
                                        type="password"
                                        value={data.password}
                                        autoComplete="new-password"
                                        placeholder="Enter new password"
                                        onBlur={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    {editMode && (
                                        <p className="-mt-2 text-xs text-backend-muted">
                                            blank password field if you don't
                                            want to change
                                        </p>
                                    )}
                                    <InputError
                                        message={errors.password}
                                        className="mb-3"
                                    />

                                    <div className="flex justify-end gap-3 text-center">
                                        <ButtonBE
                                            type="button"
                                            className="px-6 py-3 mt-4 hover:bg-frontend-muted"
                                            color={"bg-frontend-muted/75"}
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </ButtonBE>

                                        <ButtonBE
                                            type="submit"
                                            className="px-6 py-3 mt-4"
                                            color={"bg-backend-primary"}
                                            disabled={processing}
                                        >
                                            {editMode ? "Update" : "Create"}
                                        </ButtonBE>
                                    </div>
                                </form>
                            </div>
                        </Modal>

                        <InputLabel>Filter</InputLabel>
                        <div className="flex flex-col mb-4 md:flex-row">
                            <div className="mr-2">
                                <label
                                    htmlFor="role"
                                    className="block w-full md:w-auto"
                                >
                                    Role
                                </label>
                                <SelectInput
                                    name="role"
                                    id="role"
                                    className="block w-full md:w-auto rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-backend-primary sm:max-w-xs sm:text-sm sm:leading-6"
                                    value={queryParams.role || "all"}
                                    onChange={(e) =>
                                        filterChanged("role", e.target.value)
                                    }
                                >
                                    <option value="all">All</option>
                                    <option value="admin">Admin</option>
                                    <option value="writer">Writer</option>
                                    <option value="user">User</option>
                                </SelectInput>
                            </div>
                        </div>

                        <div className="mb-4">
                            <TextInput
                                className="w-full"
                                defaultValue={queryParams.search}
                                placeholder="Search..."
                                onBlur={(e) =>
                                    searchFieldChanged("search", e.target.value)
                                }
                                onKeyPress={(e) => onKeyPress("search", e)}
                            />
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs uppercase border-b border-gray-700">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3">#</th>

                                        <TableHeading
                                            name="photo"
                                            sortable={false}
                                        >
                                            Photo
                                        </TableHeading>

                                        <TableHeading
                                            name="name"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={
                                                queryParams.sort_direction
                                            }
                                            sortChanged={sortChanged}
                                        >
                                            Name
                                        </TableHeading>

                                        <TableHeading
                                            name="username"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={
                                                queryParams.sort_direction
                                            }
                                            sortChanged={sortChanged}
                                        >
                                            Username
                                        </TableHeading>

                                        <TableHeading
                                            name="email"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={
                                                queryParams.sort_direction
                                            }
                                            sortChanged={sortChanged}
                                        >
                                            Email
                                        </TableHeading>

                                        <TableHeading
                                            name="role"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={
                                                queryParams.sort_direction
                                            }
                                            sortChanged={sortChanged}
                                        >
                                            Role
                                        </TableHeading>

                                        <TableHeading
                                            name="created_at"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={
                                                queryParams.sort_direction
                                            }
                                            sortChanged={sortChanged}
                                        >
                                            Registered
                                        </TableHeading>

                                        <TableHeading
                                            name="email_verified_at"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={
                                                queryParams.sort_direction
                                            }
                                            sortChanged={sortChanged}
                                        >
                                            Verified
                                        </TableHeading>

                                        <th className="w-40 px-3 py-3">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.data.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan="9"
                                                className="p-6 m-1 text-base font-medium text-center"
                                            >
                                                No data
                                            </td>
                                        </tr>
                                    ) : (
                                        <>
                                            {users.data.map((user, index) => (
                                                <tr
                                                    className="border-b"
                                                    key={index}
                                                >
                                                    <td className="px-3 py-2">
                                                        {index + 1}
                                                    </td>
                                                    <td className="w-8 px-3 py-2">
                                                        <img
                                                            src={
                                                                user.profile_photo_path
                                                            }
                                                            alt="profile"
                                                            className="w-8 h-8"
                                                        />
                                                    </td>
                                                    <td className="px-3 py-2 min-w-40">
                                                        {user.name}
                                                    </td>
                                                    <td className="px-3 py-2">
                                                        {user.username}
                                                    </td>
                                                    <td className="px-3 py-2">
                                                        {user.email}
                                                    </td>
                                                    <td className="px-3 py-2">
                                                        <span
                                                            className={`p-1 rounded-md text-backend-light ${
                                                                user.role ===
                                                                "admin"
                                                                    ? "bg-backend-primary"
                                                                    : user.role ===
                                                                      "user"
                                                                    ? "bg-backend-secondary"
                                                                    : "bg-backend-muted/75"
                                                            }`}
                                                        >
                                                            {user.role}
                                                        </span>
                                                    </td>
                                                    <td className="px-3 py-2 text-nowrap">
                                                        {new Date(
                                                            user.created_at
                                                        ).toLocaleDateString(
                                                            "en-US",
                                                            {
                                                                year: "numeric",
                                                                month: "short",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "numeric",
                                                            }
                                                        )}
                                                    </td>
                                                    <td className="px-3 py-2 text-nowrap">
                                                        {new Date(
                                                            user.email_verified_at
                                                        ).toLocaleDateString(
                                                            "en-US",
                                                            {
                                                                year: "numeric",
                                                                month: "short",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "numeric",
                                                            }
                                                        )}
                                                    </td>
                                                    <td className="text-nowrap">
                                                        <button
                                                            onClick={(e) =>
                                                                editUser(user)
                                                            }
                                                            className="w-8 p-2 ml-1 font-medium rounded-md hover:bg-opacity-70 text-backend-light bg-backend-primary"
                                                        >
                                                            <i className="fa-solid fa-pen-to-square"></i>
                                                        </button>

                                                        <button
                                                            onClick={(e) =>
                                                                deleteUser(user)
                                                            }
                                                            className="w-8 p-2 ml-1 font-medium rounded-md hover:bg-opacity-70 text-backend-light bg-backend-error"
                                                        >
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <PaginationDashboard links={users.links} />
                </Card>
            </DashboardLayout>
        </>
    );
};

export default Index;
