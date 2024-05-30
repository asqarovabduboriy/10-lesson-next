import React, { useState } from "react";
import "./Payment.css";
import { IoCloseSharp } from "react-icons/io5";
import { FaLeftLong } from "react-icons/fa6";
import { MdCreditCard } from "react-icons/md";
import paypal from "../../assets/imgs/Paypal.svg";
import bank from "../../assets/imgs/Bank.svg";
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {removeAllItemsFromCart} from '../../context/cartSlice'


const Bot_token = "7103158799:AAFA8uad4zRHrA7_OffopReurqjuv2_Ryac";
const Chat_id = "-4273591369";

const instalistation = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  city: "",
};
const Payment = ({ Setclose }) => {
  const [insta, setinsta] = useState(instalistation);
  const catrt = useSelector((state) => state.cart.value);
  const handleclose = () => {
    Setclose(null);
  };
  const dispatch = useDispatch();
let text = "";
  const handleChange = (e) => {
    e.preventDefault();

    if (insta.name === "" && insta.email === "" && insta.phone === "" && insta.city === "" && insta.lastname === "") {
        toast.error("Formani toldiring :)")
    }else{
        setinsta(instalistation);
    catrt.forEach((el) => {
      text = "Buyutmat: %0A %0A";
      text += `ismi: ${insta.name} %0A`;
      text += `familiyasi: ${insta.lastname} %0A`;
      text += `email: ${insta.email} %0A`;
      text += `phone: ${insta.phone} %0A`;
      text += `Noomi: ${el.title} %0A`;
      text += ` Narxi: ${el.price} %0A `;
      text += `Soni: ${el.quantity} %0A %0A`;
    },
     toast.success("Buyurtmangiz qabul qilindi")
    )

    dispatch(removeAllItemsFromCart())
    Setclose(null);

};
    


    let url = `https://api.telegram.org/bot${Bot_token}/sendMessage?chat_id=${Chat_id}&text=${text} `;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
  };

  console.log(insta);
  return (
    <>
      <div className="big_paymnet" onClick={() => handleclose()}></div>
      <div className="payment">
        <div className="payment_close">
          <button>
            <FaLeftLong />
          </button>
          <button onClick={() => Setclose(null)}>
            <IoCloseSharp />
          </button>
        </div>
        <h1 className="payment_title">Make Payment</h1>
        <div className="payment_input_wrapper">
          <form onSubmit={handleChange}>
            <div className="payment_input_big_wrapper">
              <div className="payment_input">
                <input
                  value={insta.name}
                  onChange={(e) => setinsta({ ...insta, name: e.target.value })}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  value={insta.lastname}
                  onChange={(e) =>
                    setinsta({ ...insta, lastname: e.target.value })
                  }
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="payment_input_two">
                <input 
                  value={insta.email}
                  onChange={(e) =>
                    setinsta({ ...insta, email: e.target.value })
                  }
                  type="text"
                  placeholder="email address"
                />
                <textarea type="text" placeholder="Address for Delivery" />
                <input
                  value={insta.city}
                  onChange={(e) => setinsta({ ...insta, city: e.target.value })}
                  className="input_city"
                  type="text"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="payment_input payment_input_mobilnni">
              <input
                value={insta.phone}
                onChange={(e) => setinsta({ ...insta, phone: e.target.value })}
                type="text"
                placeholder="Mobile Number"
                className=""
              />
            </div>
          </form>
          <div className="payment_checkbox">
            <h2>Select Method of Payment</h2>
            <div className="wrapper_checkbox">
              <div className="payment_wrapper_checkbox">
                <MdCreditCard />
                <p>Credit Card Or Debit</p>
                <input type="checkbox" />
              </div>
              <div className="payment_input">
                <input
                  className="input_phone"
                  type="text"
                  placeholder="mobile number"
                  style={{ width: "100%", marginTop: "15px" }}
                />
              </div>
            </div>
            <div className="wrapper_two_checkbox">
              <div className="payment_wrapper_checkbox">
                <img src={paypal} alt="" />
                <p>Paypal</p>
                <input type="checkbox" />
              </div>
              <div className="payment_wrapper_checkbox">
                <img src={bank} alt="" />
                <p>Bank Transfer</p>
                <input type="checkbox" />
              </div>
            </div>
            <div className="payment_btn">
              <button onClick={handleChange}>Go to Payment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
