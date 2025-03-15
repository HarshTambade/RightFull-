import express from "express";
import { createOrder, verifyPayment } from "../controller/payment.controller.js";
const router = express.Router();

router.post("/", createOrder);
router.post("/verify", verifyPayment);
export default router;