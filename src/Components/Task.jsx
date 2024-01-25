/* eslint-disable react/prop-types */
import { useState } from "react";
const Task = ({ task, onEditTask, onDeleteTask }) => {
    const [editing, setEditing] = useState(false);
    const [inputText, setInputText] = useState(task.text);
    let taskContent;
    if (editing) {
        taskContent = (
            <>
                <input value={inputText} onChange={(e) => { setInputText(e.target.value) }} />
                <button onClick={() => { setEditing(false); onEditTask({...task, text:inputText}); }}>Save</button>
            </>
        )
    }
    else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => { setEditing(true) }}> Edit</button >
            </>
        )
    }
    return (
        <li>
            <label htmlFor="">
                <input type="checkbox" checked={task.done} onChange={(e) => onEditTask({...task, done: e.target.checked})} />
                {taskContent}
                <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </label>
        </li>
    );
};
export default Task;