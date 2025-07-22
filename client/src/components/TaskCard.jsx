import { useTasks } from "../context/TasksContext"
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc)

function TaskCard({task}) {
    const {deleteTask} = useTasks()

    return (
    
            <div className="border border-zinc-700 bg-zinc-800 max-w-md w-full p-8 rounded-xl shadow-xl">
                <header className="flex justify-between">
                    <h1 className="text-4xl font-semibold mb-4 text-indigo-500 hover:text-white">{task.title}</h1>
                    <div className="flex gap-x-2 items-center">
                        <button onClick={() =>{console.log("Task:", task);deleteTask(task._id)}} className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition">Delete</button>
                        <Link to={`/tasks/${task._id}`} className="text-sm bg-green-500 hover:bg-yellow-700 px-3 py-1 rounded transition">Edit</Link>
                    </div>
                </header>
                <div className="border border-gray-300 bg-zinc-700 w-full py-2 px-2 rounded-md shadow-xl my-2 hover:bg-white mb-4 ">
                    <p className="text-gray-300 leading-relaxed break-words hover:text-black">{task.description}</p>
                </div>
                <p className="font-semibold mb-auto hover:text-indigo-500 text-white">{dayjs(task.date).utc().format("DD/MM/YYYY")}</p>
            </div>
    )
}
export default TaskCard 