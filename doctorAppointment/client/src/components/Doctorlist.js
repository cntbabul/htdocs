import React from "react";
import { useNavigate } from "react-router-dom";

const Doctorlist = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card p-2 m-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <div className="card-header">
          <b>
            Dr {doctor.firstName} {doctor.lastName}
          </b>
        </div>
        <div className="card-body">
          <p>
            <b>Specialization:-</b>
            {doctor.specialization}
          </p>
          <p>
            <b>Experience:-</b>
            {doctor.experience}
          </p>
          <p>
            <b>Fees Per Consultation:-</b>
            {doctor.feesPerConsultation}
          </p>
          <p>
            <b>Timings:- </b>
            {doctor.timings[0]} - {doctor.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default Doctorlist;
