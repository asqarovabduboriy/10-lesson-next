import React, { useState } from "react";
import "./Navbar.css";
import { FaHome, FaRegUser, FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import logo from "../../assets/imgs/logo.svg";
import { NavLink } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [close, setClose] = useState(false);
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <header>
        <div className="container">
          <div className={` ${active ? "small_header_active" : 'small_header'} small_header_mobilni` }>
            <div className="select_wrapper">
              <select>
                <option>En</option>
              </select>
              <select>
                <option>USD</option>
              </select>
            </div>
            <div className="icons">
              <div className="mobilni_icons">
                <div className="home">
                  <IoMdHome />
                  <p className="text_home">Home</p>
                </div>
                <div className="account">
                  <FaRegUser />
                  <p>Account</p>
                </div>
                <div className="wishlist">
                  <CiHeart />
                  <p>Wishlist</p>
                </div>
                <div className="cart">
                  <IoCartOutline />
                  <p>Cart</p>
                </div>
                <b>items</b>
                <p>$0.00</p>
                <FaSearch className="search" />
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="big_header">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <nav>
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
          <div className="menu_mobilni">
            <button
              className="hamburger_menu"
              onClick={() => setClose((p) => !p)}
            >
              <GiHamburgerMenu />
            </button>
            <img src={logo} alt="" />
            <Sidebar close={close} setClose={setClose} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
