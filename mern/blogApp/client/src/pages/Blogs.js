import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BloCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  //get all blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("/api/v1/blog/all-blogs");
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <>
<<<<<<< HEAD
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            id={blog?._id}
            is
            User={localStorage.getItem("token") === blog?.user._id}
            title={blog?.title}
            description={blog?.description}
            image={blog?.image}
            userName={blog?.user.userName}
            time={blog?.createdAt}
          />
        ))}
=======
      <div>
        {blogs &&
          blogs.map((blog) => (
            <BlogCard
              id={blog?._id}
              isUser={localStorage.getItem("token") === blog?.user?._id}
              title={blog?.title}
              description={blog?.description}
              image={blog?.image}
              // username={blog?.user?.username}
              userName={blog?.user?.userName}
              time={blog.createdAt}
            />
          ))}
      </div>
>>>>>>> 071011f9e65f8c6381d007b45e9d76300fb7bab8
    </>
  );
};

export default Blogs;
