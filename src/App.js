import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";

const App = () => {
  const [timers, setTimers] = useState([]);
  const [newTimer, setNewTimer] = useState(0);

  const formatDate = (date) => {
    return `${date.getDate() > 9 ? date.getDate() : "0" + date.getDate()}.${
      date.getMonth() + 1 > 9
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)
    }.${date.getFullYear()} ${
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    }`;
  };

  useEffect(() => {}, []);
  console.log(timers);
  return (
    <div style={{ width: "60vw", display: "flex", margin: "1rem auto" }}>
      <div style={{ width: "50%" }}>
        {timers.map((timer, i) => (
          <Timer
            key={i}
            onComplete={() => {
              console.log(timer);
              const deleteOne = timers.filter((t) => {
                return timer.created !== t.created;
              });
              console.log(deleteOne);
              setTimers(deleteOne);
            }}
            userSec={timer.sec}
            createdTime={timer.created}
          />
        ))}
      </div>
      <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
        <input
          style={{ padding: "8px", margin: "0 8px 8px 8px" }}
          type="text"
          onChange={(e) => {
            setNewTimer(parseInt(e.target.value));
          }}
        />
        <button
          style={{
            background: "#D9D9D9",
            outline: "none",
            border: "none",
            padding: "8px",
            margin: "8px",
          }}
          onClick={() => {
            setTimers([
              ...timers,
              { sec: newTimer, created: formatDate(new Date()) },
            ]);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default App;
