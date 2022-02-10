import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome To Teacher Tinder</h1>
      <div className="rest">
        <h2>I am a </h2>
        <nav>
          <Link className="user" to="/teacher_portal">
            Teacher
          </Link>
          <Link className="user" to="/school_portal">
            School Representative
          </Link>
        </nav>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
