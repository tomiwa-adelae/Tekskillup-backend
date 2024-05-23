"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactFormValidator = exports.updateNewPasswordValidator = exports.verifyCodeValidator = exports.resetPasswordValidator = exports.updatePasswordValidator = exports.courseLessonValidator = exports.registerValidator = exports.loginValidator = exports.validate = void 0;
const express_validator_1 = require("express-validator");
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
exports.validate = validate;
exports.loginValidator = [
    (0, express_validator_1.body)("email").trim().isEmail().withMessage("Email is required"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password is required!"),
];
exports.registerValidator = [
    (0, express_validator_1.body)("firstName").notEmpty().withMessage("First name is required!"),
    (0, express_validator_1.body)("lastName").notEmpty().withMessage("Last name is required!"),
    (0, express_validator_1.body)("email").trim().isEmail().withMessage("Email is required"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password is required!"),
    (0, express_validator_1.body)("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password should contain at least 6 characters!"),
    (0, express_validator_1.body)("phoneNumber")
        .isLength({ min: 11, max: 11 })
        .withMessage("Valid phone number is required!"),
];
exports.courseLessonValidator = [
    (0, express_validator_1.body)("content").notEmpty().withMessage("Lesson content is required!"),
];
exports.updatePasswordValidator = [
    (0, express_validator_1.body)("currentPassword")
        .notEmpty()
        .withMessage("Current password is required!"),
    (0, express_validator_1.body)("newPassword").notEmpty().withMessage("New password is required!"),
    (0, express_validator_1.body)("confirmPassword")
        .notEmpty()
        .withMessage("Confirm password is required!"),
    (0, express_validator_1.body)("newPassword")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password should contain at least 6 characters!"),
];
exports.resetPasswordValidator = [
    (0, express_validator_1.body)("email").trim().isEmail().withMessage("Email is required"),
];
exports.verifyCodeValidator = [
    (0, express_validator_1.body)("email").trim().isEmail().withMessage("Email is required"),
    (0, express_validator_1.body)("code").notEmpty().withMessage("Code is required!"),
];
exports.updateNewPasswordValidator = [
    (0, express_validator_1.body)("id").notEmpty().withMessage("Internal server error!"),
    (0, express_validator_1.body)("code").notEmpty().withMessage("Internal server error!"),
    (0, express_validator_1.body)("newPassword").notEmpty().withMessage("New password is required!"),
    (0, express_validator_1.body)("confirmPassword")
        .notEmpty()
        .withMessage("Confirm password is required!"),
];
exports.contactFormValidator = [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Name is required!"),
    (0, express_validator_1.body)("email").trim().isEmail().withMessage("Email is required"),
    (0, express_validator_1.body)("subject").notEmpty().withMessage("Subject is required!"),
    (0, express_validator_1.body)("message").notEmpty().withMessage("Subject is required!"),
    (0, express_validator_1.body)("phoneNumber")
        .isLength({ min: 11, max: 11 })
        .withMessage("Valid phone number is required!"),
];
