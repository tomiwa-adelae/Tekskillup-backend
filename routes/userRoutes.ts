import express from "express";

import {
	loginUser,
	registerUser,
	getUsers,
	getUserById,
	deleteUser,
	updateUserProfile,
	updateUserPassword,
	logoutUser,
	resetPassword,
	verifyCode,
	updatePassword,
	uploadProfileImage,
} from "../controllers/userController";
import { admin, protect } from "../middleware/authMiddleware";
import {
	loginValidator,
	registerValidator,
	resetPasswordValidator,
	updateNewPasswordValidator,
	updatePasswordValidator,
	validate,
	verifyCodeValidator,
} from "../utils/validators";

const router = express.Router();

router
	.route("/")
	.post(validate(registerValidator), registerUser)
	.get(protect, admin, getUsers);
router
	.route("/:id")
	.get(protect, admin, getUserById)
	.delete(protect, admin, deleteUser);
router.route("/auth").post(validate(loginValidator), loginUser);
router.route("/profile").put(protect, updateUserProfile);
router
	.route("/password")
	.put(protect, validate(updatePasswordValidator), updateUserPassword);
router.post("/logout", logoutUser);
router
	.route("/reset-password")
	.post(validate(resetPasswordValidator), resetPassword);
router.route("/verify-code").post(validate(verifyCodeValidator), verifyCode);
router
	.route("/update-password/:id/:code")
	.post(validate(updateNewPasswordValidator), updatePassword);

router.route("/image").put(protect, uploadProfileImage);

export default router;
