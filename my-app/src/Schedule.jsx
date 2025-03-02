import React, { useState } from 'react';

export default function Schedule() {
  // State to hold events
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  // Function to handle event creation
  const addEvent = () => {
    if (eventName && eventTime) {
      const newEvent = {
        id: new Date().getTime(),  // Unique ID based on timestamp
        name: eventName,
        time: eventTime,
        description: eventDescription,
      };
      setEvents([...events, newEvent]);
      // Clear input fields
      setEventName('');
      setEventTime('');
      setEventDescription('');
    } else {
      alert("Please enter both event name and time.");
    }
  };

  // Function to remove an event
  const removeEvent = (id) => {
    const filteredEvents = events.filter(event => event.id !== id);
    setEvents(filteredEvents);
  };

  return (
    <div className="schedule" style={{textAlign:"center"}}>
      <h1 style={{color:"purple", fontSize:"3rem"}}>Your Schedule</h1>

      {/* Event Input Form */}
      <div  className="input-container">
        <input style={{borderRadius:"15px", height:"3rem", border:"none", textAlign:"center", margin:"1rem", fontSize:"1.5rem"}}
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input  style={{borderRadius:"15px", height:"3rem",border:"none"}}
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />

        <button  style={{borderRadius:"10px", height:"3rem",width:"6rem", border:"4px solid white", cursor:"pointer", marginTop:"1rem", backgroundColor:"lightpink", fontSize:"1rem", color:"white"}} onClick={addEvent}>Add Event</button>
      </div>

      {/* Schedule Table */}
      <center><table border="4rem"style={{marginTop:"2rem", border:"2px solid purple", backgroundColor:"white", width:"25rem", }}>
        <thead>
          <tr>
            <th >Event Name</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.time}</td>
                <td>
                  <button style={{borderRadius:"5px", height:"2rem",width:"6rem", border:"none", cursor:"pointer", backgroundColor:"orange", fontSize:"1rem", color:"white"}} onClick={() => removeEvent(event.id)}>Remove</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No events scheduled yet.</td>
            </tr>
          )}
        </tbody>
      </table></center>
    </div>
  );
}

