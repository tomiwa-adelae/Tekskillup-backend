"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const courseRoutes_1 = __importDefault(require("./routes/courseRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const registerCourseRoutes_1 = __importDefault(require("./routes/registerCourseRoutes"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
(0, db_1.connectDB)();
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ credentials: true, origin: process.env.CLIENT_URL }));
// app.use(cookieParser());
// API Routes
app.use("/api/courses", courseRoutes_1.default);
app.use("/api/users", userRoutes_1.default);
app.use("/api/register-courses", registerCourseRoutes_1.default);
app.use("/api/contact", contactRoutes_1.default);
app.get("/", (req, res) => {
    res.send(" API is up and running... ");
});
// Middleware
app.use(errorMiddleware_1.notFound);
app.use(errorMiddleware_1.errorHandler);
app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
