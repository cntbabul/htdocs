import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";
import {
  getAllCourses,
  getLecturesByCourseId,
  createCourse,
  updateCourse,
  removeCourse,
} from "../controllers/course.controller.js";
const router = Router();

router.get("/get-all-courses", getAllCourses);
router.post("/create-course", upload.single("thumbnail"), createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", removeCourse);

router.get("/:id", isLoggedIn, getLecturesByCourseId);

//export
export default router;
