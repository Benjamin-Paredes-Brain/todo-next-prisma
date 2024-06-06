"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const CreateTask = ({ params }) => {
    const router = useRouter()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {

        if (params.id) {
            fetch(`/api/tasks/${params.id}`)
                .then(res => res.json())
                .then((data) => {
                    setTitle(data.payload.title)
                    setDescription(data.payload.description)
                })
        }

    }, [params.id])

    async function handleSubmit(e) {
        e.preventDefault()

        if (params.id) {
            await fetch(`/api/tasks/${params.id}`, {
                method: "PUT",
                body: JSON.stringify({ title, description }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            alert("Task updated")

        }
        else {
            await fetch("/api/tasks", {
                method: "POST",
                body: JSON.stringify({ title, description }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            alert("Task created")

        }


        router.push("/")
        router.refresh()
    }

    async function handleDelete() {
        await fetch(`/api/tasks/${params.id}`, {
            method: "DELETE"
        })

        alert("Task deleted")

        router.push("/")
        router.refresh()
    }

    return (
        <div className='flex flex-col items-center gap-8 p-8'>
            <h1>Tasks form</h1>
            <form
                className='flex flex-col mx-auto w-full bg-slate-500 p-8 text-black lg:w-2/4'
                onSubmit={handleSubmit}
            >
                <label className='mt-4 font-semibold' htmlFor="title">Title of task:</label>
                <input
                    className='p-2' type="text" id="title" placeholder='title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label className='mt-4 font-semibold' htmlFor="description">Description of task:</label>
                <textarea
                    className='p-2' placeholder='description' id='description' rows={3}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                ></textarea>
                <button type="submit" className='bg-blue-400 hover:bg-blue-600 font-bold my-4 p-2 rounded-md'>{params.id ? "Edit" : "Create"}</button>
                {
                    params.id && (
                        <button
                            className='bg-red-400 hover:bg-red-600 font-bold my-4 p-2 rounded-md'
                            type="button"
                            onClick={handleDelete}
                        >
                            Delete</button>
                    )
                }
            </form>
        </div>
    )
}

export default CreateTask