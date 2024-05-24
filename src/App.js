import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div class="main-content">
        <Navbar />
        <About />
      </div>
    </div>
  );
}

export default App;
