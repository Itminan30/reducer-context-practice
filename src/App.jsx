import './App.css'
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'
import TasksContextProvider from './Context/TasksContextProvider'

function App() {

  return (
    <TasksContextProvider>
      <h1>Prague Itinerary</h1>
      <AddTask />
      <TaskList />
    </TasksContextProvider>
  )
}

export default App
