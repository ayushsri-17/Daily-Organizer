import { useState, useEffect } from "react";

export default function Todo({ currentDate }) {
  const key = `tasks:${currentDate}`;

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(key);
    setTasks(saved ? JSON.parse(saved) : []);
  }, [key]);

  const save = (data) => {
    setTasks(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  return (
    <div className="todo">
      <h1>Your Tasks</h1>

      <input
        value={text}
        placeholder="Add task"
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="todo-add-btn"
        onClick={() => {
          if (!text) return;
          save([...tasks, { id: Date.now(), text, done: false }]);
          setText("");
        }}
      >
        Add
      </button>

      <ul className="tasks">
        {tasks.map((t) => (
          <li key={t.id}>
            <span className={t.done ? "completed" : ""}>{t.text}</span>
            <button
              className="todo-done-btn"
              onClick={() =>
                save(
                  tasks.map((x) =>
                    x.id === t.id ? { ...x, done: !x.done } : x
                  )
                )
              }
            >
              ✓
            </button>
            <button
              className="todo-delete-btn"
              onClick={() => save(tasks.filter((x) => x.id !== t.id))}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}