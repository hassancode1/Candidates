import React from "react";

function CountDown() {
  let seconds = 6;

  function StartCountDown() {
    function MyInterval() {
      seconds -= 1;
      if (seconds < 0) {
        console.log("Less than 0");
      }
      document.getElementById("timed").innerHTML = seconds;
      console.log("Decrement", seconds);
      if (seconds === 0) {
        clearInterval(Inverval);
      }
    }

    let Inverval = setInterval(MyInterval, 1000);
  }

  return (
    <div>
      <h2>
        value: {seconds} | <span id="timed"></span>
      </h2>
      <button onClick={() => StartCountDown()}>Start</button>
    </div>
  );
}

export default CountDown;
