import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="flex items-center justify-center gap-[600px] py-5">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <ul className="flex gap-4 " id="sidebar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
  );
};

export default Nav;
