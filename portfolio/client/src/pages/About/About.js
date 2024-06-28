import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-img">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczONPYLvUkTUVPkho4Lb_el-L8he5U0XRUSHVjys3Y8K5AkulFOKevglt9rIt0jE6GYPimZ9s2pGlEpVvtRt-VKBGSeGj12b0ZTkNyNC5XGFOOJEyg5ABZY6h27Rm-tY5iq4gx9cWZXJMxchcEb5r7sNhQ=w794-h947-s-no-gm?authuser=0"
            alt="profile-pic"
          />
        </div>
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-content">
          <h1>About me</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem recusandae id in beatae est ipsam quo laborum
            deserunt quisquam eveniet reiciendis, alias eos repellat. Fuga
            corrupti voluptas suscipit sapiente atque nostrum, maiores accusamus
            tempora modi, earum esse illum?
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
