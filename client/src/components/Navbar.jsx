import {Link} from "react-router-dom"
import {useAuth} from "../context/AuthContext"

function Navbar() {

    const {isAuthenticated, logout, user } = useAuth()

    return (
    <nav className="bg-zinc-800 text-white shadow-md m-5 rounded-xl border border-gray-300">
        <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
            <Link to={"/"}>
            <h1 to="/" className="text-3xl font-bold hover:text-blue-600 transition-colors">Tasks Manager</h1>
            </Link>
            <ul className="flex gap-6 text-sm font-medium">
                {isAuthenticated ? (
                    <>
                        <li className="hover:text-blue-600  text-2xl transition-colors font-bold">
                            <h1>Welcome {user.username}</h1>
                        </li>
                        <li className="hover:text-white transition-colors bg-blue-600 px-4 py-1 rounded-md hover:bg-green-600">
                            <Link to="/tasks">Tasks</Link>
                        </li>
                        <li className="hover:text-black transition-colors bg-blue-600 px-4 py-1 rounded-md hover:bg-orange-500">
                            <Link to="/add-tasks">Add Tasks</Link>
                        </li>
                        <li className="bg-blue-600 hover:bg-red-600 px-4 py-1 rounded-md text-white hover:text-black transition-colors">
                            <Link to="/" onClick={() => {logout()}}>Logout</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="hover:text-white transition-colors">
                            <Link to="/login" className="bg-blue-600 px-4 py-1 rounded-md hover:bg-green-600">Login</Link>
                        </li>
                        <li className="hover:text-white transition-colors">
                            <Link to="/register" className="bg-blue-600 px-4 py-1 rounded-md hover:bg-orange-600">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </div>

    </nav>
    )
}

export default Navbar