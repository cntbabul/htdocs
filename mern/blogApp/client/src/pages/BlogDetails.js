<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
>>>>>>> 071011f9e65f8c6381d007b45e9d76300fb7bab8
const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
<<<<<<< HEAD

  //get blog details
  const getBlogDetails = async () => {
=======
  // get blog details
  const getBlogDetail = async () => {
>>>>>>> 071011f9e65f8c6381d007b45e9d76300fb7bab8
    try {
      const { data } = await axios.get(`/api/v1/blog/get-blog/${id}`);
      if (data?.success) {
        setBlog(data?.blog);
        setInputs({
          title: data?.blog.title,
          description: data?.blog.description,
          image: data?.blog.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
<<<<<<< HEAD
    getBlogDetails();
  }, [id]);

  //input change
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //form data
=======
    getBlogDetail();
  }, [id]);

  // input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //form
>>>>>>> 071011f9e65f8c6381d007b45e9d76300fb7bab8
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/v1/blog/update-blog/${id}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
<<<<<<< HEAD
        alert("Blog updated ");
=======
        toast.success("Blog Updated");
>>>>>>> 071011f9e65f8c6381d007b45e9d76300fb7bab8
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };
<<<<<<< HEAD

  return (
    <>
=======
  console.log(blog);
  return (
    <v>
>>>>>>> 071011f9e65f8c6381d007b45e9d76300fb7bab8
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
<<<<<<< HEAD
            Update Blog
          </Typography>
          <InputLabel
            sx={{
              mb: 1,
              mt: 2,
              fontSize: "18px",
              fontWeight: "bold",
            }}
=======
            Edit Blog
          </Typography>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
>>>>>>> 071011f9e65f8c6381d007b45e9d76300fb7bab8
          >
            Title:
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
<<<<<<< HEAD
=======
            margin="normal"
>>>>>>> 071011f9e65f8c6381d007b45e9d76300fb7bab8
            variant="outlined"
            required
          />
          <InputLabel
<<<<<<< HEAD
            sx={{
              mb: 1,
              mt: 2,
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Description:
=======
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Description
>>>>>>> 071011f9e65f8c6381d007b45e9d76300fb7bab8
          </InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
<<<<<<< HEAD
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
=======
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Image URL
>>>>>>> 071011f9e65f8c6381d007b45e9d76300fb7bab8
          </InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handleChange}
<<<<<<< HEAD
            variant="outlined"
          />

          <Button
            type="submit"
            sx={{ mt: 2, borderRadius: 4 }}
            variant="contained"
            color="warning"
          >
            Submit
          </Button>
        </Box>
      </form>
    </>
=======
            margin="normal"
            variant="outlined"
            required
          />
          <Button type="submit" color="warning" variant="contained">
            UPDATE
          </Button>
        </Box>
      </form>
    </v>
>>>>>>> 071011f9e65f8c6381d007b45e9d76300fb7bab8
  );
};
export default BlogDetails;
