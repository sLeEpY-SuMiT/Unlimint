import React, { useState, useRef, useEffect } from "react";

const Timer = ({ onComplete, userSec, createdTime }) => {
  const [ss, setSS] = useState(0);
  const [seconds, setSeconds] = useState(userSec%60);
  const [minutes, setMinutes] = useState(parseInt(userSec/60));
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (ss > 0) {
        const newSec = ss - 1;
        setMinutes(parseInt(newSec / 60));
        setSeconds(newSec % 60);
        setSS(newSec);
      } else {
        onComplete();
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    setSS(userSec);
  }, []);

  return (
    <div style={{ padding: "8px", background: "#D9D9D9", marginBottom: "8px" }}>
      <div style={{ display: "flex" }}>
        <h3 style={{ margin: "0px" }}>
          {minutes < 10 ? `0${minutes},` : `${minutes},`}
        </h3>
        <h3 style={{ margin: "0px" }}>
          {seconds < 10 ? `0${seconds}` : seconds}
        </h3>
        <div style={{ flex: "1" }} />
        <h2 onClick={onComplete} style={{ margin: "0px 8px" }}>
          X
        </h2>
      </div>
      <div>
        <h6 style={{ margin: "1rem 0" }}>{createdTime}</h6>
      </div>
    </div>
  );
};

export default Timer;
