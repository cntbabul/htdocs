const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");
const mongoose = require("mongoose");

//get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find({}).populate("user");
    if (!blogs) {
      return res.status(400).json({ success: false, message: "No blog found" });
    }
    console.log(blogs);
    res.status(200).json({
      blogCount: blogs.length,
      success: true,
      message: "All blogs",
      blogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error(getAllBlogsController)",
    });
  }
};

//get blog
exports.getBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
    if (!blog) {
      return res.status(400).json({ success: false, message: "No blog found" });
    }
    res.status(200).json({
      success: true,
      message: "Blog fetched successfully",
      blog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error(getBlogController)",
    });
  }
};

//post blog
exports.createBlog = async (req, res) => {
  try {
    const { title, description, image, user } = req.body;
    if (!title || !description || !user) {
      return res
        .status(400)
        .json({ success: false, message: "Please add all fields" });
    }

    const userExist = await userModel.findById(user);
    if (!userExist) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });
    }

    // console.log(require.body);
    const newBlog = new blogModel({
      title,
      description,
      image,
      user,
    });
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({ session });
    userExist.blogs.push(newBlog);
    await userExist.save({ session });
    await session.commitTransaction();
    await newBlog.save();
    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error(createBlogController)",
    });
  }
};

//update blog
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, author } = req.body;
    const blog = await blogModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Eroor while Updating Blog(updateBlogController)",
    });
  }
};

//delete blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel
      .findByIdAndDelete(req.params.id)
      .populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error(deleteBlogController)",
    });
  }
};

//user blogs controller
exports.userBlogs = async (req, res) => {
  try {
    const userBlogs = await userModel.findById(req.params.id).populate("blogs");
    if (!userBlogs) {
      return res
        .status(400)
        .json({ success: false, message: "You dont have any blogs" });
    }
    res.status(200).json({
      blogCount: userBlogs.blogs.length,
      success: true,
      message: "User blogs fetched successfully",
      userBlogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error(userBlogsController)",
      error,
    });
  }
};
