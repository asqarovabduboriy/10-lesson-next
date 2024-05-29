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
import { useSelector } from "react-redux";
const Navbar = () => {
  const [close, setClose] = useState(false);
  const [active, setActive] = useState(false);

  let wishlist = useSelector((state) => state.wishslice.value);
  let cart = useSelector((state) => state.cart.value);

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
          <div
            className={` ${
              active ? "small_header_active" : "small_header"
            } small_header_mobilni`}
          >
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
                  <NavLink to="/">
                  <IoMdHome className="home_icon_mobilni" />
                  </NavLink>
                  <p className="text_home_mobil">Home</p>
                </div>
                <div className="account">
                   <NavLink to="/admin">
                    <FaRegUser />
                  </NavLink>
                  <p>Account</p>
                </div>
                <div className="wishlist">
                  <div className="like">
                    <span>{wishlist.length}</span>
                  </div>
                 <NavLink to="/wishlist">
                    <CiHeart />
                  </NavLink>
                  <p>Wishlist</p>
                </div>
                <div className="cart">
                  <div className="cart_length">
                    <span>{cart.length}</span>
                  </div>
                  <NavLink to="/cart">
                    <IoCartOutline />
                  </NavLink>
                  <p>Cart</p>
                </div>
                <b>items</b>
                <p className="zero_item">$0.00</p>
                <FaSearch className="search" />
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="big_header">
            <div className="logo">
            <NavLink to="/"> <img src={logo} alt="" /></NavLink>            </div>
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
           <NavLink to="/"> <img src={logo} alt="" /></NavLink>
            <Sidebar close={close} setClose={setClose} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
