import {useRef} from 'react'

export default function NewTasks({AddTask}){
    const taskName = useRef();

    function handleAddTask(){
        AddTask(taskName.current.value);
        taskName.current.value = "";
    }
    return(
        <div className="flex items-center gap-4">
            <input ref={taskName} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            <button className="text-stone-700 hover:text-stone-950" onClick={handleAddTask}>Add Task</button>
        </div>
    );
}