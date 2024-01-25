import { useState } from 'react'
import './App.css'
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'
import { initialTasks } from './Data/taskData'

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(task) {
    const nextId = tasks.reduce((acc, curr) => (acc > curr) ? acc : curr, 0).id + 1;
    task.id = nextId;
    setTasks([...tasks, task]);
  }

  function handleEditTask(task) {
    setTasks(
      tasks.map(t => {
        if (t.id === task.id) {
          return task;
        }
        return t;
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter(t => t.id !== taskId))
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
