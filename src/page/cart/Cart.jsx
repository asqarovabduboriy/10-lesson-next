import React from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../context/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeFromCart,
} from "../../context/cartSlice";

const Cart = () => {
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart.value);

  let total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);

  let total_price = total.toFixed(2);

  let carts = cart?.map((el) => (
    <div className="cart_add" key={el.id}>
      <div className="flex_card">
      <div className="close_btn">
            <button onClick={() => dispatch(removeFromCart(el))}>
              <IoCloseSharp />
            </button>
          </div>
        <div className="img_cart">
          <NavLink to={`/product/${el.id}`}>
            <img src={el.image} alt="" />
          </NavLink>
          <h2 title={el.title}>{el.title}</h2>
        </div>

        <div className="price_cart">
          <p>${el.price}</p>
          <div className="cart_count">
            <button
              disabled={el.quantity === 1}
              onClick={() => dispatch(decrementCartQuantity(el))}
            >
              -
            </button>
            <button>{el.quantity}</button>
            <button
              disabled={el.quantity === 5}
              onClick={() => dispatch(incrementCartQuantity(el))}
            >
              +
            </button>
          </div>
          <p>${el.price * el.quantity}</p>
        </div>
      </div>
      <div className="line_cart"></div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <div className="cart_text">
          <p>PRODUCT</p>
          <div className="cart_text_two">
            <p>Price</p>
            <p>QTY </p>
            <p>Unit Price</p>
          </div>
        </div>
        <div className="line_cart"></div>

        <div className="flex_wrap">{carts}</div>
        <div className="total_big">
          <form className="form_cupon">
            <input type="text" placeholder="Voucher code" />
            <button>redem</button>
          </form>

          <div className="total">
            <div className="sub_total">
              <p>sub total</p>
              <p>${total_price}</p>
            </div>
            <div className="sub_total">
              <p> Shipping fee</p>
              <p>${total_price}</p>
            </div>
            <div className="sub_total">
              <p>Cupon</p>
              <p>No</p>
            </div>
            <div className="line_cart"></div>
            <div className="sub_total">
              <b>Total</b>
              <b>${total_price}</b>
            </div>
            <div className="btn_cart">
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
