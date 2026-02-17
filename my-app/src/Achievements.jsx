import { useEffect, useState } from "react";

export default function Achievements({ currentDate }) {
  const key = `achievements:${currentDate}`;
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(key);
    setItems(saved ? JSON.parse(saved) : []);
  }, [key]);

  const save = (data) => {
    setItems(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  const removeItem = (index) => {
    save(items.filter((_, i) => i !== index));
  };

  return (
    <div className="achievements-container">
      <h2>Achievements</h2>

      <input
        placeholder="Small win"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="todo-add-btn"
        onClick={() => {
          if (!text) return;
          save([...items, text]);
          setText("");
        }}
      >
        Add
      </button>

      <ul>
        {items.map((a, i) => (
          <li key={i}>
            <span>{a}</span>
            <button
              className="todo-delete-btn"
              onClick={() => removeItem(i)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}