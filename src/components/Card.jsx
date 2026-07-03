import { use } from "react";
import { useState } from "react";

function Card(props) {
    const [count, setCount] = useState(0);
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.value}</p>
            <p>{props.percentage}</p>
            <p>{props.bgcolor}</p>
            <p>{count}</p>
                  <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}> Decrease</button>

        </div>
    );
}
export default Card;