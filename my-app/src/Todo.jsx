import { useEffect, useState } from "react";
import { getDay, saveDay } from "./api";

export default function Todo({ currentDate }) {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getDay(currentDate).then(data => {
      setTasks(data.tasks || []);
    });
  }, [currentDate]);

  const updateTasks = (newTasks) => {
    setTasks(newTasks);
    saveDay(currentDate, { tasks: newTasks });
  };

  return (
    <div className="todo">
      <h1>Your Tasks</h1>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add task"
      />

      <button
        className="todo-add-btn"
        onClick={() => {
          if (!text) return;
          updateTasks([...tasks, { text, done: false }]);
          setText("");
        }}
      >
        Add
      </button>

      <ul className="tasks">
        {tasks.map((t, i) => (
          <li key={i}>
            <span className={t.done ? "completed" : ""}>{t.text}</span>

            <button
              className="todo-done-btn"
              onClick={() =>
                updateTasks(
                  tasks.map((x, j) =>
                    j === i ? { ...x, done: !x.done } : x
                  )
                )
              }
            >
              ✓
            </button>

            <button
              className="todo-delete-btn"
              onClick={() =>
                updateTasks(tasks.filter((_, j) => j !== i))
              }
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}