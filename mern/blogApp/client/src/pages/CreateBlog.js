import React, { useState } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const id = localStorage.getItem("token");
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/blog/create-blog", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        alert("Blog created ");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          width={"95%"}
          margin={"auto"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          boxShadow={"10px 10px 20px #ccc"}
          padding={3}
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h4" fontFamily="bold" textAlign={"center"}>
            Create a Blog
          </Typography>
          <InputLabel
            sx={{
              mb: 1,
              mt: 2,
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Title:
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <InputLabel
            sx={{
              mb: 1,
              mt: 2,
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Description:
          </InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={4}
            required
          />
          <InputLabel
            sx={{
              mb: 1,
              mt: 2,
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Banner:
          </InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handleChange}
            variant="outlined"
          />

          <Button
            type="submit"
            sx={{ mt: 2, borderRadius: 4 }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default CreateBlog;
