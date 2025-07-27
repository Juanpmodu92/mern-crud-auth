import { useAuth } from "../context/AuthContext"; // asegúrate que esta ruta es correcta
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
    const { isAuthenticated, user } = useAuth();
    const navigate = useNavigate();

    return (
        <section className=" flex flex-col items-center justify-center flex-grow px-4 py-20 text-center text-white">
        {isAuthenticated ? (
            <>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ¡Hello, {user.username}!
            </h1>
            <p className="text-lg text-gray-300 mb-6">
                Ready to get on with your to-dos?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <button
                onClick={() => navigate("/tasks")}
                className="bg-green-600 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                Go to my tasks
                </button>
                <Link
                to="/add-tasks"
                className="bg-orange-600 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                Add new task
                </Link>
                <Link
                to="/map"
                className="bg-purple-600 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                See location
                </Link>
            </div>
            </>
        ) : (
            <>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                Welcome to Tasks Manager
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
                Manage, organize, and focus your tasks easily and efficiently. Control your productivity from anywhere.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link
                to="/login"
                className="bg-green-600 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                Login
                </Link>
                <Link
                to="/register"
                className=" bg-orange-600 hover:bg-blue-600 hover:text-white text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                Register
                </Link>
                <Link
                to="/about"
                className=" font-bold text-blue-600 underline hover:text-blue-300 mt-4 block"
                >
                Learn more 
                </Link>
            </div>
            </>
        )}
        </section>
    );
}
