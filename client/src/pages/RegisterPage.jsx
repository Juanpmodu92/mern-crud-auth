import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/login");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">

        {RegisterErrors?.length > 0 && (
            <div className="mb-4">
            {RegisterErrors.map((error, i) => (
                <div key={i} className="bg-red-500 p-2 text-white rounded mb-2">
                {error}
                </div>
            ))}
            </div>
        )}

        <form onSubmit={onSubmit}>
            <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Username"
            />
            {errors.username && (
            <span className="text-red-500 text-sm">
                Username is required
            </span>
            )}

            <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
            />
            {errors.email && (
            <span className="text-red-500 text-sm">
                Email is required
            </span>
            )}

            <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
            />
            {errors.password && (
            <span className="text-red-500 text-sm">
                Password is required
            </span>
            )}

            <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md"
            >
            Register
            </button>
        </form>
        </div>
    );
}

export default RegisterPage;