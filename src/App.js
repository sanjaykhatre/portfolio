import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar";

function App() {
  const [active, setActive] = useState({
    about: true,
    resume: false,
    portfolio: false,
    contact: false,
  });
  function handleChange(activeBar) {
    console.log({ activeBar });
    setActive({
      about: false,
      resume: false,
      portfolio: false,
      contact: false,
      [activeBar]: true,
    });
  }
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Navbar active={active} handleChange={handleChange} />
        <About active={active} />
        <Resume active={active} />
        <Portfolio active={active} />
      </div>
    </div>
  );
}

export default App;
