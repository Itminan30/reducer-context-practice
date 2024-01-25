/* eslint-disable react/prop-types */
import { useState } from "react";
const AddTask = ({onAddTask}) => {
    const [input, setInput] = useState("");
    return (
        <>
            <input type="text" placeholder='Add Task' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => {onAddTask({id: 0, text: input, done: false}); setInput("")}}>Add</button>
        </>
    );
};
export default AddTask;