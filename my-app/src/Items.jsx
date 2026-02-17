import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import "./Items.css";
import Todo from "./Todo";
import Schedule from "./Schedule";
import Thoughts from "./TextEditor";
import Achievements from "./Achievements";
import Uploader from "./Books";

import logo from "./assets/download.png";

export default function Items() {
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  return (
    <>
      <div className="header">
        <img src={logo} className="logo" />
      </div>

      <main className="page">
        {/* CALENDAR AT THE TOP */}
        <CalendarHeader
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />

        {/* DASHBOARD */}
        <div className="item-container">
          <div className="dashboard-left">
            <Todo currentDate={currentDate} />
            <Schedule currentDate={currentDate} />
          </div>

          <div className="dashboard-right">
            <Thoughts currentDate={currentDate} />
            <Achievements currentDate={currentDate} />
          </div>
        </div>

        {/* FILES */}
        <Uploader currentDate={currentDate} />
      </main>
    </>
  );
}