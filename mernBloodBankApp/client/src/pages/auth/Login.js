import React from "react";
import banner from "../../../src/assets/images/bloodDonateAppBanner.jpg";
import Form from "../../components/shared/form/Form";

const Login = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner ">
          <img src={banner} alt="loginBanner" />
        </div>

        <div className="col-md-4 form-container">
          <Form
            formTitle={"Login Page"}
            submitBtn={"Login"}
            formType={"login"}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
