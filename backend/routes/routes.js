import express from "express";
import { createShortUrl, healthCheck, redirectToOriginal } from "../controllers/linkController.js";

export const router = express();

router.post("/url", createShortUrl);
router.get("/:shortId", redirectToOriginal);
// router.get("/qrcode/:shortId", generateQRCode); 
router.get("/health",healthCheck)
