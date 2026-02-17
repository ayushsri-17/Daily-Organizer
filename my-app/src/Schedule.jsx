import { useState, useEffect } from "react";

export default function Schedule({ currentDate }) {
  const key = `schedule:${currentDate}`;

  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(key);
    setEvents(saved ? JSON.parse(saved) : []);
  }, [key]);

  const save = (data) => {
    setEvents(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  return (
    <div className="schedule">
      <h1>Your Schedule</h1>

      <input
        placeholder="Event name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button
        className="todo-add-btn"
        onClick={() => {
          if (!name || !time) return;
          save([...events, { id: Date.now(), name, time }]);
          setName("");
          setTime("");
        }}
      >
        Add
      </button>

      <div className="schedule-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan="3">No events</td>
              </tr>
            ) : (
              events.map((e) => (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.time}</td>
                  <td>
                    <button
                      className="todo-delete-btn"
                      onClick={() =>
                        save(events.filter((x) => x.id !== e.id))
                      }
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}