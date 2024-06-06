"use client"
import { useRouter } from "next/navigation"

const TaskCard = ({ tasks }) => {

    const router = useRouter()

    return (
        <div className="flex flex-col items-center lg:grid grid-cols-3 gap-4">
            {
                tasks.map((task) => (
                    <div
                        className="bg-slate-500 p-4 m-4 max-w-lg cursor-pointer hover:bg-slate-600" key={task.id}
                        onClick={() => router.push(`/tasks/edit/${task.id}`)}
                    >
                        <p className="text-xl">{task.title}</p>
                        <p className="text-sm">{task.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default TaskCard