"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyCourses = exports.registerCourse = exports.getUserRegisteredCoursesByUserId = exports.getRegisteredCoursesByAdmin = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const node_mailjet_1 = __importDefault(require("node-mailjet"));
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const registeredCourseModel_1 = __importDefault(require("../models/registeredCourseModel"));
const mailjet = node_mailjet_1.default.apiConnect(process.env.MAILJET_API_PUBLIC_KEY, process.env.MAILJET_API_PRIVATE_KEY);
// @desc    Fetch all registered courses by admin
// @route   GET /api/register-courses
// @access  Private/Admin
const getRegisteredCoursesByAdmin = (0, asyncHandler_1.default)(async (req, res) => {
    const courses = await registeredCourseModel_1.default.find()
        .sort({ createdAt: -1 })
        .populate("course")
        .populate("user");
    res.status(200).json(courses);
});
exports.getRegisteredCoursesByAdmin = getRegisteredCoursesByAdmin;
// @desc    Fetch all registered courses of a student
// @route   GET /api/register-courses/:id
// @access  Private/Admin
const getUserRegisteredCoursesByUserId = (0, asyncHandler_1.default)(async (req, res) => {
    const courses = await registeredCourseModel_1.default.find({ user: req.params.id })
        .sort({ createdAt: -1 })
        .populate("course")
        .populate("user");
    res.status(200).json(courses);
});
exports.getUserRegisteredCoursesByUserId = getUserRegisteredCoursesByUserId;
// Desc Get all registered courses for a user
// @route GET /api/register-courses/mine
// @access Private
const getMyCourses = (0, asyncHandler_1.default)(async (req, res) => {
    const courses = await registeredCourseModel_1.default.find({ user: req.user._id })
        .sort({
        createdAt: -1,
    })
        .populate("course")
        .populate("user");
    res.status(200).json(courses);
});
exports.getMyCourses = getMyCourses;
// @desc    Register a course by student
// @route   POST /api/register-courses
// @access  Private
const registerCourse = (0, asyncHandler_1.default)(async (req, res) => {
    const { id, email, firstName, lastName, description, phoneNumber, title } = req.body;
    const course = await registeredCourseModel_1.default.create({
        user: req.user._id,
        course: id,
    });
    if (course) {
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
                            Name: `${firstName}`,
                        },
                    ],
                    Subject: `Welcome to your new tech course: ${title}`,
                    TextPart: `Successful registration for ${title}`,
                    HTMLPart: `<div 
									style="
										font-family: Montserrat, sans-serif;
										font-size: 15px;
										padding: 2rem;
									"
								>
									<h2>Hi, ${firstName}</h2>

									<p>Welcome to Tekskillup</p>

									<p>Congratulations on enrolling in ${title}. We’re thrilled to have you join our community of skilled up tech masters.</p>

									<h1>Ready to go?</h1>
									<p>Great! You can start your application by sending a chat or phone call to +234 703 996 7834.</p>

									<h1>Support</h1>
									<p>If you have any questions or need assistance, our support team is here to help. Feel free to reach out to us at admin@tekskillup.com or visit our Help Center for FAQs and more.</p>

									<h1>Feedback</h1>
									<p>We value your feedback. Once you’ve completed the course, please take a moment to rate and review it. Your insights help us improve and provide the best learning experience for everyone.</p>

									<p>Thank you for choosing Tekskillup for your learning needs. We’re excited to see you grow your skills and knowledge with us.</p>

									<p>Happy learning😁</p>
									<p>Best regards,</p>
									<p>Tekskillup Team</p>
									<p>&copy; 2024 Tekskillup. All Rights Reserved</p>
								</div>
						`,
                },
            ],
        });
        // Tekskillup admin email format
        const requestAdmin = mailjet.post("send", { version: "v3.1" }).request({
            Messages: [
                {
                    From: {
                        Email: "webmasterthetommedia@gmail.com",
                        Name: "Tekskillup",
                    },
                    To: [
                        {
                            Email: `${process.env.TEKSKILLUP_ADMIN_EMAIL_ADDRESS}`,
                            Name: `Tekskillup`,
                        },
                    ],
                    Subject: `New Student Registration: ${firstName} ${lastName} for ${title}`,
                    TextPart: `${firstName} ${lastName} registered for ${title}`,
                    HTMLPart: `<div 
									style="
										font-family: Montserrat, sans-serif;
										font-size: 15px;
										padding: 2rem;
									"
								>
									<h2>Hi, Tekskillup</h2>

									<p>I hope this message finds you well.</p>

									<p>I wanted to inform you that a new student has registered for a course on our platform. Below are the details of the registration:</p>
									<strong>
									Student Information:
                                    </strong>

									<ul>
                                        <li>
                                            <strong>First name:</strong> ${firstName}
                                        </li>
                                        <li>
                                            <strong>Last name:</strong> ${lastName}
                                        </li>
                                        <li>
                                            <strong>Email address:</strong> ${email}
                                        </li>
                                        <li>
                                            <strong>Phone number:</strong> ${phoneNumber}
                                        </li>
                                    </ul>

									<strong>
									Course Information:
                                    </strong>

									<ul>
                                        <li>
                                            <strong>Course title:</strong> ${title}
                                        </li>
                                        <li>
                                            <strong>Course description:</strong> ${description}
                                        </li>
                                        <li>
                                            <strong>Registration date:</strong> ${course.createdAt}
                                        </li>
                                    </ul>

									
									<p>This registration indicates our ongoing growth and the increasing interest in our courses. Please ensure that all necessary resources and support are available for the new student to have a smooth and enriching learning experience.</p>

									<p>Thank you for your attention to this matter.</p>

									<p>Best regards,</p>
									<p>Tekskillup Team</p>
									<p>&copy; 2024 Tekskillup. All Rights Reserved</p>
								</div>
						`,
                },
            ],
        });
        // Send email
        request
            .then(() => {
            res.status(201).json({
                message: "Successful registration for course",
            });
            return;
        })
            .catch((err) => {
            return err;
        });
        requestAdmin
            .then(() => {
            res.status(201);
        })
            .catch((err) => {
            console.log(err);
        });
    }
    else {
        res.status(400);
        throw new Error("Internal server error!");
    }
});
exports.registerCourse = registerCourse;
