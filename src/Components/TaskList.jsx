/* eslint-disable react/prop-types */
import { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../App";

const TaskList = ({ onEditTask, onDeleteTask}) => {
    const tasks = useContext(TaskContext);
    return (
        <>
            <ul>
                {
                    tasks.map(task => <Task key={task.id} task={task} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />)
                }
            </ul>
        </>
    );
};
export default TaskList;