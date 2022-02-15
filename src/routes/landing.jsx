import React from "react";
import "./landing.css";
import { Link, Outlet } from "react-router-dom";

export default function Landing() {
  console.log("I am here");

  return (
    <div className="landing">
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
  );
}
