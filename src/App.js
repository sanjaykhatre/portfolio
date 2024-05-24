import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <About />
        <Resume />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
