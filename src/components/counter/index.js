// counter component
import { useState } from "react";

function Counter() {
  //initalise the state variable
  const [counter, setCounter] = useState(1);
  const increaseCount = () => setCounter(counter * 10);
  const decreaseCount = () => setCounter(counter / 10);

  return (
    <div className="counter">
      <button onClick={decreaseCount}>Decrease</button>
      {counter}
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export default Counter;
