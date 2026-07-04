import { useState } from "react";
import "./styles/main.css";
function App() {
  const [count, setCount] = useState(0);
const increment = () => {setCount(count + 1);};
const decrement = () => {setCount(count - 1);};
const reset = () => {setCount(0);};
  return (
    <>
    <div className="counterheader">
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={increment} className="increment">
        Increment
      </button>
      <button onClick={decrement} className="decrement">
        Decrement
      </button>
           <button onClick={reset} className="reset">
        Reset
      </button>
      </div>
          </>
  );
}

export default App;