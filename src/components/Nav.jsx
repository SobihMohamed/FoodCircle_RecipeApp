import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav">
      <nav className=" d-flex container justify-content-between navbar-expand-lg">
        <h1 className="text-white  ">FOODCIRCLE🍝</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="bi bi-list text-white"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <NavLink className="nav-link fs-3 mx-3" to="/Home">
            Home
          </NavLink>
          <NavLink className="nav-link fs-3 mx-3" to="/Meals">
            Meals
          </NavLink>
          <NavLink className="nav-link fs-3 mx-3" to="/Favourite">
            Favourite
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
