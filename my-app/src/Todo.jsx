import { useState, useEffect } from "react";
import './Items.css';
import ProgressBar from "@ramonak/react-progress-bar";

export default function Todo() {
  const [task, setTask] = useState(''); // Task to be added, initialized as empty
  const [tasks, setTasks] = useState([]); // List of tasks, initialized as empty

  // Function to add a task
  const addTask = () => {
    if (task) {
      const newTasks = [...tasks, { name: task, status: "Not Started" }]; // Create new tasks array
      setTasks(newTasks); // Update state with new tasks
      setTask(''); // Clear input after adding

      // Update local storage with new tasks
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
  };

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []); // Empty dependency array ensures this runs once on mount

  // Function to delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Remove task by index
    setTasks(newTasks); // Update tasks state
    localStorage.setItem('tasks', JSON.stringify(newTasks)); // Update local storage
  };

  // Function to mark a task as completed
  const markAsCompleted = (index) => {
    const updatedTasks = tasks.map((t, i) => 
      i === index ? { ...t, status: "Completed" } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update local storage
  };

  // Calculate progress percentage
  const calculateProgress = () => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.status === "Completed").length;
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0; // Avoid division by zero
  };

  return (
    <>
      <br />
      <h1 style={{ fontSize: "3rem", textAlign:"center", color:"purple"}}>Your Tasks</h1>
      <ProgressBar completed={calculateProgress()} />
      <div>
        <input 
          style={{marginLeft:"1rem", fontFamily: "sans-serif", fontSize: "1.8rem", border: "none", height: "3rem", textAlign: "center", borderRadius:"15px", width:"90%" }}
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="todo-add-btn" onClick={addTask}>Add task</button>
        <ul>
          <div className="tasks">
            {tasks.map((t, index) => (
              <li key={index} className={t.status === "Completed" ? "completed" : ""}>
                {t.name} 
                <button className="todo-done-btn" onClick={() => markAsCompleted(index)}>Done</button>
                <button className="todo-delete-btn" onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
}
