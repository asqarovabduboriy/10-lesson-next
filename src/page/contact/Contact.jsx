import React,{useState} from "react";
import "./Contact.css";
import {  toast } from "react-toastify";
import HomeFrom from '../../components/homeform/HomeFrom'

const Bot_token = "7103158799:AAFA8uad4zRHrA7_OffopReurqjuv2_Ryac";
const Chat_id = "-4273591369";

const instalistation = {
    fullname: "",
    email: "",
    message: "",
}
const Contact = () => {

    const [contact, setContact] = useState(instalistation)
    let text = ""
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullname, email, message } = contact;
        if (fullname === "" && email === "" && message === "") {
            toast.error("Formani toldiring :)")
        } else {
            setContact(instalistation);
            toast.success("Xabar yuborildi")
            text = "Mizoj haqida: %0A %0A";
            text += `ismi: ${fullname} %0A`;
            text += `email: ${email} %0A`;
            text += `message: ${message} %0A`;

        }


        let url = `https://api.telegram.org/bot${Bot_token}/sendMessage?chat_id=${Chat_id}&text=${text} `;
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.send();
    }

  return (
 <>
    <div className="container">
      <div className="flex_contact">
        <div className="contact_baner">
          <h2>Get in touch</h2>
         <div className="contact_text_p">
         <p>contact@e-comm.ng</p>
          <p>+234 4556 6665 34</p>
          <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
         </div>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="wrapper_input">
                <label>Full Name</label>
              <input value={contact.fullname} onChange={(e) => setContact({ ...contact, fullname: e.target.value })} type="text" placeholder="John Doe" />
              <label>Email</label>
              <input value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} type="text" placeholder="Enter your email" />
              <label>Message</label>
              <textarea  value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} cols="30" rows="10" placeholder="Type here" />
              <button>Send</button>
            </div>
        </form>
      </div>
    </div>

    <HomeFrom/>
 </>

  );
};

export default Contact;
