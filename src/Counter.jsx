import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (startCount && startCount === true) {
      let interval = setInterval(() => {
        if (startCount) {
          setCounter((prev) => prev + 1);
        } else {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [startCount]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          marginTop: "1rem"
        }}
      >
        {counter}
      </div>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <button
          type="button"
          style={{
            marginRight: "0.5rem",
            padding: "8px",
            background: "#2499EF",
            color: "#FFF",
            borderRadius: "4px",
            cursor: "pointer"
          }}
          onClick={() => setStartCount(!startCount)}
        >
          {startCount ? "Pause" : "Start"}
        </button>
        <button
          type="button"
          style={{
            marginLeft: "0.5rem",
            padding: "8px",
            background: "#2499EF",
            color: "#FFF",
            borderRadius: "4px",
            cursor: "pointer"
          }}
          onClick={() => {
            setStartCount(false);
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
