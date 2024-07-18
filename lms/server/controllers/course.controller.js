import Course from "../model/course.model.js";
import fs from "fs/promises";
import AppError from "../utils/error.util.js";
import cloudinary from "cloudinary";

//getAllCourses
const getAllCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({}).select("-lectures");
    res.status(200).json({
      success: true,
      message: "All courses fetched successfully",
      courses,
    });
  } catch (error) {
    console.log(error);
    return next(new AppError(error.message, 500));
  }
};

//getLecturesByCourseId
const getLecturesByCourseId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    const lectures = course.lectures;
    res.status(200).json({
      success: true,
      message: "Lectures fetched successfully",
      lectures,
    });
  } catch (error) {
    console.log(error);
    return next(new AppError(error.message, 500));
  }
};

//createCourse
const createCourse = async (req, res, next) => {
  try {
    const { title, description, category, createdBy } = req.body;

    if (!title || !description || !category || !createdBy) {
      return next(new AppError("All fields are required", 400));
    }

    const course = await Course.create({
      title,
      description,
      category,
      createdBy,
    });
    if (!course) {
      return next(new AppError("Course not created Please try again", 400));
    }
    if (req.file) {
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        resource_type: "auto",
        folder: "lms",
      });
      if (result) {
        course.thumbnail.public_id = result.public_id;
        course.thumbnail.secure_url = result.secure_url;
      }
      fs.rm(`uploads/${req.file.filename}`);
    }
    await course.save();
    res.status(200).json({
      success: true,
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    console.log(error);
  }
};

//updateCourse
const updateCourse = async (req, res, next) => {};

//removeCourse
const removeCourse = async (req, res, next) => {};

export {
  getAllCourses,
  getLecturesByCourseId,
  createCourse,
  updateCourse,
  removeCourse,
};
