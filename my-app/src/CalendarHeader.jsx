import { useState } from "react";

export default function CalendarHeader({ currentDate, setCurrentDate }) {
  const [open, setOpen] = useState(false);

  const dateObj = new Date(currentDate);
  const formatted = dateObj.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const changeDay = (delta) => {
    const d = new Date(dateObj);
    d.setDate(d.getDate() + delta);
    setCurrentDate(d.toISOString().slice(0, 10));
  };

  return (
    <div className="calendar-header">
      <button onClick={() => changeDay(-1)}>◀</button>

      <div
        className="calendar-label"
        onClick={() => setOpen(!open)}
      >
        {formatted}
      </div>

      <button onClick={() => changeDay(1)}>▶</button>

      {open && (
        <input
          type="date"
          value={currentDate}
          onChange={(e) => {
            setCurrentDate(e.target.value);
            setOpen(false);
          }}
          className="calendar-picker"
        />
      )}
    </div>
  );
}