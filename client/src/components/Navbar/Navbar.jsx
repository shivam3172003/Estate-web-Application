import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../../Assets/manBy_logo.webp";
import { Link,NavLink } from "react-router-dom";
import menuIcon from "/menu.png";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
          <span className="span">ManbyState</span>
        </Link>
        <NavLink to="/" className="a1">
          Home
        </NavLink>
        <NavLink to="/about" className="a1">
          About
        </NavLink>
        <NavLink to="/contact" className="a1">
          Contact
        </NavLink>
        <Link to="/" className="a1">
          Agents
        </Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <NavLink to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </NavLink>
          </div>
        ) : (
          <>
            <NavLink to="/login" className="a1">
              Sign In
            </NavLink>
            <NavLink to="/register" className="register1">
              Sign Up
            </NavLink>
          </>
        )}

        <div className="menuIcon">
          <img src={menuIcon} alt="" onClick={() => setOpen((prev) => !prev)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/" className="a1">
            Home
          </Link>
          <Link to="/about" className="a1">
            About
          </Link>
          <Link to="/contact" className="a1">
            Contact
          </Link>
          <Link to="/" className="a1">
            Agents
          </Link>
          {currentUser ? (
            <Link to="/profile" className="a1">
              Profile
            </Link>
          ) : (
            <>
              <Link to="/login" className="a1">
                Sign In
              </Link>
              <Link to="/register" className="a1">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
