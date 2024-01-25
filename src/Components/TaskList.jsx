/* eslint-disable react/prop-types */
import Task from "./Task";

const TaskList = ({tasks, onEditTask, onDeleteTask}) => {
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