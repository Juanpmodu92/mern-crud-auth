import {useForm} from 'react-hook-form'
import { useTasks } from '../context/TasksContext'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)


function TasksFormPage() {
    const {register, handleSubmit, setValue,} = useForm()
    const {createTask, getTask, updateTask} = useTasks()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() =>{
        async function loadTask() {
            if (params.id) {
            const task = await getTask(params.id)
            console.log(task)
            setValue('title', task.title)
            setValue('description', task.description)
            setValue('date', dayjs(task.date).utc().format('YYYY-MM-DD'))
            }
        }
        loadTask()
    }, [])

    const onSubmit = handleSubmit((data)=>{
        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
        }
        if (params.id){
            updateTask(params.id, dataValid);
        } else {
            createTask(dataValid)
        }

        navigate('/tasks')
    });

    return (
        <div className="flex items-center justify-center">
            <div className=" border-2 border-zinc-400 max-w-md w-full p-10 rounded-md">
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
                <label className="text-sm font-bold text-white">Date</label>
                <input type="date" {...register('date') } className=" border border-gray-300 bg-zinc-700 max-w-md w-full py-2 px-4 rounded-md text-white my-2"/>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition font-semibold">Save</button>
            </form>
            </div>
        </div>
    )
}

export default TasksFormPage