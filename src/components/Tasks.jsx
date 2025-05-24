import NewTasks from './NewTasks.jsx'
import {useState} from 'react';

export default function Tasks(){
    const [tasksList, setTasksList] = useState([]);
    const [nextId, setNextId] = useState(1);

    function handleAddTaskClick(Task){
        const newTask = {
            ID: nextId,
            Task: Task,
          };

        setTasksList((prevTask) => ([
            ...prevTask,
            newTask
        ]));
        setNextId(prevId => prevId + 1);
    }

    function handleClear(Id){
        setTasksList((prevTasks)=>
            prevTasks.filter((task)=>task.ID !== Id)
        )
    }

    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTasks AddTask={handleAddTaskClick}/>
            {tasksList.length < 1 && <p className="text-stone-800 my-4">This project does not have any tasks.</p>}
            {tasksList.length>= 1 && 
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                   {tasksList.map(task => (
                    <li key={task.ID} className="flex justify-between my-4">
                        {task.Task}
                        <button className="text-stone-700 hover:text-red-500" onClick={()=>handleClear(task.ID)}>Clear</button>
                    </li>
                   
                   ))}
                </ul>}
        </section>
    );
}