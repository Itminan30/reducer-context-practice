import { useReducer } from 'react'
import './App.css'
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'
import { initialTasks } from './Data/taskData'
import { taskReducer } from './Reducer/taskReducer'

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, initialTasks);

  function handleAddTask(task) {
    const nextId = tasks.reduce((acc, curr) => (acc > curr) ? acc : curr, 0).id + 1;
    task.id = nextId;
    taskDispatch({
        type: "added",
        task: task,
      });
  }

  function handleEditTask(task) {
    taskDispatch({
      type: "edited",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    taskDispatch({
      type: "deleted",
      taskId: taskId,
    });
  }

  return (
    <>
      <h1>Prague Itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
    </>
  )
}

export default App
