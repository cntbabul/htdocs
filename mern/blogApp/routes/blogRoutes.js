const express = require("express");
const {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  userBlogs,
} = require("../controllers/blogController");
const router = express.Router();

//routes
//all-blogs
router.get("/all-blogs", getAllBlogs);
//get blog
router.get("/get-blog/:id", getBlog);

//post blog
router.post("/create-blog", createBlog);
//update blog
router.put("/update-blog/:id", updateBlog);
//delete blog
router.delete("/delete-blog/:id", deleteBlog);

//user blogs get
router.get("/user-blogs/:id", userBlogs);

module.exports = router;
