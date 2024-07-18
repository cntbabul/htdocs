import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  //handleChange
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/v1/user/register", {
        userName: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });

      if (data.success) {
        toast.success("Registration Successful");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow={"10px 10px 20px #ccc"}
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h6" padding={2}>
            R E G I S T E R
          </Typography>
          <TextField
            placeholder="Name"
            value={inputs.name}
            name="name"
            margin="normal"
            type="text"
            required
            onChange={handleChange}
          />
          <TextField
            placeholder="Email"
            value={inputs.email}
            name="email"
            margin="normal"
            type="email"
            required
            onChange={handleChange}
          />
          <TextField
            placeholder="Password"
            value={inputs.password}
            name="password"
            margin="normal"
            type="password"
            required
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" sx={{ borderRadius: 3 }}>
            Submit
          </Button>
          <Button onClick={() => navigate("/login")}>
            Already Registered ? Please Login
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Register;
