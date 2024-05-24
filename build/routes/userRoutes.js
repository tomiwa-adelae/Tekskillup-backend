"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const validators_1 = require("../utils/validators");
const router = express_1.default.Router();
router
    .route("/")
    .post((0, validators_1.validate)(validators_1.registerValidator), userController_1.registerUser)
    .get(authMiddleware_1.protect, authMiddleware_1.admin, userController_1.getUsers);
router
    .route("/:id")
    .get(authMiddleware_1.protect, authMiddleware_1.admin, userController_1.getUserById)
    .delete(authMiddleware_1.protect, authMiddleware_1.admin, userController_1.deleteUser);
router.route("/auth").post((0, validators_1.validate)(validators_1.loginValidator), userController_1.loginUser);
router.route("/profile").put(authMiddleware_1.protect, userController_1.updateUserProfile);
router
    .route("/password")
    .put(authMiddleware_1.protect, (0, validators_1.validate)(validators_1.updatePasswordValidator), userController_1.updateUserPassword);
router.post("/logout", userController_1.logoutUser);
router
    .route("/reset-password")
    .post((0, validators_1.validate)(validators_1.resetPasswordValidator), userController_1.resetPassword);
router.route("/verify-code").post((0, validators_1.validate)(validators_1.verifyCodeValidator), userController_1.verifyCode);
router
    .route("/update-password/:id/:code")
    .post((0, validators_1.validate)(validators_1.updateNewPasswordValidator), userController_1.updatePassword);
router.route("/image").put(authMiddleware_1.protect, userController_1.uploadProfileImage);
exports.default = router;
