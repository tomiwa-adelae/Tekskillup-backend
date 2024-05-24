import dotenv from "dotenv";
dotenv.config();

import Mailjet from "node-mailjet";

import { Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import User from "../models/userModel";
import generateToken from "../utils/generateToken";
import Token from "../models/tokenModel";
import cloudinary from "../middleware/cloudinaryMiddleware";

const mailjet = Mailjet.apiConnect(
	process.env.MAILJET_API_PUBLIC_KEY!,
	process.env.MAILJET_API_PRIVATE_KEY!
);

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
	const { firstName, lastName, email, password, phoneNumber } = req.body;

	const userExist = await User.findOne({ email });

	if (userExist) {
		res.status(400);
		throw new Error("User already exists!");
	}

	const user = await User.create({
		firstName,
		lastName,
		email,
		phoneNumber,
		password,
	});

	if (user) {
		generateToken(res, user._id);

		res.status(201).json({
			_id: user._id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			bio: user.bio,
			phoneNumber: user.phoneNumber,
			image: user.image,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(400);
		throw new Error("Internal server error!");
	}
});

// @desc    Auth a user
// @route   POST /api/users/auth
// @access  Public
const loginUser = asyncHandler(async (req: Request, res: Response) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });
	// @ts-ignore
	if (user && (await user.matchPassword(password))) {
		generateToken(res, user._id);
		res.status(201).json({
			_id: user._id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			bio: user.bio,
			phoneNumber: user.phoneNumber,
			image: user.image,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(400);
		throw new Error("Invalid email or password!");
	}
});

// @desc    Fetch all users by admin
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req: Request, res: Response) => {
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
	const user = await User.find({ ...keyword, _id: { $ne: req.user._id } })
		.sort({ createdAt: -1 })
		.select("-password");

	res.status(200).json(user);
});

// @desc    Fetch a user's details by admin
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req: Request, res: Response) => {
	// const user = await User.findById(req.params.id)
	// 	.sort({ createdAt: -1 })
	// 	.select("-password");

	// if (user) {
	// 	res.status(200).json(user);
	// } else {
	// 	res.status(400);
	// 	throw new Error("Internal server error!");
	// }

	// res.status(200).json(user);
	const user = await User.findById(req.params.id).select("-password");
	if (user) {
		res.json(user);
	} else {
		res.status(400);
		throw new Error("Internal server error!");
	}
});

// @desc    Delete a user by admin
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req: Request, res: Response) => {
	const user = await User.findById(req.params.id);

	if (user) {
		if (user.isAdmin) {
			res.status(400);
			throw new Error("You can not delete an admin!");
		}

		if (user.imageId) {
			await cloudinary.uploader.destroy(user.imageId, {
				invalidate: true,
			});

			await User.deleteOne({ _id: user._id });
			res.status(200).json({ message: "User deleted successfully!" });
		} else {
			await User.deleteOne({ _id: user._id });
			res.status(200).json({ message: "User deleted successfully!" });
		}
	} else {
		res.status(404);
		throw new Error("Internal server error!");
	}
});

// @desc    Update a user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
	const user = await User.findById(req.user._id);

	if (user) {
		user.firstName = req.body.firstName || user.firstName;
		user.lastName = req.body.lastName || user.lastName;
		user.email = user.email;
		user.bio = req.body.bio || user.bio;
		user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
		user.image = user.image;

		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			firstName: updatedUser.firstName,
			lastName: updatedUser.lastName,
			email: updatedUser.email,
			bio: updatedUser.bio,
			phoneNumber: updatedUser.phoneNumber,
			image: updatedUser.image,
			isAdmin: updatedUser.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error("Internal server error!");
	}
});

// @desc    Update a user password
// @route   PUT /api/users/password
// @access  Private
const updateUserPassword = asyncHandler(async (req: Request, res: Response) => {
	const { currentPassword, newPassword, confirmPassword } = req.body;

	const user = await User.findById(req.user._id);

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
		} else {
			res.status(400);
			throw new Error("Invalid current password");
		}
	} else {
		res.status(404);
		throw new Error("Internal server error!");
	}
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public;
const logoutUser = (req: Request, res: Response) => {
	res.cookie("jwt", "", {
		httpOnly: true,
		expires: new Date(0),
	});
	res.status(200).json({ message: "Logged out successfully" });
};

// Desc Reset password
// @route POST /api/users/reset-password
// @access Public
const resetPassword = asyncHandler(async (req: Request, res: Response) => {
	const { email } = req.body;

	const user = await User.findOne({ email });

	if (user) {
		let token = await Token.findOne({ userId: user._id });

		if (!token) {
			token = await new Token({
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
				.catch((err: any) => {
					return err;
				});
		} else {
			res.status(401);
			throw new Error(
				"A verification code has already been dispatched to your email!"
			);
		}
	} else {
		res.status(401);
		throw new Error(
			"The email provided doesn't match any existing user! Please sign up now!"
		);
	}
});

// Desc Verify code
// @route POST /api/users/verify-code
// @access Public
const verifyCode = asyncHandler(async (req: Request, res: Response) => {
	const { email, code } = req.body;

	const user = await User.findOne({ email });

	if (user) {
		const token = await Token.findOne({ userId: user._id, code });

		if (token) {
			res.status(200).json({ id: user._id, message: "Verified!" });
		} else {
			res.status(401);
			throw new Error("Invalid reset code!");
		}
	} else {
		res.status(401);
		throw new Error("Internal server error!");
	}
});

// Desc Update user new passwords
// @route POST /api/users/update-password/:id/:code
// @access Public
const updatePassword = asyncHandler(async (req: Request, res: Response) => {
	const { id, code, newPassword, confirmPassword } = req.body;

	if (newPassword !== confirmPassword) {
		res.status(401);
		throw new Error("Passwords do not match!");
	}

	const user = await User.findById(id);

	if (user) {
		const token = await Token.findOne({
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
	} else {
		res.status(401);
		throw new Error("An error occurred! User not found!");
	}
});

// @desc    Update a user image
// @route   PUT /api/users/:id/image
// @access  Private
const uploadProfileImage = asyncHandler(async (req: Request, res: Response) => {
	const { image } = req.body;
	const user = await User.findById(req.user._id);

	if (user) {
		if (user.imageId) {
			await cloudinary.uploader.destroy(user.imageId, {
				invalidate: true,
			});

			const uploadResponse = await cloudinary.uploader.upload(image, {
				upload_preset: "tekskillup",
			});

			user.image = uploadResponse.url;
			user.imageId = uploadResponse.public_id;

			const updatedUser = await user.save();

			res.status(200).json(updatedUser);
		} else {
			const uploadResponse = await cloudinary.uploader.upload(image, {
				upload_preset: "tekskillup",
			});

			user.image = uploadResponse.url;
			user.imageId = uploadResponse.public_id;

			const updatedUser = await user.save();

			res.status(200).json(updatedUser);
		}
	} else {
		res.status(400);
		throw new Error("Internal server error!");
	}
});

export {
	registerUser,
	loginUser,
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
};
