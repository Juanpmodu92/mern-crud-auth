import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center"> 
        <div className="border-2 border-zinc-400 max-w-md p-10 rounded-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-white animate-fade-in hover:text-blue-600"> Welcome! Sign up to get started </h1>
        {RegisterErrors?.length > 0 && (
            <div className="mb-4">
            {RegisterErrors.map((error, i) => (
                <div key={i} className="bg-red-500 p-2 text-white rounded mb-2 ">
                {error}
                </div>
            ))}
            </div>
        )}

        <form onSubmit={onSubmit}>
            <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 hover:bg-white hover:text-black border border-gray-300"
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
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 hover:bg-white hover:text-black border border-gray-300"
            placeholder="Email"
            />
            {errors.email && (
            <span className="text-red-500 text-sm animate-fade-in">
                Email is required
            </span>
            )}

            <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 hover:bg-white hover:text-black border border-gray-300"
            placeholder="Password"
            />
            {errors.password && (
            <span className="text-red-500 text-sm">
                Password is required
            </span>
            )}

            <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-white hover:text-blue-600 text-white px-4 py-2 rounded-md my-2"
            >
            Register
            </button>
        </form>
        <p className="flex gap-x-2 justify-between">
        Already have an account? <Link to="/Login" className="text-blue-600 hover:text-green-600 font-bold">Login</Link>
        </p>
        </div>
        </div>
    );
}

export default RegisterPage;