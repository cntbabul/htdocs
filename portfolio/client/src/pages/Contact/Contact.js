import React, { useState } from "react";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const nam = "";

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg || !nam) {
        alert("Please Contact on Whataspp😞");
      }

      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        email,
        name,
        msg,
      });
      if (res.data.success) {
        alert("Please Contact on Whataspp😞");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line left-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWn_1S-xxaPjyDdPeJkk9WTWKcI2ZTkONvQ&s"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="row">
                <div className="card2 d-flex card border-0 mt-3 ">
                  <div className="row">
                    <h6>
                      Contact With
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                      <BsGithub color="black" size={30} className="ms-2" />
                      <BsFacebook color="blue" size={30} className="ms-2" />
                      <BsInstagram color="#F56040" size={30} className="ms-2" />
                    </h6>
                  </div>
                </div>
                <div className="row px-3 mb-4" id="row-or">
                  {/* <div className="line" /> */}
                  <div className="or text-center">- - - - - OR - - - - -</div>
                  {/* <div className="line" /> */}
                </div>
                <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Write Your amazing Name"
                    className="mb-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="row px-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email is here"
                    className="mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="row px-3">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Not working Currently!! Please Contact on Whataspp😞 by ckicking Below button."
                    className="mb-3"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>

                <div className="row px-3">
                  <button className="btn ad-btn" onClick={handleSubmit}>
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
