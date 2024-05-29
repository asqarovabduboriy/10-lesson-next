import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/logo.svg";
import { IoCloseSharp } from "react-icons/io5";

const Sidebar = ({ setClose, close }) => {
  return (
    <>
     {
        close === true ? <div className="sidebar_wrapper" onClick={() => setClose(null)}></div> : null

     }
      <div className={` mobilni_header_sidebar  ${close ? "add" : ""} `}>
        <div className="logo_sidebar">
          <img src={logo} alt="" />
          <button onClick={() => setClose((p) => !p  )}>
            <IoCloseSharp />
          </button>
        </div>
        <nav className="nav_sidebar">
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/Bags">BAGS</NavLink>
            </li>
            <li>
              <NavLink to="/Sneakers">SNEAKERS</NavLink>
            </li>
            <li>
              <NavLink to="/Belt">BELT</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
