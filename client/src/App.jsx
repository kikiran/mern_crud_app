import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className=" w-full bg-amber-100 ">
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
