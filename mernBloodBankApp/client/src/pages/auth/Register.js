import React from "react";
import banner from "../../../src/assets/images/bloodDonateAppBanner2.jpg";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import Form from "../../components/shared/form/Form";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row ">
          <div className="col-md-8 form-banner ">
            <img src={banner} alt="registerImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
