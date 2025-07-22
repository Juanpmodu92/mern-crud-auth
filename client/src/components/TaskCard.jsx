import { useTasks } from "../context/TasksContext"
import { Link } from "react-router-dom";

function TaskCard({task}) {
    const {deleteTask} = useTasks()

    return (
    
            <div className="border border-zinc-700 bg-zinc-800 max-w-md w-full p-8 rounded-xl shadow-xl">
                <header className="flex justify-between">
                    <h1 className="text-3xl font-semibold mb-4 text-indigo-300">{task.title}</h1>
                    <div className="flex gap-x-2 items-center">
                        <button onClick={() =>{console.log("Task:", task);deleteTask(task._id)}} className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition">Delete</button>
                        <Link to={`/tasks/${task._id}`} className="text-sm bg-yellow-500 hover:bg-yellow-700 px-3 py-1 rounded transition">Edit</Link>
                    </div>
                </header>
                <p className="text-gray-300 leading-relaxed">{task.description}</p>
                <p>{new Date(task.date).toLocaleDateString()}</p>
            </div>
    )
}

export default TaskCard