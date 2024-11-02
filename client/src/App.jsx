import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className=" w-full h-screen">
      <nav>
        <Navbar />
      </nav>
      <main className="h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
