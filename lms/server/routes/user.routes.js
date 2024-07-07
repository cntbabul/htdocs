import { Router } from "express";
const router = Router();
import {
  register,
  login,
  logout,
  getProfile,
} from "../controllers/user.controller.js";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", getProfile);
export default router;
