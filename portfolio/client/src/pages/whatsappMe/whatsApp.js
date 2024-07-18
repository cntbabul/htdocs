import React from "react";
import "./whatsApp.css";
// import { FaWhatsapp } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const WhatsApp = () => {
  return (
    <>
      <div className="container whatsapp">
        <h6>**Currently mail not working please suggest me in Whatsapp**</h6>
        <a className="btn ad-btn" href="https://wa.me/+91-9707073571">
          <FaSquareWhatsapp size={30} /> &nbsp; Click to Send in Whatsapp
        </a>
      </div>
    </>
  );
};

export default WhatsApp;
