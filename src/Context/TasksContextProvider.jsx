/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { initialTasks } from "../Data/taskData";
import { taskReducer } from "../Reducer/taskReducer";

// Context and functions
const TasksContext = createContext(null);
const TaskDispatchContext = createContext(null);

export function useTasks() {
    return useContext(TasksContext);
}
export function useTaskDispatch() {
    return useContext(TaskDispatchContext);
}

// Main Component
const TasksContextProvider = ({ children }) => {
    const [tasks, taskDispatch] = useReducer(taskReducer, initialTasks);

    return (
        <TasksContext.Provider value={tasks}>
            <TaskDispatchContext.Provider value={taskDispatch}>
                {children}
            </TaskDispatchContext.Provider>
        </TasksContext.Provider>
    );
};
export default TasksContextProvider;