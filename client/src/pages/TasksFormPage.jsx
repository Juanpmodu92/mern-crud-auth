import {useForm} from 'react-hook-form'
import { useTasks } from '../context/TasksContext'

function TasksFormPage() {
    const {register, handleSubmit} = useForm()
    const {createTask} = useTasks()

    const onSubmit = handleSubmit((data)=>{
        createTask(data)
    }) 

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className=" border-2 border-zinc-600 max-w-md w-full p-10 rounded-md">
                <form onSubmit={onSubmit} className="flex flex-col gap-4  p-6 rounded-lg  mx-auto">
                <label className="text-sm font-bold text-white">Title</label>
                <input 
                    type="text" 
                    placeholder="Title" 
                    {...register("title")}
                    autoFocus
                    className="border border-gray-300 bg-zinc-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-white hover:bg-white hover:text-black"
                />
                <label className="text-sm font-bold text-white">Description</label>
                <textarea 
                    rows="3" 
                    placeholder="Description"
                    {...register("description")}
                    className="border border-gray-300 bg-zinc-700 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-white hover:bg-white hover:text-black"
                ></textarea>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition font-semibold"
                >
                    Save 
                </button>
            </form>
            </div>
        </div>
    )
}

export default TasksFormPage