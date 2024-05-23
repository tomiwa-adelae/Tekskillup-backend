import express from "express";

import { sendEmailToAdmin } from "../controllers/contactController";

const router = express.Router();

router.post("/", sendEmailToAdmin);

export default router;
