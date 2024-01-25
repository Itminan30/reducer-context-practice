/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTaskDispatch, useTasks } from "../Context/TasksContextProvider";
const AddTask = () => {
    const [input, setInput] = useState("");
    const tasks = useTasks();
    const taskDispatch = useTaskDispatch();
    return (
        <>
            <input type="text" placeholder='Add Task' value={input} onChange={(e) => setInput(e.target.value)} />
            <button
                onClick={() => {
                    const nextId = tasks.reduce((acc, curr) => (acc > curr) ? acc : curr, 0).id + 1;
                    taskDispatch({
                        type: "added",
                        id: nextId,
                        text: input,
                    });
                    setInput("");
                }}
            >
                Add
            </button>
        </>
    );
};
export default AddTask;