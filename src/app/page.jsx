import TaskCard from "@/components/TaskCard"
import { prisma } from "@/libs/prisma"

async function loadTasks() {
  return await prisma.task.findMany()
}

export const dynamic = 'force-dynamic'

const HomePage = async () => {
  const tasks = await loadTasks()
  return (
    <section className="container mx-auto">
      <h1 className="text-center">Tasks</h1>
      {tasks.length >= 1 && <p className="text-center text-gray-400">Click on the task for update or delete</p>}
      <TaskCard tasks={tasks}/>
    </section>
  )
}

export default HomePage