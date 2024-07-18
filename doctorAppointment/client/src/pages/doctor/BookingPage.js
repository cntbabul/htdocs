import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";

const BookingPage = () => {
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");
  const [timings, setTimings] = useState("");
  // const [isAvailable, setIsAvailable] = useState("");
  const getUserData = async () => {
    const doc = params.doctorId; // Store the doctor ID in a variable
    console.log("Doctor ID:", doc); // Log the doctor ID

    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById",
        {
          doctorId: params.doctorId,
        },

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    //eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <h1>BookingPage</h1>
      <div className="container">
        {doctors && (
          <>
            <h4>
              {doctors.firstName} {doctors.lastName}
            </h4>
            <h4>Fees: {doctors.feesPerConsultation}/- </h4>
            <h4>
              {/* {doctors.timings.map((timing, index) => (
                <p key={index}>{timing}</p>
              ))} */}
              {/* Timings:- {doctors.timings} - {doctors.timings} */}
              {/* Timings: {doctors.timings[0]} - {doctors.timings[1]} */}
            </h4>
            <div className="d-flex flex-column w-50">
              <DatePicker
                className="m-2"
                format="DD-MM-YYYY"
                onChange={(value) =>
                  setDate(moment(value).format("DD-MM-YYYY"))
                }
              />
              <TimePicker.RangePicker
                className="m-2"
                format="HH:mm"
                onChange={(value) =>
                  setTimings([
                    moment(value[0]).format("HH:mm"),
                    moment(value[1]).format("HH:mm"),
                  ])
                }
              />
              <button className="btn btn-primary mt-2">
                Check Availability
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;
