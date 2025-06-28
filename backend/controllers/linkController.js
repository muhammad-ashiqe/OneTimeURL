import QRCode from "qrcode";
import { ShortUrl } from "../models/urlModel.js";
import { v4 as uuidv4 } from "uuid";
import fetch from "node-fetch";

const { GA_MEASUREMENT_ID, GA_API_SECRET } = process.env;

export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl, expiryOption, customExpiryInDays } = req.body;

    // Calculate expiration
    let expiresAt = null;
    const oneClickDestroy = expiryOption === "one_click";

    if (expiryOption !== "one_click" && expiryOption !== "never") {
      const days =
        expiryOption === "custom"
          ? parseInt(customExpiryInDays)
          : parseInt(expiryOption);

      expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + days);
    }

    const shortId = uuidv4().slice(0, 8);
    const baseUrl = process.env.BASE_URL;
    const shortUrl = `${baseUrl}/${shortId}`;

    // Generate QR code
    let qrCode = null;
    try {
      qrCode = await QRCode.toDataURL(shortUrl);
    } catch (qrError) {
      console.error("QR code generation failed:", qrError);
    }

    const newUrl = new ShortUrl({
      originalUrl,
      shortId,
      createdAt: new Date(),
      expiresAt,
      oneClickDestroy,
      clicked: false,
    });

    await newUrl.save();

    res.status(201).json({
      shortUrl,
      expiresAt,
      oneClickDestroy,
      qrCode, // Send QR code in response
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const redirectToOriginal = async (req, res) => {
  try {
    const { shortId } = req.params;
    const urlDoc = await ShortUrl.findOne({ shortId });
    if (!urlDoc) return res.status(404).send("URL not found");

    // Handle one-click destruction AFTER redirect
    let shouldUpdate = false;
    
    if (urlDoc.oneClickDestroy && !urlDoc.clicked) {
      shouldUpdate = true;
    }

    // GA tracking
    const rawCookie = req.headers.cookie || "";
    const match = rawCookie.match(/_ga=GA\d+\.\d+\.(\d+\.\d+)/);
    const clientId = match ? match[1] : uuidv4();

    fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId,
          events: [
            {
              name: "click_short_url",
              params: { short_id: shortId }
            }
          ]
        }),
      }
    ).catch(console.error);

    // Perform redirect first
    res.redirect(urlDoc.originalUrl);

    // Update clicked status after sending response
    if (shouldUpdate) {
      urlDoc.clicked = true;
      await urlDoc.save();
    }

  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};


export const healthCheck = (req, res) => {
  try {
    res.status(200).json({ message: "server is healthy" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};