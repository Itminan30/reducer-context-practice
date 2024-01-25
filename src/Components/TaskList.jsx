/* eslint-disable react/prop-types */
import { useTasks } from "../Context/TasksContextProvider";
import Task from "./Task";

const TaskList = () => {
    const tasks = useTasks();
    return (
        <>
            <ul>
                {
                    tasks.map(task => <Task key={task.id} task={task} />)
                }
            </ul>
        </>
    );
};
export default TaskList;