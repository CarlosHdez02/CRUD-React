// App.jsx
import { useState } from "react";
import "./App.css";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const onUpdateTask = (id,title)=>{
    setTasks(tasks.map((task)=>{
      if(task.id === id){
        return {...tasks, title:title}
      }
      return task
    }))
   
  }

  const onDeleteHandler = (id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  const addTaskHandler = (task) => {
    const newTask = {
      id: Math.random(),
      title: task,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <h1>CRUD APP</h1>
      <NewTask 
        onAddTask={addTaskHandler}
        />
      <Tasks task={tasks}
         onDeleteTask={onDeleteHandler}
         onUpdateTask={onUpdateTask} />
    </>
  );
}

export default App;
