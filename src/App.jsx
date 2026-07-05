import { useState } from "react";
import "./styles/main.css";
import Navbar from "./components/Navbar.jsx";
import EmployeeCard from "./components/EmployeeCard.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  const [count, setCount] = useState(0);
  const increment = () => { setCount(count + 1); };
  const decrement = () => { setCount(count - 1); };
  const reset = () => { setCount(0); };
  return (
    <>
      <Navbar />
      <div className="Appmain">
        <div className="dashboardmain">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="leftpanel">
          <Header class="mainheader" />

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
          <div className="employeeheader">
            <EmployeeCard name="John Doe" role="Software Engineer" salary={50000} />
            <EmployeeCard name="Siva" role="QA Engineer" salary={40000} />
            <EmployeeCard name="Prasanna" role="Manager" salary={100000} />
          </div>
        </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;