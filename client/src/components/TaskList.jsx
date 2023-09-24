import { useEffect, useState } from "react"
import { getAllTasks } from '../api/task.api'
import { TaskCard } from './TaskCards'
// rfce

export function TaskList() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks();
            setTasks(res.data)
            //console.log(res);
        }
        loadTasks();
    }, []);
    return <div>
        {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
        ))}
    </div>;

}
