import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";



const App = () => { 
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
          id: 1,
          text: 'Doctor\'s Appointment',
          day: 'Feb 5th @ 2:30',
          reminder: true
      },
      {
          id: 2,
          text: 'Meeting with Ahsan',
          day: 'Sept 26th @ 2:00',
          reminder: true
      },
      {
          id: 3,
          text: 'Food Shopping',
          day: 'Feb 5th @ 2:30',
          reminder: false
      }
  ]
  )

  //Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  //Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id == id ? {...task, reminder : !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder}/> : 'No tasks anymore'}
      
    </div>
  );


}

export default App;
