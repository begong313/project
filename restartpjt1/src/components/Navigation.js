import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="groupNav">
      <ul>
        <li className="navItem">
          <Link to="">home</Link>
        </li>
        <li className="navItem">
          <Link to="/profile">profile</Link>
        </li>
        <li className="navItem">
          <Link to="/TODO">ToDo</Link>
        </li>
        <li className="navItem">
          <Link to="/Diary">Diary</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
