import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BloCard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [nameUser, setNameUser] = useState("");

  //get user blogs
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("token");
      const { data } = await axios.get(`/api/v1/blog/user-blogs/${id}`);
      const nameUser = data?.userBlogs?.userName;

      setNameUser(nameUser);

      if (data && data.userBlogs && data.userBlogs.blogs) {
        console.log(data?.userBlogs.blogs);
        setBlogs(data.userBlogs.blogs);
      } else {
        console.log(`UserBlogs data not found`);
      }

      // console.log(nameUser);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserBlogs();
  }, []);

  return (
    <>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            id={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            // userName={blog.user.userName}
            userName={nameUser}
            time={blog.createdAt}
          />
        ))
      ) : (
        <>
          <h1 align="center" style={{ marginTop: "100px" }}>
            You don't have any blog !!! To Create you first Blog
            <Button onClick={() => navigate("/create-blog")}>click here</Button>
          </h1>
        </>
      )}
    </>
  );
};

export default UserBlogs;
