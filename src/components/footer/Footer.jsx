import React from "react";
import "./Footer.css";
import logo from "../../assets/imgs/logo.svg";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import img from '../../assets/imgs/Brands.svg'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="flex_elemnt">
            <div className="text_vontnet_footer">
              <div className="logo_footer">
                <img src={logo} alt="" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever.Since the 1500s, when an unknown
                  printer.
                </p>
              </div>
              <div className="folow">
                <h2>Follow Us</h2>
                <p>
                  Since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </p>
                <div className="icons_footer">
                  <FaFacebook />
                  <FaTwitter />
                </div>
              </div>
              <div className="folow contact_us">
                <h2>Contact Us</h2>
                <p className="contact_p">
                  E-Comm , 4578 Marmora Road, Glasgow D04 89GR
                </p>
              </div>
            </div>
            <div className="footer_text_content">
              <div className="footer_text_one">
                <h2>Infomation</h2>
                <p>About Us </p>
                <p>Infomation</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>

              <div className="footer_text_one">
                <h2>Service</h2>
                <p>About Us </p>
                <p>Infomation</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>

              <div className="footer_text_one">
                <h2>My Account</h2>
                <p>About Us </p>
                <p>Infomation</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>

              <div className="footer_text_one">
                <h2>Our Offers</h2>
                <p>About Us </p>
                <p>Infomation</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </div>
            <div className="line-footer"></div>
            <div className="footer_end">
              <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
