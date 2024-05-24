"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadProfileImage = exports.updatePassword = exports.verifyCode = exports.resetPassword = exports.logoutUser = exports.updateUserPassword = exports.updateUserProfile = exports.deleteUser = exports.getUserById = exports.getUsers = exports.loginUser = exports.registerUser = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const node_mailjet_1 = __importDefault(require("node-mailjet"));
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const userModel_1 = __importDefault(require("../models/userModel"));
const generateToken_1 = __importDefault(require("../utils/generateToken"));
const tokenModel_1 = __importDefault(require("../models/tokenModel"));
const cloudinaryMiddleware_1 = __importDefault(require("../middleware/cloudinaryMiddleware"));
const mailjet = node_mailjet_1.default.apiConnect(process.env.MAILJET_API_PUBLIC_KEY, process.env.MAILJET_API_PRIVATE_KEY);
// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = (0, asyncHandler_1.default)(async (req, res) => {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const userExist = await userModel_1.default.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error("User already exists!");
    }
    const user = await userModel_1.default.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
    });
    if (user) {
        const token = (0, generateToken_1.default)(res, user._id);
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            bio: user.bio,
            phoneNumber: user.phoneNumber,
            image: user.image,
            isAdmin: user.isAdmin,
            token,
        });
    }
    else {
        res.status(400);
        throw new Error("Internal server error!");
    }
});
exports.registerUser = registerUser;
// @desc    Auth a user
// @route   POST /api/users/auth
// @access  Public
const loginUser = (0, asyncHandler_1.default)(async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel_1.default.findOne({ email });
    // @ts-ignore
    if (user && (await user.matchPassword(password))) {
        const token = (0, generateToken_1.default)(res, user._id);
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            bio: user.bio,
            phoneNumber: user.phoneNumber,
            image: user.image,
            isAdmin: user.isAdmin,
            token,
        });
    }
    else {
        res.status(400);
        throw new Error("Invalid email or password!");
    }
});
exports.loginUser = loginUser;
// @desc    Fetch all users by admin
// @route   GET /api/users
// @access  Private/Admin
const getUsers = (0, asyncHandler_1.default)(async (req, res) => {
    const keyword = req.query.keyword
        ? {
            $or: [
                {
                    firstName: {
                        $regex: req.query.keyword,
                        $options: "i",
                    },
                },
                {
                    lastName: {
                        $regex: req.query.keyword,
                        $options: "i",
                    },
                },
                {
                    email: {
                        $regex: req.query.keyword,
                        $options: "i",
                    },
                },
            ],
        }
        : {};
    const user = await userModel_1.default.find({ ...keyword, _id: { $ne: req.user._id } })
        .sort({ createdAt: -1 })
        .select("-password");
    res.status(200).json(user);
});
exports.getUsers = getUsers;
// @desc    Fetch a user's details by admin
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = (0, asyncHandler_1.default)(async (req, res) => {
    const user = await userModel_1.default.findById(req.params.id).select("-password");
    if (user) {
        res.json(user);
    }
    else {
        res.status(400);
        throw new Error("Internal server error!");
    }
});
exports.getUserById = getUserById;
// @desc    Delete a user by admin
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = (0, asyncHandler_1.default)(async (req, res) => {
    const user = await userModel_1.default.findById(req.params.id);
    if (user) {
        if (user.isAdmin) {
            res.status(400);
            throw new Error("You can not delete an admin!");
        }
        if (user.imageId) {
            await cloudinaryMiddleware_1.default.uploader.destroy(user.imageId, {
                invalidate: true,
            });
            await userModel_1.default.deleteOne({ _id: user._id });
            res.status(200).json({ message: "User deleted successfully!" });
        }
        else {
            await userModel_1.default.deleteOne({ _id: user._id });
            res.status(200).json({ message: "User deleted successfully!" });
        }
    }
    else {
        res.status(404);
        throw new Error("Internal server error!");
    }
});
exports.deleteUser = deleteUser;
// @desc    Update a user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = (0, asyncHandler_1.default)(async (req, res) => {
    const user = await userModel_1.default.findById(req.user._id);
    if (user) {
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        user.email = user.email;
        user.bio = req.body.bio || user.bio;
        user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
        user.image = user.image;
        const updatedUser = await user.save();
        const token = (0, generateToken_1.default)(res, user._id);
        res.json({
            _id: updatedUser._id,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            bio: updatedUser.bio,
            phoneNumber: updatedUser.phoneNumber,
            image: updatedUser.image,
            isAdmin: updatedUser.isAdmin,
            token,
        });
    }
    else {
        res.status(404);
        throw new Error("Internal server error!");
    }
});
exports.updateUserProfile = updateUserProfile;
// @desc    Update a user password
// @route   PUT /api/users/password
// @access  Private
const updateUserPassword = (0, asyncHandler_1.default)(async (req, res) => {
    const { currentPassword, newPassword, confirmPassword } = req.body;
    const user = await userModel_1.default.findById(req.user._id);
    if (user) {
        if (newPassword !== confirmPassword) {
            res.status(400);
            throw new Error("Passwords do not match!");
        }
        // @ts-ignore
        if (user && (await user.matchPassword(currentPassword))) {
            user.password = newPassword;
            await user.save();
            res.status(200).json({ message: "Password changed successfully!" });
        }
        else {
            res.status(400);
            throw new Error("Invalid current password");
        }
    }
    else {
        res.status(404);
        throw new Error("Internal server error!");
    }
});
exports.updateUserPassword = updateUserPassword;
// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public;
const logoutUser = (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ message: "Logged out successfully" });
};
exports.logoutUser = logoutUser;
// Desc Reset password
// @route POST /api/users/reset-password
// @access Public
const resetPassword = (0, asyncHandler_1.default)(async (req, res) => {
    const { email } = req.body;
    const user = await userModel_1.default.findOne({ email });
    if (user) {
        let token = await tokenModel_1.default.findOne({ userId: user._id });
        if (!token) {
            token = await new tokenModel_1.default({
                userId: user._id,
                code: Math.floor(100000 + Math.random() * 900000),
            }).save();
            const request = mailjet.post("send", { version: "v3.1" }).request({
                Messages: [
                    {
                        From: {
                            Email: "webmasterthetommedia@gmail.com",
                            Name: "Tekskillup",
                        },
                        To: [
                            {
                                Email: `${email}`,
                                Name: `${user.firstName}`,
                            },
                        ],
                        Subject: `Verification code`,
                        TextPart: `Your verification code is : ${token.code}`,
                        HTMLPart: `<div 
										style="
											font-family: Montserrat, sans-serif;
											font-size: 15px;
											padding: 2rem;
										"
									>
										<h2>Tekskillup</h2>

										<p>We received a request to reset the password for your account. To proceed with the password reset process, please use the following verification code:</p>

										<h5>Your verification code is: </h5>

										<h1>${token.code}</h1>

										<p>Please enter this code on the password reset page to complete the process. There's nothing to do or worry about if it wasn't you. You can keep on keeping on.</p>

										<p>Thank you for your attention to this matter.</p>
										<p>Best regards,</p>
										<p>&copy; 2024 Tekskillup. All Rights Reserved</p>
									</div>
							`,
                    },
                ],
            });
            // Send email
            request
                .then(() => {
                res.status(201).json({ msg: "Email sent successfully!" });
                return;
            })
                .catch((err) => {
                return err;
            });
        }
        else {
            res.status(401);
            throw new Error("A verification code has already been dispatched to your email!");
        }
    }
    else {
        res.status(401);
        throw new Error("The email provided doesn't match any existing user! Please sign up now!");
    }
});
exports.resetPassword = resetPassword;
// Desc Verify code
// @route POST /api/users/verify-code
// @access Public
const verifyCode = (0, asyncHandler_1.default)(async (req, res) => {
    const { email, code } = req.body;
    const user = await userModel_1.default.findOne({ email });
    if (user) {
        const token = await tokenModel_1.default.findOne({ userId: user._id, code });
        if (token) {
            res.status(200).json({ id: user._id, message: "Verified!" });
        }
        else {
            res.status(401);
            throw new Error("Invalid reset code!");
        }
    }
    else {
        res.status(401);
        throw new Error("Internal server error!");
    }
});
exports.verifyCode = verifyCode;
// Desc Update user new passwords
// @route POST /api/users/update-password/:id/:code
// @access Public
const updatePassword = (0, asyncHandler_1.default)(async (req, res) => {
    const { id, code, newPassword, confirmPassword } = req.body;
    if (newPassword !== confirmPassword) {
        res.status(401);
        throw new Error("Passwords do not match!");
    }
    const user = await userModel_1.default.findById(id);
    if (user) {
        const token = await tokenModel_1.default.findOne({
            userId: user._id,
            code,
        });
        if (!token) {
            res.status(401);
            throw new Error("Invalid reset code! Please try again");
        }
        user.password = newPassword;
        await user.save();
        await token.deleteOne({ userId: token.userId });
        res.status(201).json({ message: "Password successfully updated!" });
    }
    else {
        res.status(401);
        throw new Error("An error occurred! User not found!");
    }
});
exports.updatePassword = updatePassword;
// @desc    Update a user image
// @route   PUT /api/users/:id/image
// @access  Private
const uploadProfileImage = (0, asyncHandler_1.default)(async (req, res) => {
    const { image } = req.body;
    const user = await userModel_1.default.findById(req.user._id);
    if (user) {
        if (user.imageId) {
            await cloudinaryMiddleware_1.default.uploader.destroy(user.imageId, {
                invalidate: true,
            });
            const uploadResponse = await cloudinaryMiddleware_1.default.uploader.upload(image, {
                upload_preset: "tekskillup",
            });
            user.image = uploadResponse.url;
            user.imageId = uploadResponse.public_id;
            const updatedUser = await user.save();
            const token = (0, generateToken_1.default)(res, updatedUser._id);
            res.json({
                _id: updatedUser._id,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                email: updatedUser.email,
                bio: updatedUser.bio,
                phoneNumber: updatedUser.phoneNumber,
                image: updatedUser.image,
                isAdmin: updatedUser.isAdmin,
                token,
            });
        }
        else {
            const uploadResponse = await cloudinaryMiddleware_1.default.uploader.upload(image, {
                upload_preset: "tekskillup",
            });
            user.image = uploadResponse.url;
            user.imageId = uploadResponse.public_id;
            const updatedUser = await user.save();
            const token = (0, generateToken_1.default)(res, updatedUser._id);
            res.json({
                _id: updatedUser._id,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                email: updatedUser.email,
                bio: updatedUser.bio,
                phoneNumber: updatedUser.phoneNumber,
                image: updatedUser.image,
                isAdmin: updatedUser.isAdmin,
                token,
            });
        }
    }
    else {
        res.status(400);
        throw new Error("Internal server error!");
    }
});
exports.uploadProfileImage = uploadProfileImage;
