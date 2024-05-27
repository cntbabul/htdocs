import React from "react";
import banner from "../../../src/assets/images/bloodDonateAppBanner2.jpg";
import Form from "../../components/shared/form/Form";

const Register = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form form-banner">
          <img src={banner} height="100%" width="100%" alt="registerBanner" />
        </div>
        <div className="col-md-4 form-container">
          <Form
            formTitle={"Register"}
            submitBtn={"Register"}
            formType={"register"}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
