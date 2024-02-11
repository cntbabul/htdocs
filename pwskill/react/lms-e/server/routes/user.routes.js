import { Router } from "express";
import { getProfile,logout, login,register } from "../controllers/user.controller";
// import { register } from "module";


const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', getProfile);

export default router; 