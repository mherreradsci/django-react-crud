import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { createTask, getTask, deleteTask, updateTask } from "../api/tasks.api";
import { Navigate, useNavigate, useParams } from 'react-router-dom';


export function TaskFormPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const navigate = useNavigate();

    const params = useParams();
    console.log(params)

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            console.log("Actualizando ...");
            await updateTask(params.id, data);
            
        } else {
            const res = await createTask(data);
            console.log(res);
        }
        navigate("/tasks");
    });

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                console.log("Obteniendo datos...");
                const {data} = await getTask(params.id);
                console.log(data);
                setValue('title', data.title);
                setValue('description', data.description);
            }
        }
        loadTask();
    }, []);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title"
                    {...register("title", { required: true })}
                />
                {errors.title && <span>title is required</span>}

                <textarea rows="3" placeholder="Description"
                    {...register("description", { required: true })}
                ></textarea>
                {errors.description && <span>description is required</span>}
                <button>Save</button>
            </form>
            {params.id &&
                <button onClick={async () => {
                    const accepted = window.confirm(`Are you sure to delete Task ${params.id}?`)
                    if (accepted) {
                        await deleteTask(params.id);
                        navigate("/tasks")
                    }

                }
                }>
                    Delete
                </button>
            }
        </div>
    )
}
