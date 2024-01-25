/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTaskDispatch } from "../Context/TasksContextProvider";
const Task = ({ task }) => {
    const [editing, setEditing] = useState(false);
    const [inputText, setInputText] = useState(task.text);
    const taskDispatch = useTaskDispatch();
    let taskContent;
    if (editing) {
        taskContent = (
            <>
                <input value={inputText} onChange={(e) => { setInputText(e.target.value) }} />
                <button
                    onClick={() => {
                        setEditing(false);
                        taskDispatch({
                            type: "edited",
                            task: {
                                ...task,
                                text: inputText,
                            }
                        });
                    }}
                >
                    Save
                </button>
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
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={(e) => {
                        taskDispatch({
                            type: "edited",
                            task: {
                                ...task,
                                done: e.target.checked
                            }
                        });
                    }}
                />
                {taskContent}
                <button
                    onClick={() => {
                        taskDispatch({
                            type: "deleted",
                            taskId: task.id,
                        });
                    }}
                >
                    Delete
                </button>
            </label>
        </li>
    );
};
export default Task;